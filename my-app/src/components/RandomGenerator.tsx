import React, {useEffect, useState } from 'react';
import names from '../assets/imiona.json';

const RandomGenerator: React.FC = () => {
  const [name, setName] = useState<string | null>(null);
  const [generateRandom, setGenerateRandom] = useState<(() => number) | null>(null);

  // Ładowanie WebAssembly
  useEffect(() => {
    const loadWasm = async () => {
      const script = document.createElement('script');
      script.src = '/hello.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        const checkModule = setInterval(() => {
          const module = (window as any).Module;
          if (module && module.cwrap) {
            clearInterval(checkModule);
            const wrapped = module.cwrap('generate_random', 'number', []);
            setGenerateRandom(() => wrapped);
          }
        }, 100);
      };
    };

    loadWasm();
  }, []);

  useEffect(() => {
          const savedName = localStorage.getItem('name');
          if (savedName) {
              setName(JSON.parse(savedName));
          }
      }, []);
  
      useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name));
      }, [name]);

  useEffect(() => {
  if (generateRandom && !name) { 
    const initialIndex = generateRandom() % names.length;
    const selectedName = names[initialIndex];
    setName(selectedName);

    const interval = setInterval(() => {
      const newIndex = generateRandom() % names.length;
      const newName = names[newIndex];
      setName(newName);
      window.location.reload(); 
    }, 86400000); 

    return () => clearInterval(interval);
  }
}, [generateRandom, name]);

  return (
    <div>
      {name ? <p>{name}</p> : <p>Ładuję imię...</p>}
    </div>
  );
};

export default RandomGenerator;

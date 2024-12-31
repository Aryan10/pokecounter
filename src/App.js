import './App.css';
import { useState, useEffect } from 'react';
import { Dex } from '@pkmn/dex';
import { Card } from './Card';
import { Finder } from './Finder';

const App = () => {
  const natdex = {};
  Dex.species.all().forEach((poke) => {
    const isvalid = (num) => num && num > 0 && num <= 1025;
    if (isvalid(poke.num) && natdex[poke.num] === undefined) 
      natdex[poke.num] = poke;
  });

  const [found, setFound] = useState(() => {
    const saved = localStorage.getItem('found');
    return saved ? JSON.parse(saved) : {};
  });
  useEffect(() => {
    localStorage.setItem('found', JSON.stringify(found));
  }, [found]);

  const [viewAll, setViewAll] = useState(true);

  return (
    <div className="App">
      <div className="CardsContainer">
        {Object.keys(natdex).map((num) => {
          if (!viewAll && found[num] === undefined) return null;
          return (
          <Card key={num} num={num} poke={natdex[num]} found={found} viewAll={viewAll} />
          );
        })}
      </div>
      <div className="FinderContainer">
        <Finder found={found} setFound={setFound} natdex={natdex} viewAll={viewAll} setViewAll={setViewAll} />
      </div>
    </div>
  );
};

export default App;

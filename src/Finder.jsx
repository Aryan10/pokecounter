import React, { useState } from 'react';
import './Finder.css';

export const Finder = ({ found, setFound, natdex, viewAll, setViewAll }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = search;
    if (!name) return;

    const simplify = (str) => str.toLowerCase().replace(`’`, '').replace(/ /g, '');
    const poke = Object.values(natdex).find((poke) => simplify(poke.name) === simplify(name));
    if (!poke || found[poke.num] !== undefined) return;
    setFound((prev) => ({ ...prev, [poke.num]: true }));
    setSearch('');
  };

  const handleReset = () => {
    setFound({});
  };

  const handleCheckbox = (e) => {
    setViewAll(!e.target.checked);
  };

  return (
    <div className="Finder">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Enter Pokémon name!"
          className="Finder-input"
        />
        <button type="submit" className="Finder-submit">Submit</button>
      </form>
      <div className="Finder-info">
        <p className="Finder-count">Found: {Object.keys(found).length}/1025</p>
        <button className="Finder-reset" onClick={handleReset}>Reset</button>
      </div>
      <div className="Finder-checkbox">
        <label>
          <input
            type="checkbox"
            onChange={handleCheckbox}
          />
          Hide Pokémon not found yet
        </label>
      </div>
    </div>
  );
};

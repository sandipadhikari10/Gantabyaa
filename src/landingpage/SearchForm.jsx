import React from "react";
import './SearchForm.css';

const SearchForm = () => {
  return (
    <div className="search-form">
      <div className="form-group">
        <label>Location</label>
        <select>
          <option>Outside Valley</option>
          <option>Inside Valley</option>
        </select>
      </div>
      <div className="form-group">
        <label>Take Away Date</label>
        <input type="date" />
      </div>
      <div className="form-group">
        <label>Visitors</label>
        <input type="number" placeholder="No. of Visitors"  min={0} max={8}/>
      </div>
      <button className="search-btn">Search Vehicle</button>
    </div>
  );
};

export default SearchForm;

import React, { Component } from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <input
        name="query"
        className="form-control my-3"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBox;

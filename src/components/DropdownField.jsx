import React from 'react';

const DropdownField = ({ label, name, value, onChange, options }) => (
  <div className="dropdown-field">
    <label htmlFor={name}>{label}</label>
    <select id={name} name={name} value={value} onChange={onChange} required>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default DropdownField;
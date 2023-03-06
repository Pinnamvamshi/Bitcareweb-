import React, { useState } from 'react';
import "./consentForm.css";
import "./patientinfo.css";

function CheckboxGroup({ options, onChange }) {
  const [selected, setSelected] = useState([]);
  

  function handleChange(event) {
    const value = event.target.value;
    if (selected.includes(value)) {
      setSelected(selected.filter(item => item !== value));
    } else {
      setSelected([...selected, value]);
    }
    onChange(selected);
  }

  return (
    <div className='checkbox-container'>
      {options.map(option => (
        <div className='checkboxgroup' key={option.value}>
            {/* <label className='points'> */}
            <div>
                <input
                    type="checkbox"
                    value={option.value}
                    checked={selected.includes(option.value)}
                    onChange={handleChange}
                /> 
          </div>
          <div className='pconsent'>
            <label>
              {option.label}
              {/* {option.subtext} */}
            </label>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default CheckboxGroup;

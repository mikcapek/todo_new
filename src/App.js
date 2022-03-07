import React, { useState } from 'react';


const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select
        value={value ?? ""}
        placeholder='Select an action...'
        onChange={e => onChange(e.target.value)}>
        {options.map(option => (
          <option key={ option } value={ option }>{ option }</option>
        ))}
      </select>
    </label>
  );
};

const App = () => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const actionActions = ["Walk", "Run", "Swim", "Sleep", "Watch T.V.", "Read"]
  const [selected, setSelected] = useState(Object.fromEntries(daysOfWeek.map(day => [day, null])));

  return (
    <div>
      { Object.entries(selected).map(([day, action]) => {
        return (
          <Dropdown
            key={ day}
            label={ day }
            value={ action }
            options={ actionActions }
            onChange={ newValue => setSelected(cur => { return {...cur, [day]: newValue}})}
            />
        )
      })}      
    </div>
    
  );
};



export default App;
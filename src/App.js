import React, { useState } from 'react';


// Const App = () => {
//   return (
//     <div>
//       <Whatever/>
//     </div>
//   );
// }

// console.log('first Render')

// const Whatever = () => {
//   const someText = console.log('I love Chocolate')

// } 

// console.log('Second Render')

// export default App;

const App = () => {

  const optionsAction = [
    { label: 'Walk', value: 'Walk' },
    { label: 'Run', value: 'Run' },
    { label: 'Swim', value: 'Swim' },
    { label: 'Sleep', value: 'Sleep' },
    { label: 'Watch T.V.', value: 'Watch T.V.' },
    { label: 'Read', value: 'Read' },

  ];


  const [Monday, setMonday] = React.useState('Walk');
  const [Tuesday, setTuesday ] = React.useState('Walk');
  const [Wednesday, setWednesday ] = React.useState('Walk');
  const [Thursday, setThursday ] = React.useState('Walk');
  const [Friday, setFriday ] = React.useState('Walk');

  const handleMondayChange = (event) => {
    setMonday(event.target.value);
  };
  
  const handleTuesdayChange = (event) => {
    setTuesday(event.target.value);
  };

  const handleWednesdayChange = (event) => {
    setWednesday(event.target.value);
  };

  const handleThursdayChange = (event) => {
    setThursday(event.target.value);
  };

  const handleFridayChange = (event) => {
    setFriday(event.target.value);
  };

  return (
    <div>
      <p>Monday</p>
      <Dropdown
        options={optionsAction}
        value={Monday}
        onChange={handleMondayChange}
      />
      <p>Tuesday</p>
      <Dropdown
        options={optionsAction}
        value={Tuesday}
        onChange={handleTuesdayChange}
      />
      <p>Wednesday</p>
      <Dropdown
        options={optionsAction}
        value={Wednesday}
        onChange={handleWednesdayChange}
      />
      <p>Thursday</p>
      <Dropdown
        options={optionsAction}
        value={Thursday}
        onChange={handleThursdayChange}
      />
      <p>Friday</p>
      <Dropdown
        options={optionsAction}
        value={Friday}
        onChange={handleFridayChange}
      />

      
    </div>
    
  );
};


const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};



export default App;
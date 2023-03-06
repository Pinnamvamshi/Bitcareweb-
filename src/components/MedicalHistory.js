import React, { useState } from 'react';
import "./MedicalHistory.css";

const MedicalHistory = () => {

  const [todos, setTodos] = useState([]);
   const [inputValue, setInputValue] = useState('');
   const [showInput, setShowInput] = useState(true);

   const handleAddTodo = () => {
     setTodos([...todos, inputValue]);
     setInputValue('');
     setShowInput(false);
   }

   const handleInputChange = (e) => {
     setInputValue(e.target.value);
   }

   

    const [heading, setHeading] = useState('');
  const [subheading, setSubheading] = useState('');
  const [list, setList] = useState([]);
  

  const handleHeading = (e) => {
    setHeading(e.target.value);
  }

  const handleSubheading = (e) => {
    setSubheading(e.target.value);
  }

  const handleAdd = () => {
    setList([...list, {heading: heading, subheading: subheading}]);
    setHeading('');
    setSubheading('');
  }

  const buttons = () => {
    setSubheading(true);
  
  }

   return (
    <div className='main'>
      {showInput && 
        <div className='input'>
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} 
          />
          <button className='btn' onClick={handleAddTodo}>Add</button>
        </div>
      }
      <div className='headinginputs'>
      
      {!showInput && 
        <div>
          <div>
            <label>Heading:</label>
            <input type="text" value={heading} placeholder="enter heading"  onChange={handleHeading} />
            <br />
            <div className='btns'>
              <button className='btn' onClick={buttons}>Button 1</button>
              <button className='btn' onClick={buttons}>Button 2</button>
              <button className='btn' onClick={buttons}>Button 3</button>
            </div>
            <br />
            {subheading !== '' &&
              <>
                <label>Subheading:</label>
                <input type="text" value={subheading} onChange={handleSubheading} />
                <br />
              </>
            }
            <button className='btn' onClick={handleAdd}>Add</button>
          </div>
          <br />
          <ul>
        {todos.map((todo, index) => (
          <p className='lists' key={index}>
            {todo}
            

            </p>
        ))}
      </ul>
          <div>
            <ul className='lists'>
              {list.map((item, index) => (
                <li key={index}>{item.heading} <br/> <ul key={index}>{item.subheading}</ul></li>
              ))}
            </ul>
          </div>
        </div>
      }
      </div>
    
    
    </div>
  );
}



 

  

  

export default MedicalHistory;

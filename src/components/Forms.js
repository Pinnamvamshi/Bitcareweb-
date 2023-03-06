import {useRef, useState} from 'react';
import './App.css';
import FormInput from './FormInput';

const Forms = () => {
    const [values, setValues] = useState({
        username:"",
        email:"",
        birthday:"",
        fullname: "",
        password:"",
      });
    
      const inputs = [
        {
          id:1,
          name: "username",
          type:"text",
          placeholder: "Username",
          errorMessage:"Username should be 3-16 characters and shouldn't include any special charater!!",
          label: "Username",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id:2,
          name: "email",
          type:"email",
          placeholder: "email",
          errorMessage:"It should be a valid email address",
          label: "Email",
          required: true,
        },
        {
          id:3,
          name: "fullname",
          type:"text",
          placeholder: "fullname",
          label: "Full Name"
        },
        {
          id:4,
          name: "birthday",
          type:"date",
          placeholder: "birthday",
          label: "DOB"
        },
        {
          id:5,
          name: "Password",
          type:"password",
          placeholder: "password",
          errorMessage:"Password should be 8-20 characters",
          label: "Password",
          required: true,
        }
      ]
      
    
      //const usernameRef = useRef();
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
      }
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});
      }
    
      console.log(values);
      return (
        <div className="app">
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            {(inputs.map((input) => 
              <FormInput 
                key={input.id} 
                {...input} 
                value={values[input.name]} 
                onChange={onChange}/>
            ))}
            <button>Submit</button>
          </form>
        </div>
    )
}

export default Forms;
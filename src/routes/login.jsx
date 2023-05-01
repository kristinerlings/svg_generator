import React from 'react'
//create error messages
//check if submission has been sucessfully submitted or not 

//https://contactmentor.com/login-form-react-js-code/
const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);


export default function Login() {
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  //handle login functionality
  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
  };
  

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label htmlFor="username">Username</label>
      </div>

    </div>
  )
}



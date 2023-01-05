// import React from 'react'
// import { useState} from 'react';
// import axios from 'axios';
// import '../App.css'



// function Signup() {

  // States for registration
  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  // const [dateOfBirth, setDateOfBirth] = useState('');
  // const [gender, setGender] = useState('');
  // const [location, setLocation] = useState('');
  // const [email, setEmail] = useState('');
  // const [idtype, setIdtype] = useState('');
  // const [idnumber, setIdnumber] = useState('');
  // const [address, setAddress] = useState('');
  // const [phonenumber, setPhonenumber] = useState('');
  
  
  // States for checking the errors
  // const [submitted, setSubmitted] = useState('');
  // const [error, setError] = useState(false);

  // Handling the title change
  // const handleFirstname = (e) => {
  //   setFirstname(e.target.value);
  //   setSubmitted(false);
  // }
  // Handling the name change
  // const handleLastname = (e) => {
  //   setLastname(e.target.value);
  //   setSubmitted(false);
  // }
     // Handling DateofBith change
  // const handleDateOfBirth = (e) => {
  //   setDateOfBirth(e.target.value);
  //   setSubmitted(false);
    
  // };

   // Handling DateofBith change
  //  const handleGender = (e) => {
  //   setGender(e.target.value);
  //   setSubmitted(false);
    
  // };

   // Handling DateofBith change
  //  const handleLocation = (e) => {
  //   setLocation(e.target.value);
  //   setSubmitted(false);
    
  // };

  
  // Handling the email change
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  //   setSubmitted(false);
  // };

   // Handling DateofBith change
  //  const handleIdtype = (e) => {
  //   setIdtype(e.target.value);
  //   setSubmitted(false);
    
  // };
   // Handling DateofBith change
  //  const handleIdnumber = (e) => {
  //   setIdnumber(e.target.value);
  //   setSubmitted(false);
    
  // };

   // Handling DateofBith change
  //  const handleAddress = (e) => {
  //   setAddress(e.target.value);
  //   setSubmitted(false);
    
  // };

   // Handling DateofBith change
  //  const handlePhonenumber = (e) => {
  //   setPhonenumber(e.target.value);
  //   setSubmitted(false);
    
  // };
 
  // Handling the password change
  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  //   setSubmitted(false);
  // };
   
  
 
  // Prevent the page from refreshing when button is clicked
  // const handleSubmit = async(e) => {
  //   e.preventDefault();

  //   const data={
  //     headers:{
  //       'Content-Type':'application/json'
  //     }
  //   }
    
    //Request body
    // const body= JSON.stringify({ firstname, lastname, dateOfBirth, gender, location, email, idtype, idnumber, address, phonenumber})
    // try{
      
    //    await axios.post("/api/users", body, JSON.stringify(data))  
    //   localStorage.setItem("token")
    //    window.location.reload();
      // console.log(respon.message);
      // }catch (error){
      // console.log(error);
    //  if(error.response && 
    //     error.response.status >=400 &&
    //     error.response.status <= 500
    //     ){
    //         // setError(message)
    //     }
    // }

  //   if (
      
  //     firstname === ''||lastname === ''||dateOfBirth === ''||gender === ''
  //     ||location === ''|| email === ''||idtype === ''
  //     ||idnumber === ''||address === ''||phonenumber === '') {
  //     setError(true);
  //   } else {
  //     setSubmitted(true);
  //     setError(false);
  //   }
  // };
 
  // Showing success message
  // const successMessage = () => {
  //   return (
  //     <div
  //       className="success"
  //       style={{
  //         display: submitted ? '' : 'none',
  //       }}>
  //       <h1 >Registration successful </h1>
  //     </div>
  //   );
  // };
 
  // Showing error message if error is true
  // const errorMessage = () => {
  //   return (
  //     <div
  //       className="error"
  //       style={{
  //         display: error ? '' : 'none',
  //       }}>
  //       <h1>All fields required</h1>
  //     </div>
  //   );
  // };
 
//   return (
    
    // <div className="heads">
    // <div className='account'>Local Form</div> 
    //    {/* Calling to the methods */}
    //    <div className="messages">
    //      {errorMessage()}
    //      {successMessage()}
    //    </div>
    //    <form onSubmit={handleSubmit} className='Main'>
    //      {/* Labels and inputs for form data */}

    //      <input  placeholder='First name' onChange={handleFirstname} className="inputs"
    //        value={firstname} type="text" />

    //      {/* <label className="label">Name</label> */}
    //      <input  placeholder='Last name' onChange={handleLastname} className="inputs"
    //        value={lastname} type="text" />

    //       <input  placeholder='Date of Birth' onChange={handleDateOfBirth} className="inputs"
    //        value={dateOfBirth} type="text" />

    //        <input  placeholder='Gender' onChange={handleGender} className="inputs"
    //        value={gender} type="text" />

    //       <input  placeholder='Location' onChange={handleLocation} className="inputs"
    //        value={location} type="text" />
           
    //      {/* <label className="label">Email</label> */}
    //      <input placeholder='Enter your email' onChange={handleEmail} className="inputs"
    //        value={email} type="email" />
            
   
    //      {/* <label className="label">Password</label> */}
    //      <input placeholder='ID Type' onChange={handleIdtype} className="inputs"
    //        value={idtype} type="text" />

    //       <input  placeholder='ID Number' onChange={handleIdnumber} className="inputs"
    //        value={idnumber} type="text" />

    //       <input  placeholder='Address' onChange={handleAddress} className="inputs"
    //        value={address} type="text" />

    //        <input  placeholder='Phone number' onChange={handlePhonenumber} className="inputs"
    //        value={phonenumber} type="text" />
           
           
    //      <button type="submit" onClick={handleSubmit} className="bttn">
    //        Sign Up
    //      </button>
    //      <span>International Form <a href='/login'>Click here</a></span>
    //    </form>
    //  </div>

//   )
// }

// export default Signup;

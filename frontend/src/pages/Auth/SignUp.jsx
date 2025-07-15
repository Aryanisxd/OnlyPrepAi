import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input.jsx';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector.jsx';
import { validateEmail } from '../../utils/helper.js';

const SignUp = ({setCurrentPage}) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  //Handle signup form submit
  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if(!fullname){
      setError("Please enter full name.");
      return;
    }

    if(!validateEmail(email)){
      setError("Please enter a valide email.");
      return;
    }

    if(!password){
      setError("Please enter the password.");
      return;
    }

    setError("");

    //SignUp API call
    try{
    }catch(err){
      if(err.resposne && err.response.data.message){
        setError(err.response.data.message);
      }else{
        setError("Something went wrong, try again!");
      }
    }
  }
  return<div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
    <h3 className='text-lg font-semibold text-black'>Create an Account</h3>
    <p className='text-xs text-slate-700 mt-[5px] mb-6'>
      Join us today by entering your details below.
    </p>

    <form onSubmit={handleSignUp}>

      <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}/>
      
      <div className='grid grid-cols-1 md:grid-cols-1 gap-2'>
        <Input
          value={fullName}
          onChange={({target}) => setFullName(target.value)}
          label="Full name"
          placeholder="your name"
          type="text"
        />

        <Input
          value={email}
          onChange={({target}) => setEmail(target.value)}
          label="Email Address"
          placeholder="hello@example.com"
          type="text"
        />

        <Input
          value={password}
          onChange={({target}) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 characters"
          type="password"
        />
      </div>

      {error && <p className='text-red-500 text-xs pb-2.5 '>{error}</p>}

      <button type="submit" className='btn-primary'>
        SIGNUP
      </button>

      <p className='text-[13px] text-slate-800 mt-3'>
        Already have an account?{" "}

        <button
          className='font-medium text-primary underline cursor-pointer'
          onClick={()=>{
            setCurrentPage("login");
          }}
        >
          Login
        </button>
      </p>
    </form>
  </div>
}

export default SignUp
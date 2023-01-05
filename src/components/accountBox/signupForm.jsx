import { useFormik } from "formik";
import React, { useContext, useState} from "react";
import axios from 'axios';
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  FormSuccess,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import * as yup from "yup";

//checking for strong password
const PASSWORD_REGEX = /(?=.*[!#$%&?^*@~() "])(?=.{8,})/;
//Validation
const validationSchema = yup.object({
fullName: yup.string().min(3, "Please enter your real name").required("Full name is required"),
email: yup.string().email("Please enter a valid email").required(),
password: yup.string().matches(PASSWORD_REGEX, "Please enter a strong password").required(),
confirmPassword: yup.string().required("Please confirm password").when("password",{
 is: val => (val && val.length > 0 ? true : false), 
 then: yup.string().oneOf([yup.ref("password")], "Password does not match").required()
}),

});

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  //Success message
  const [success, setSuccess] = useState(null);
  const [error, setError]= useState(null);
//const for onsubmit
const onSubmit = async (values) => {
 const { confirmPassword, ...data } =values;

 const onSubmit = (values) =>{
  alert(JSON.stringify(values));
 }

 const response = await axios
 .post("http://localhost:5000/api/users".data)
 .catch((err) => {
  if(err && err.response)
  setError(err.response.data.message);
  setSuccess(null);
 });
 if(response && response.data){
  setError(null);
  setSuccess(response.data.message);
  //To reset form after signup
formik.resetForm();

 }


};
//Validation start from here
const formik = useFormik({
  initialValues: { 
   fullName: "", 
   email: "", 
   password: "", 
   confirmPassword: ""
  }, 
validateOnBlur: true,
onSubmit,
validationSchema: validationSchema,
});
console.log("error: ",formik.errors);

  return (
    <BoxContainer>
      {!error && <FormSuccess>{success ? success : ""}</FormSuccess>}
      {!success && <formError>{error ? error :""}</formError>}
      <FormContainer onSubmit={formik.handleSubmit}>
        <FieldContainer>
        <Input name ="fullName"
         placeholder="Full Name" 
        value={formik.values.fullName} 
        onChange={formik.handleChange}
        onBlur = {formik.handleBlur}
         />
         <FieldError>{formik.touched.fullName && formik.errors.fullName ? formik.errors.fullName : ""}</FieldError>
         </FieldContainer>

         <FieldContainer>
        <Input name ="email"  
        placeholder="Email" 
        value={formik.values.email} 
        onChange={formik.handleChange}
        onBlur = {formik.handleBlur} 
        />
        <FieldError>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</FieldError>
        </FieldContainer>
         
        
        <FieldContainer>
        <Input
         name ="password" type="password" 
         placeholder="Password"
        value={formik.values.password} 
        onChange={formik.handleChange} 
        onBlur = {formik.handleBlur}
        />
        <FieldError>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</FieldError>
        </FieldContainer>
         
        
        <FieldContainer>
        <Input
        name ="confirmPassword" type="password" 
        placeholder="Confirm Password" 
        value={formik.values.confirmPassword} 
        onChange={formik.handleChange} 
        onBlur = {formik.handleBlur}
        />
        <FieldError>{formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ""}</FieldError>
        
        </FieldContainer>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" >Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?{""}
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import * as yup from "yup";
import axios from "axios";

const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required()
});

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [error, setError] = useState(null);

  //Setting API for web token and the rest
  const onSubmit = async (values) =>{
    setError(null);
   const response = await axios.post("http:localhost:5000/api/users", values).catch((err) => {
    if(err && err.response)
      setError(err.response.data.message);
  });
   if(response){
    alert("Welcome back in, Authenticating....");
   }
  };

 
  const formik = useFormik({ 
    initialValues: { email: "", password: ""}, 
    validateOnBlur: true, 
    onSubmit,
     validationSchema: validationSchema,
    });

  return (
    <BoxContainer>
      <formError>{error ? error : ""}</formError>
      <FormContainer onSubmit={formik.handleSubmit}>
        <FieldContainer>
        <Input 
        name="email" 
        placeholder="Email" 
        value={formik.values.email} 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {<FieldError>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</FieldError>}
        </FieldContainer>

        <FormContainer>
        <Input  
        name="password" type="password" 
        placeholder="Password" 
        value={formik.values.password} 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {<FieldError>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</FieldError>}
        </FormContainer>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" disabled={!formik.isValid}>Login</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      
      
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

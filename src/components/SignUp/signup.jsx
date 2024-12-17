import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  FormDiv,
  FormH1,
  FormLabel,
  FormInput,
  TextWrapper,
  Text,
} from "./SignUpElements";

const SignUp = () => {
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    occupation: "",
    age: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    occupation: Yup.string().required("Occupation is required"),
    age: Yup.number().required("Age is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://vitality.us-east-1.elasticbeanstalk.com/api/patient/signup",
        values
      );
      alert("Sigup successful!", response.data);
      setSubmitting(false);
      navigate("/signin"); // Redirect to the dashboard page
    } catch (error) {
      alert("Signup failed:", error);
      setSubmitting(false);
    }
  };

  return (
    <>
      <Container>
        <Icon to="/">vitality hub</Icon>
        <FormWrap>
          <FormContent
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <FormDiv>
              <FormH1>Sign up for an account</FormH1>
            
                
                  <FormLabel htmlFor="firstName" required>
                    FirstName
                  </FormLabel>
                  <FormInput type="text" id="firstName" name="firstName" />
                
                
                  <FormLabel htmlFor="lastName" required>
                    LastName
                  </FormLabel>
                  <FormInput type="text" id="lastName" name="lastName" />
                
                
                  <FormLabel htmlFor="occupation" required>
                    occupation
                  </FormLabel>
                  <FormInput type="text" id="occupation" name="occupation" />
                
                
                  <FormLabel htmlFor="age" required>
                    age
                  </FormLabel>
                  <FormInput type="number" id="age" name="age" />
                
                
                  <FormLabel htmlFor="for" required>
                    Email
                  </FormLabel>
                  <FormInput type="email" id="email" name="email" />
                
                
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <FormInput type="password" id="password" name="password" />
                
              <button className="formButton" type="submit">
                Continue
              </button>
              <TextWrapper>
                <Text to="/forgotpassword">Forgot password</Text>
                <Text to="/signin">Sign In</Text>
              </TextWrapper>
            </FormDiv>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;

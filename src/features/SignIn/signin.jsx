import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

import {
  Container,
  FormContent,
  FormDiv,
  FormH1,
  FormWrap,
  FormLabel,
  Icon,
  FormInput,
  TextWrapper,
  Text,
} from "./SigninElements";

const SignIn = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://vitality.us-east-1.elasticbeanstalk.com/api/patient/signin",
        values
      );
      alert("Sigin successful!", response.data);
      setSubmitting(false);
      navigate("/dashboard"); // Redirect to the dashboard page
    } catch (error) {
      alert("Signin failed:", error);
      setSubmitting(false);
    }
  };

  return (
    <>
      <Container>
        <Icon to="/"> The Body Refinery Gym</Icon>
        <FormWrap>
          <FormContent
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <FormDiv>
              <FormH1>Sign in to your account</FormH1>

              <FormLabel htmlFor="email">Email:</FormLabel>
              <FormInput type="email" id="email" name="email" />
              <FormLabel htmlFor="password">Password:</FormLabel>
              <FormInput type="password" id="password" name="password" />
              <button className="formButton" type="submit">
                Sign In
              </button>
              <TextWrapper>
                <Text to="/forgotpassword">Forgot password</Text>
                <Text to="/signup">Sign Up</Text>
              </TextWrapper>
            </FormDiv>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;

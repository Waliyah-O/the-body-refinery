import styled from "styled-components";
import { Link } from "react-router-dom";

// import {
//   FilteredPropsFormContent,
//   FilteredPropsForm,
//   FilteredPropsInputField,
// } from "../SignIn/FilteredProps";

export const Container = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  margin-top: 2em;
  background: #e0ecde;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #04100fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// export const FormContent = styled(FilteredPropsFormContent)`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

export const FormDiv = styled.form`
  background: #2c6975;
  max-width:400px;
  /* height: auto; */
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  margin-top: 3em;
  margin-bottom: 3em;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 600px) {
    padding: 32px 32px;
    max-width: 300px;
  }
  @media screen and (max-width: 400px) {
    max-width: 260px;
  }
  @media screen and (max-width: 350px) {
    max-width: 220px;
  }
`;
// export const FormDiv = styled(FilteredPropsForm)`
//   background: #2c6975;
//   max-width:400px;
//   /* height: auto; */
//   width: 100%;
//   z-index: 1;
//   display: grid;
//   margin: 0 auto;
//   padding: 80px 32px;
//   margin-top: 3em;
//   margin-bottom: 3em;
//   border-radius: 4px;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

//   @media screen and (max-width: 600px) {
//     padding: 32px 32px;
//     max-width: 300px;
//   }
//   @media screen and (max-width: 400px) {
//     max-width: 260px;
//   }
//   @media screen and (max-width: 350px) {
//     max-width: 220px;
//   }
// `;

export const FormGroups = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const FormGroup = styled.div`
  padding: 0;
  margin: 0;
`;

export const FormH1 = styled.h1`
  margin-bottom: 30px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 18px;
  font-size: 14px;
  color: #fff;
  
  @media screen and (max-width: 350px){
    margin-bottom: 16px;
  }
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;

  @media screen and (max-width: 350px){
    padding: 10px;
    margin-bottom: 20px;
  }
`;
// export const FormInput = styled(FilteredPropsInputField)`
//   padding: 16px 16px;
//   margin-bottom: 32px;
//   border: none;
//   border-radius: 4px;

//   @media screen and (max-width: 350px){
//     padding: 10px;
//     margin-bottom: 20px;
//   }
// `;

// export const FormButtonWrap = styled(Link)`

// `
export const FormButton = styled(Link)`
  background: #04100fff;
  width: 100%;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: #01bf71;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled(Link)`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #01bf71;
  }
`;

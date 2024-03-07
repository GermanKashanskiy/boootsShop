import React from "react";
import './style/register.css';
import '../../styles/style.css';
import RegStepper from "./shared/reg-stepper/RegStepper";
import { Container } from "@mui/material";

const Register = () => {
  return (
    <>
      <Container>
        <RegStepper />
      </Container>
    </>
  );
}

export default Register;
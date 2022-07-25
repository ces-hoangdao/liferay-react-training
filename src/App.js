import "./App.css";
import { Container } from "@mui/material";
import FormWrapper from "./components/Forms/FormWrapper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useSelector } from "react-redux";

const steps = [
  "Owner Information",
  "Beneficiary Information",
  "Confirm Contract",
];
function App() {
  const step = useSelector((state) => state.form.step);
  return (
    <Container>
      <Stepper activeStep={step - 1} alternativeLabel className="Stepper">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <FormWrapper />
    </Container>
  );
}

export default App;

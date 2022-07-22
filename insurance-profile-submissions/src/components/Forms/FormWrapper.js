import "./Form.css";
import Owner from "./Owner";
import Beneficiary from "./Beneficiary";
import Contact from "./Contact";
import SuccessPage from "./SuccessPage";
import { useSelector } from "react-redux";

import {
  STEP_ONE,
  STEP_TWO,
  STEP_THREE,
  STEP_FOUR,
} from "../../constants/StepConstants";

const FormWrapper = () => {
  const step = useSelector((state) => state.form.step);
  switch (step) {
    case STEP_ONE:
      return <Owner />;
    case STEP_TWO:
      return <Beneficiary />;
    case STEP_THREE:
      return <Contact />;
    case STEP_FOUR:
      return <SuccessPage />;
    default:
      return;
  }
};

export default FormWrapper;

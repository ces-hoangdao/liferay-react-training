import Beneficiary from "../components/Forms/Beneficiary"
import Owner from "../components/Forms/Owner"
import Contact from "../components/Forms/Contact"

const RELATIONSHIP_OPTION = [
  { value: "spouse", label: "Spouse" },
  { value: "children", label: "Children" },
  { value: "relatives", label: "Relatives" },
]

const STEPS = [
  { title: "Owner Information", formComponent: <Owner /> },
  { title: "Beneficiary Information", formComponent: <Beneficiary /> },
  { title: "Confirm Contract", formComponent: <Contact /> },
]

export { STEPS, RELATIONSHIP_OPTION }

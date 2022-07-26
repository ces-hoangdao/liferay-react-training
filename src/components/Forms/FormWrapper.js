import "./FormWrapper.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Step, Alert, Stepper, StepLabel } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useForm, FormProvider } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { ownerSchema, beneficiarySchema } from "../../helper/schema"
import { formActions } from "../../redux/formSlice"
import { STEPS } from "../../constants/formConstants"
import FormButtonGroup from "../FormButtonGroup"
import submitInsuranceProfile from "../../services/liferayApi"
import { APP_PATHS } from "../../constants/routeConstants"

function FormWrapper() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const step = useSelector((state) => state.form.step)
  const schema = step === 0 ? ownerSchema : beneficiarySchema
  const methods = useForm({ resolver: yupResolver(schema), mode: "all" })
  const data = useSelector((state) => state.form.data)
  const [error, setError] = useState()
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setError("")
    }, [5000])
    return () => clearTimeout(timeoutId)
  }, [error])

  const onSubmit = async () => {
    if (step === STEPS.length - 1) {
      try {
        await submitInsuranceProfile(data)
        navigate(APP_PATHS.success)
      } catch (err) {
        setError(err.message)
      }
    } else {
      dispatch(formActions.goNext())
    }
  }

  return (
    <FormProvider {...methods}>
      <form className="form" onSubmit={methods.handleSubmit(onSubmit)}>
        <Stepper activeStep={step} alternativeLabel>
          {STEPS.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label.title}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className="form-content">
          {error && <Alert severity="error">Submit Failed</Alert>}
          {STEPS[step].formComponent}
        </div>
        <div className="form-footer">
          <FormButtonGroup />
        </div>
      </form>
    </FormProvider>
  )
}

export default FormWrapper

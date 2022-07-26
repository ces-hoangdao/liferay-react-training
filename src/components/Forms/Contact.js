import { useForm, Controller } from "react-hook-form"
import { Checkbox } from "@mui/material"

function Contact() {
  const { register, control } = useForm({
    criteriaMode: "all",
    mode: "onChange",
  })

  return (
    <div className="contract">
      <div className="detail-contract">
        <p>Please see the detailed contract</p>
        <a href="https://www.chubb.com/content/dam/chubb-sites/chubb-com/personal/future-asset-management-universal-life/documents/pdf/easset_upload_file46289_1304437_e.pdf">
          here
        </a>
      </div>
      <div className="checkbox-area">
        <p>After read the contract, please check the box below to confirm that</p>
        <div className="checkbox">
          <Controller
            name="acceptTerms"
            control={control}
            render={({ field }) => (
              <Checkbox
                {...field}
                id="agree"
                required
                name="agree"
                {...register("acceptTerms", {
                  required: "Accept Terms & condition is required",
                })}
              />
            )}
          />
          <div>I agree to submit my information to the Insurance Company</div>
        </div>
      </div>
    </div>
  )
}

export default Contact

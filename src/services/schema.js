import yup from "./yupGlobal";
export const ownerSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .onlyLetter("First name must be only letters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .onlyLetter("Last name must be only letters"),
  birthday: yup
    .date()
    .max(new Date(), "Birthday must be less than current date"),
  IDcard: yup
    .string()
    .required("ID card is required")
    .onlyNumber("ID card must be only numbers")
    .min(10, "ID card must be 10 numbers")
    .max(10, "ID card must be 10 numbers"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .onlyNumber("Phone number must be only numbers")
    .min(10, "Phone number must be 10 numbers")
    .max(10, "Phone number must be 10 numbers"),
  monthlySaving: yup
    .string()
    .required("Monthly savings is required")
    .onlyNumber("Monthly savings must be only numbers")
    .min(6, "Monthly savings must be at least 100000 VND"),
  
});
export const beneficiarySchema = yup.object().shape({

  beneficiaryFirstName: yup
    .string()
    .required("First name is required")
    .onlyLetter("First name must be only letters"),
  beneficiaryLastName: yup
    .string()
    .required("Last name is required")
    .onlyLetter("Last name must be only letters"),
  beneficiaryBirthday: yup
    .date()
    .max(new Date(), "Birthday must be less than current date"),
  beneficiaryIDcard: yup
    .string()
    .required("ID card is required")
    .onlyNumber("ID card must be only numbers")
    .min(10, "ID card must be 10 numbers")
    .max(10, "ID card must be 10 numbers"),
  beneficiaryPhoneNumber: yup
    .string()
    .required("Phone number is required")
    .onlyNumber("Phone number must be only numbers")
    .min(10, "Phone number must be 10 numbers")
    .max(10, "Phone number must be 10 numbers"),
})

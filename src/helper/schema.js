import yup from "./yupGlobal"
import MESSAGE_CONSTANTS from "../constants/messageConstants"

export const ownerSchema = yup.object().shape({
  firstName: yup
    .string()
    .required(MESSAGE_CONSTANTS.REQUIRED)
    .onlyLetter(MESSAGE_CONSTANTS.ONLY_LETTER),
  lastName: yup
    .string()
    .required(MESSAGE_CONSTANTS.REQUIRED)
    .onlyLetter(MESSAGE_CONSTANTS.ONLY_LETTER),
  birthday: yup.date().max(new Date(), MESSAGE_CONSTANTS.CURRENT_DATE),
  iDcard: yup
    .string()
    .required(MESSAGE_CONSTANTS.REQUIRED)
    .onlyNumber(MESSAGE_CONSTANTS.ONLY_NUMBER)
    .min(10, MESSAGE_CONSTANTS.REQUIRED_LENGTH)
    .max(10, MESSAGE_CONSTANTS.REQUIRED_LENGTH),
  phoneNumber: yup
    .string()
    .required(MESSAGE_CONSTANTS.REQUIRED)
    .onlyNumber(MESSAGE_CONSTANTS.ONLY_NUMBER)
    .min(10, MESSAGE_CONSTANTS.REQUIRED_LENGTH)
    .max(10, MESSAGE_CONSTANTS.REQUIRED_LENGTH),
  monthlySaving: yup
    .string()
    .required(MESSAGE_CONSTANTS.REQUIRED)
    .onlyNumber(MESSAGE_CONSTANTS.ONLY_NUMBER)
    .min(6, MESSAGE_CONSTANTS.MIN_MONEY),
})
export const beneficiarySchema = yup.object().shape({
  beneficiaryFirstName: yup
    .string()
    .required(MESSAGE_CONSTANTS.REQUIRED)
    .onlyLetter(MESSAGE_CONSTANTS.ONLY_LETTER),
  beneficiaryLastName: yup
    .string()
    .required(MESSAGE_CONSTANTS.REQUIRED)
    .onlyLetter(MESSAGE_CONSTANTS.ONLY_LETTER),
  beneficiaryBirthday: yup.date().max(new Date(), MESSAGE_CONSTANTS.CURRENT_DATE),
  beneficiaryIDcard: yup
    .string()
    .required(MESSAGE_CONSTANTS.REQUIRED)
    .onlyNumber(MESSAGE_CONSTANTS.ONLY_NUMBER)
    .min(10, MESSAGE_CONSTANTS.REQUIRED_LENGTH)
    .max(10, MESSAGE_CONSTANTS.REQUIRED_LENGTH),
  beneficiaryPhoneNumber: yup
    .string()
    .required(MESSAGE_CONSTANTS.REQUIRED)
    .onlyNumber(MESSAGE_CONSTANTS.ONLY_NUMBER)
    .min(10, MESSAGE_CONSTANTS.REQUIRED_LENGTH)
    .max(10, MESSAGE_CONSTANTS.REQUIRED_LENGTH),
})

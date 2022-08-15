import yup from './yupGlobal'
import MESSAGE_CONSTANT from '../constants/messageConstant'

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email(MESSAGE_CONSTANT.INVALID_EMAIL)
    .required(MESSAGE_CONSTANT.REQUIRED),
  firstName: yup
    .string()
    .required(MESSAGE_CONSTANT.REQUIRED)
    .onlyLetter(MESSAGE_CONSTANT.ONLY_LETTER),
  lastName: yup
    .string()
    .required(MESSAGE_CONSTANT.REQUIRED)
    .onlyLetter(MESSAGE_CONSTANT.ONLY_LETTER),
  phoneNumber: yup
    .string()
    .required(MESSAGE_CONSTANT.REQUIRED)
    .onlyNumber(MESSAGE_CONSTANT.ONLY_NUMBER),
})

export default formSchema

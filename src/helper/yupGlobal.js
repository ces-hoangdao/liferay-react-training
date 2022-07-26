import * as yup from "yup"
import { REGEX_ONLY_NUMBER, REGEX_ONLY_LETTER } from "../constants/validateConstants"

yup.addMethod(yup.string, "onlyLetter", function (message) {
  return this.matches(REGEX_ONLY_LETTER, {
    message,
    excludeEmptyString: true,
  })
})
yup.addMethod(yup.string, "onlyNumber", function (message) {
  return this.matches(REGEX_ONLY_NUMBER, {
    message,
    excludeEmptyString: true,
  })
})

export default yup

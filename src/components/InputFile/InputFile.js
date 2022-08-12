import { FileUploader } from "react-drag-drop-files"
import Papa from "papaparse"
import { useDispatch } from "react-redux"
import { FILE_TYPES } from "../../constants/constants"
import { dataActions } from "../../redux/dataSlice"
import { Container } from "./InputStyle"

function InputFile(handleError) {
  const dispatch = useDispatch()

  const handleChange = (fileUpload) => {
    Papa.parse(fileUpload, {
      complete: (results) => {
        dispatch(dataActions.setHeaders(results.data[0]))
        dispatch(dataActions.setData(results.data.slice(1, results.data.length - 1)))
      },
    })
  }

  return (
    <Container>
      <FileUploader
        label="Upload or drop file CSV right here"
        onTypeError={handleError}
        handleChange={handleChange}
        name="file"
        types={FILE_TYPES}
        classes="drop-zone"
      />
    </Container>
  )
}

export default InputFile

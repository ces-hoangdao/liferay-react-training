import { FileUploader } from "react-drag-drop-files"
import Papa from "papaparse"
import { useDispatch } from "react-redux"
import { FILE_TYPES } from "../../constants/constants"
import { dataActions } from "../../redux/dataSlice"

function InputFile(handleError) {
  const dispatch = useDispatch()

  const handleChange = (fileUpload) => {
    Papa.parse(fileUpload, {
      complete: (results) => {
        dispatch(dataActions.setHeaders(results.data[0]))
        dispatch(dataActions.setData(results.data.slice(1, 6)))
      },
    })
  }

  return (
    <div className="input-file">
      <FileUploader
        label="Upload or drop file CSV right here"
        onTypeError={handleError}
        handleChange={handleChange}
        name="file"
        types={FILE_TYPES}
        classes="drop-zone"
      />
    </div>
  )
}

export default InputFile

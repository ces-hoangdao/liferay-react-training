import { useState, useEffect } from "react"
import InputFile from "../InputFile"
import { ERROR_DURATION } from "../../constants/constants"

function DragDropBox() {
  const [error, setError] = useState()
  const handleError = (err) => {
    setError(err)
  }
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setError("")
    }, [ERROR_DURATION])
    return () => clearTimeout(timeoutId)
  }, [error])

  return <InputFile handleError={handleError} />
}

export default DragDropBox

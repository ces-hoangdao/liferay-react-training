import { useState, useEffect } from "react"
import "./DragDropBox.css"
import InputFile from "../InputFile"

function DragDropBox() {
  const [error, setError] = useState()
  const handleError = (err) => {
    setError(err)
  }
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setError("")
    }, [5000])
    return () => clearTimeout(timeoutId)
  }, [error])

  return <InputFile handleError={handleError} />
}

export default DragDropBox

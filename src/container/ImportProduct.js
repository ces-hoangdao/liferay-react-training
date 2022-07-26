import { useSelector } from "react-redux"
import { Alert, Button, styled } from "@mui/material"
import { useState, useEffect } from "react"
import DragDropBox from "../components/DragDropBox"
import TableMapping from "../components/TableMapping"
import UploadProduct from "../services/liferayApi"
import mappingData from "../helper/utils"

const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.button.light,
  "&:hover": {
    backgroundColor: theme.palette.button.dark,
  },
}))

function ImportProduct() {
  const data = useSelector((state) => state.data.data)
  const mapping = useSelector((state) => state.data.mapping)
  const hasData = data.length > 0

  const [error, setError] = useState()
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setError("")
    }, [5000])
    return () => clearTimeout(timeoutId)
  }, [error])

  const importData = async () => {
    const body = mappingData(data, mapping)
    try {
      await UploadProduct(body)
    } catch (err) {
      setError(err.message)
    }
  }
  return (
    <div>
      <DragDropBox />
      {error && <Alert severity="error">Submit Failed</Alert>}
      <TableMapping />
      <CustomButton onClick={importData} variant="contained" disabled={!hasData}>
        Import Data
      </CustomButton>
    </div>
  )
}

export default ImportProduct

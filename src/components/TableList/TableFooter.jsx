import { TablePagination, Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { tableActions } from '../../redux/tableSlice'
import Form from '../Form'
import { DEFAULT_PAGESIZE, OPTIONS_ROWPERPAGE } from '../../constants/tableConstants'

const Pagination = () => {
  const pageSize = useSelector((state) => state.table.pageSize)
  const page = useSelector((state) => state.table.page)
  const totalCount = useSelector((state) => state.table.totalCount)
  const dispatch = useDispatch()

  const handleChangePage = (e, newPage) => {
    dispatch(tableActions.setPage(newPage))
  }

  const handleChangeRowsPerPage = (event) => {
    dispatch(tableActions.changeRowPerPage(event.target.value, DEFAULT_PAGESIZE))
  }
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 2,
      }}
    >
      <TablePagination
        rowsPerPageOptions={OPTIONS_ROWPERPAGE}
        component="div"
        count={totalCount}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={pageSize}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Form />
    </Box>
  )
}

export default Pagination

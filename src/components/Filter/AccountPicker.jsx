import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'
import { getAccounts } from '../../services/accountServices'
import AutocompleteCustom from './AutocompleteCustom'

function AccountPicker({ setSelected }) {
  const [accounts, setAccounts] = useState([])
  useEffect(() => {
    getAccounts().then((res) => {
      const tmpOj = []
      res.data.items.map((item) => {
        const tmp = { Account: item.name, Id: item.id }
        tmpOj.push(tmp)
        return tmpOj
      })
      setAccounts(tmpOj)
    })
  }, [])
  const onChange = (e, values) => {
    setSelected(values)
  }

  return (
    <AutocompleteCustom
      multiple
      id="tags-standard"
      options={accounts}
      onChange={onChange}
      getOptionLabel={(option) => option.Account}
      noOptionsText="No Account match"
      style={{ width: '100%' }}
      renderInput={(params) => (
        <TextField {...params} label="Account" variant="outlined" />
      )}
    />
  )
}

export default AccountPicker

AccountPicker.propTypes = {
  setSelected: PropTypes.func.isRequired,
}

import { Autocomplete, autocompleteClasses, styled } from '@mui/material'

const AutocompleteCustom = styled(Autocomplete)(() => ({
  [`&.${autocompleteClasses.root}`]: {
    margin: '0',
  },
}))

export default AutocompleteCustom

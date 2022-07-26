const mappingData = (data, mapping) => {
  const response = data.map((row) => {
    return row.reduce((object, current, index) => {
      const { fieldMapping } = mapping[index]
      return { ...object, [fieldMapping]: current }
    }, {})
  })
  return response
}

export default mappingData

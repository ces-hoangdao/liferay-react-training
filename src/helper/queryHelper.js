const accountQuery = (selected) => {
  const stringTmp = '(accountId/any(x:'
  let query = ''
  selected.forEach((account, index) => {
    if (index === 0) {
      query = `${stringTmp}(x+eq+${account.Id})`
    } else {
      query = `${query}+or+(x+eq+${account.Id})`
    }
  })
  query += `))`

  return query
}

const DateRangeQuery = ({ startDate, endDate }) => {
  const DateQuery = `(createDate+ge+${startDate.toISOString()})+and+(createDate+le+${endDate.toISOString()})`
  return DateQuery
}

const convertQuery = ({ selected, startDate, endDate }) => {
  let query = ''
  if (endDate === null) {
    const accountFilter = accountQuery(selected)
    query = accountFilter
  }
  if (selected.length === 0) {
    const dateFilter = DateRangeQuery({ startDate, endDate })
    query = dateFilter
  }
  if (selected.length !== 0 && endDate !== null) {
    const accountFilter = accountQuery(selected)
    const dateFilter = DateRangeQuery({ startDate, endDate })
    query = `${accountFilter}+and+${dateFilter}`
  }
  return query
}

export { convertQuery }

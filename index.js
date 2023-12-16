var addDays = require('date-fns/addDays')
function getDateAfterAdding(days) {
  var result = addDays(new Date(22, 7, 2020), days)
  return `${result.getDate()}-${result.getMonth()}-${result.getFullYear()}`
}
console.log(getDateAfterAdding(6))
module.exports = getDateAfterAdding

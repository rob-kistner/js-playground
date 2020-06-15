const { DateTime } = require('luxon')

let dt;

// current time, 24-hr format
// dt = DateTime.local().toLocaleString(DateTime.TIME_24_SIMPLE)
// console.log(dt)

// current time, 12-hr format
// dt = DateTime.local().toLocaleString(DateTime.TIME_SIMPLE)
// console.log(dt)


dt = DateTime.local()

// current hour
// console.log(dt.get('hour'))

// current minutes
// console.log(dt.get('minute'))

// taken from string
// const dateString = '2019-05-17 12:18:00'
// const dateFormat = 'yyyy-MM-dd H:m:s' 
// const timeString = '12:18:00'
// const timeFormat = 'H:m:s' 
// console.log(DateTime.fromFormat(timeString, timeFormat))

// returns object of date
// let today = dt.toObject({hour: '2-digit', minute: '2-digit'})
// console.log(today)

// ----------------------------------------
// Assemble a string to be made into a DateTime object…
// ----------------------------------------

  // today on front of string,
  // example: this would be the current date of a time entry,
  // set when the component is initialized
let prefix = dt.toFormat('yyyy-MM-dd') + ' '
  // time in friendly format
  // this might be gathered from input values
let suffixTime = '9:15 PM'
  // assemble into a string, specifying the format
  // and assign as a DateTime object to startTime variable
let startTime = DateTime.fromFormat(prefix + suffixTime, 'yyyy-MM-dd h:mm a')
  // output the DateTime object
console.log(startTime)


// let fmt = { hour: '2-digit', minute: '2-digit', hour12: true }
// console.log(dt.toLocaleString(fmt))
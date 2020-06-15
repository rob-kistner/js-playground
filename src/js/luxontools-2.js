const { DateTime } = require('luxon')

// global capture today as DateTime
// this would be a default value passed in
let dt = DateTime.local()

// global constants
const MAX_HOURS = 23 // 11 pm
const MIN_HOURS = 0 // 12 am
const MAX_MINUTES = (23 * 60) + 45 // 11:45 pm
const MIN_MINUTES = 0 // 12 am
const DATE_FULL = 'yyyy-MM-dd h:mm a' // entire date format
const DATE_ONLY = 'yyyy-MM-dd' // just the date format
const TIME_FULL = 'h:mm a' // entire date format


/**
 * setDateTime
 * ----------------------------------------
 * Assemble a string to be made into a DateTime object…
 * 
 * Today on front of string, 
 * example: this would be the current date of a time entry, 
 * set when the component is initialized
 * 
 * @ param currentDateTime : DateTime object, defaults to global dt
 * @ param timeToAdd : Time string in format h:mm a
 * @ returns DateTime (object)
 */
const setDateTime = (current = dt, timeToUse) => {
  let prefix = current.toFormat(DATE_ONLY) + ' '
  return DateTime.fromFormat(prefix + timeToUse, DATE_FULL)
}

// add hours to DateTime obj
const addHours = (current = dt, hoursToAdd = 1) => {
  return current.plus({ hours: hoursToAdd })
}

// subtract hours from DateTime obj
const minusHours = (current = dt, hoursToAdd = 1) => {
  return current.plus({ hours: hoursToAdd })
}

// add minutes to DateTime obj
const addMinutes = (current = dt, minutesToAdd = 15) => {
  if ((getTotalMinutes(current) + minutesToAdd) > MAX_MINUTES) {
    return current
  } else {
    return current.plus({ minutes: minutesToAdd })
  }
}

// subtract minutes from DateTime obj
const minusMinutes = (current = dt, minutesToSubtract = 15) => {
  if ((getTotalMinutes(current) - minutesToSubtract) < MIN_MINUTES) {
    return current
  } else {
    return current.minus({ minutes: minutesToSubtract })
  }
}

// return total minutes of DateTime obj
const getTotalMinutes = (current = dt) => {
  return (current.hour * 60) + current.minute
}

// swap AM & PM time,
// return DateTime obj
const switchMeridien = (current = dt) => {
  if ((current.hour + 12) > MAX_HOURS) {
    return current.minus({ hours: 12 })
  } else {
    return current.plus({ hours: 12 })
  }
}

// returns boolean
// if end time is later than start time
const isValidStartEndTime = (start, end) => {
  return end.diff(start, 'hours').toObject().hours >= 0;
}

// dt = setDateTime(dt, '10:15 am')
// console.log(switchMeridien())
// console.log(dt.toLocaleString(DateTime.TIME_SIMPLE))

// console.log(addMinutes())

console.log(isValidStartEndTime(
    DateTime.fromString('3:00 pm', TIME_FULL),
    DateTime.fromString('3:00 pm', TIME_FULL)
  )
)
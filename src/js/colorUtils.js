
/**
 * validate a number falling within color 0-255 range
 */
const isColorNum = num => (num >= 0 && num <= 255)

/**
 * convert regular number to rgb hex style 2-digit
 */
const numToHex = (color) => { 
  let hex = Number(color).toString(16)
  if (hex.length < 2)  hex = `0${hex}`
  return !isColorNum(color) ? false : hex
}

/**
 * convert 3 numbers to hex string,
 * includes the hash by default
 */
const rgbToHex = (r, g, b, incHash=true) => {   
  var red   = numToHex(r)
  var green = numToHex(g)
  var blue  = numToHex(b)
  // if (!isColorNum(red) || !isColorNum(green) || !isColorNum(blue))
  //   return false
  // else
    return (incHash ? '#' : '') + red + green + blue
}

/**
 * convert hex string into rgb array
 */
const hexToRGB = (hex, asString=false) => {
  hex = hex.replace('#','')
  red   = parseInt(hex.substring(0,2), 16)
  green = parseInt(hex.substring(2,4), 16)
  blue  = parseInt(hex.substring(4,6), 16)
  // if (!isColorNum(red) || !isColorNum(green) || !isColorNum(blue))
  //   return false
  // else
    return asString ? 
           `rgb(${red}, ${green}, ${blue})` : 
           [red, green, blue]
}

/**

  Converting a tint
  --------------------------------------------------------------
  #663399 is converted to the RGB equivalent of 102, 51, 153
  R: 102 + ((255 - 102) x .1) = 117.3, rounded to 117
  G: 51 + ((255 - 51) x .1) = 71.4, rounded to 71
  B: 153 + ((255 - 153) x .1) = 163.2, rounded to 163
  RGB 117, 71, 163 is converted to the hex equivalent of #7547a3

  Converting a shade
  --------------------------------------------------------------
  #663399 is converted to the RGB equivalent of 102, 51, 153
  R: 102 x .9 = 91.8, rounded to 92
  G: 51 x .9 = 45.9, rounded to 46
  B: 153 x .9 = 137.7, rounded to 138
  RGB 92, 46, 138 is converted to the hex equivalent of #5c2e8a

*/

const colorTintHex = (hexColor, tintAmt) => {
  let colorArr = hexToRGB(hexColor)
  const colorTintArr = colorArr.map(clr => parseInt((255 - clr) * tintAmt))
  return rgbToHex(...colorTintArr)
}

const colorShadeHex = (hexColor, shadeAmt) => {
  let colorArr = hexToRGB(hexColor)
  const colorShadeArr = colorArr.map(clr => parseInt(clr * shadeAmt))
  return rgbToHex(...colorShadeArr)
}

/**
 * returns an array of hex tints & shades 
 * of one hex color
 */
const makeTintsAndShades = (hex, ...args) => {
  
  let numTints, minTint, numShades, maxShade
  
  // excepts 2 args if tints & shades are equal values
  if (args.length === 2) {
    numTints  = args[0]
    minTint   = args[1]
    numShades = args[0]
    maxShade  = 1 - args[1]
  // excepts 4 args to define both tints & shades
  } else if (args.length === 4) {
    [numTints, minTint, numShades, maxShade] = args 
  // if no args passed, assuming we want a full spread 
  // of 10 shades & tints
  } else if (args.length === 0) {
    [numTints, minTint, numShades, maxShade] = [9, .1, 9, .9]
  } else {
    return false
  }
  
  // the return array
  const colorArr = []
  
  // calculate tint & shade step
  const tintStep = ((1 - minTint) / numTints).toFixed(2)
  const shadeStep = (maxShade / numShades).toFixed(2)

  let tint
  for (let t=numTints; t>0; t-=1) {
    tint = 1 - (tintStep * t).toFixed(2)
    colorArr.push(colorTintHex(hex, tint))
  }
  colorArr.push(hex)
  
  return colorArr
}

const arrToColorString = (arr) => {
  let ret = '\n'
  ret += '.myStyle {\n'
  arr.forEach(item => ret += `  color: ${item};\n`)
  ret += '}\n\n'
  return ret
}
/**
 * capitalizeWords
 * 
 *  @str string : the string to capitalize
 *  
 *  @returns string
 * 
 * Capitalize the first letter of each word 
 * in a phrase passed in (str)
 */
function capitalizeWords( str )
{
  str = str.split(" ");
  str = str.map(word => word[0].toUpperCase() + word.substr(1));
  return str.join(" ");
}

/**
 * debounce
 * 
 *  @func function : the function to delay
 *  @wait float : the delay time
 *  @immediate boolean : run the function immediately
 * 
 *  @returns void
 * 
 * Debounce has to be the exact call from 
 * the handler or it won't work, I think it
 * has to do with 'this' use in the script. 
 * 
 */
function debounce( func, wait, immediate )
{
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args)
      }
    }
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait || 200);
    if (callNow) { 
      func.apply(context, args);
    }
  }
}

/**
 * isEmailValid
 * 
 * @email string: email to validate
 * 
 * @returns boolean
 * 
 */
function isEmailValid( email )
{
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test( String(email).toLowerCase() );
}


/**
 * uuid
 * 
 * @seed string: the string template to convert
 *               into a unique uuid string
 * 
 * @returns string
 */
function uuid (seed)
{
  if(typeof seed == 'undefined')
    seed = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  let dt = new Date().getTime()
  let uuid = seed.replace(/[xy]/g, function(c) {
      let r = (dt + Math.random()*16)%16 | 0
      dt = Math.floor(dt/16)
      return (c=='x' ? r :(r&0x3|0x8)).toString(16)
  })
  return uuid
}
/* ----------------------------------------
  domTools.js

  A number of wrapper and shortcut functions
  meant to imitate features of jquery and 
  otherwise simplifying their vanilla js counterparts
  without the jquery overhead.
 ---------------------------------------- */

 // aliases
const doc = document,
      $   = document.querySelector.bind(document),
      $$  = document.querySelectorAll.bind(document),
      f = output => console.log(output)

/**
 * afterq
 * Insert an element after the caller
 *
 *  @el htmlElement : the html element to add to
 *
 *  @returns void
 */
Element.prototype.after = function(el) {
  const refNode = this.nextSibling;
  if(this.nextSibling.nodeType != 1) {
    refNode.after(el);
  } else {
    this.insertBefore(el, refNode);
  }
}

/**
 * before
 * Insert an element before the caller
 *
 *  @el htmlElement : the html element to add to
 *
 *  @returns void
 */
Element.prototype.before = function(el) {
  const refNode = this.previousSibling;
  if(this.previousSibling.nodeType != 1) {
    refNode.before(el);
  } else {
    this.insertBefore(el, refNode);
  }
};


/**
 * CSS
 * Assign an object full of css rules
 * to the styles of the caller
 *
 *  @styles string
 * 
 *  @returns void
 */
Element.prototype.css = function(styles) {
   this.style.cssText = styles;
};


/**
 * addClass
 * Add classes to the caller
 *
 *  @classes string : variable number of classes
 *                    to add to the caller
 *
 *  @return void
 */
Element.prototype.addClass = function(...classes) {
  for(let c in classes) {
    this.classList.add(classes[c]);
  }
};


/**
 * removeClass
 * Remove classes from the caller
 *
 *  @classes string : variable number of classes
 *                    to remove from the caller
 *
 *  @returns void
 */
Element.prototype.removeClass = function(...classes) {
  for(let c in classes) {
    this.classList.remove(classes[c]);
  }
};


/**
 * makeElement
 * Creates a new html element, assigns
 * content and classes, and returns it
 * 
 *  @el string
 *  @content string : content as text and/or html of element
 *  @classes string[] : array of classes to add to the element
 * 
 *  @returns htmlElement
 */
function makeElement( el, content='', classes=[] )
{
  el = document.createElement(el);
  el.innerHTML = content;
  if(classes !== [])
    classes.forEach(className => el.classList.add(className));
  return el;
}


// returns true if the passed string is html
const isHtml = s => /<[a-z][\s\S]*>/i.test(s);


/**
 * clearInnerElementSpacing
 * Remove padding and margin from inner elements
 * of the passed parent element
 *
 *  @el htmlElement : the parent element to clear spacing on
 *
 *  @returns void
 */
const clearInnerElementSpacing = el => {
  el.lastElementChild.style.marginBottom = 0;
  el.lastElementChild.style.paddingBottom = 0;
  el.firstElementChild.style.marginTop = 0;
  el.firstElementChild.style.paddingTop = 0;
};

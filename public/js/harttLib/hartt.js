//#region STRINGS ==========================================================================================================================================================================================
export const numberFromString   = _string => {return +(_string.trim())};
export const reverseString      = _string => {return _string.split('').reverse().join('')};
export const isEmtpyString      = _string => {return _string===undefined||_string===null||_string.length===0};
export const replacedAllFrom    = (_string, _from, _to) => {return _string.split(_from).join(_to)};
//#endregion STRING

//#region ARRAYS ==========================================================================================================================================================================================
export const arrayCloneFrom     = _array => {return _array.slice()};
export const shuffleArray       = _array => {return suffleHelper(_array)};
export const isEmtpyArray       = _array => {return !Array.isArray(_array)||_array.length===0};
export const biggestNumInArray  = _array => {return _array.reduce((_anterior,_current)=>{return _anterior>_current?_anterior:_current})};
export const smallestNumInArray = _array => {return _array.reduce((_anterior,_current)=>{return _anterior<_current?_anterior:_current})};
export const arrayBySelector    = _nodeListSelector => {return Array.from(document.querySelectorAll(_nodeListSelector))};
export const addToEndOfArray    = (_originalArray, _el) => {if(Array.isArray(_el)){_el.forEach(_e=>{_originalArray.push(_e)});return}_originalArray.push(_el)};
export const addToStartOfArray  = (_originalArray, _el) => {if(Array.isArray(_el)){_el.reverse().forEach(_e=>{_originalArray.unshift(_e)});return}_originalArray.unshift(_el)};
//#endregion ARRAY

//#region NUMBERS ==========================================================================================================================================================================================
export const isEven             = _n => {return _n%2 == 0};
export const sum                = (..._nums) => {return sumHelper(_nums)};
export const multiplicate       = (..._nums) => {return multHelper(_nums)};
export const randomFloatBetween = (_min,_max) => {return randomFloatHelper(_min,_max)};
export const randomIntBetween   = (_min,_max) => {return Math.floor(randomFloatHelper(_min,_max))};
//#endregion NUMBER

//#region HTML-ELEMENTS ==========================================================================================================================================================================================
export const hideEl             = _el => {_el.classList.add('hide')};
export const showEl             = _el => {_el.classList.remove('hide')};
export const toggleElShow       = _el => {_el.classList.toggle('hide')};
export const activeEl           = _el => {_el.classList.add('active')};
export const desactiveEl        = _el => {_el.classList.remove('active')};
export const toggleElActive     = _el => {_el.classList.toggle('active')};
export const swapNodes          = (_node1,_node2) => {swapNodesHelper(_node1,_node2)};
export const createNode         = _htmlString => {return createNodeHelper(_htmlString)};
export const appendNode         = (_el,_htmlString) => {_el.appendChild(createNodeHelper(_htmlString))};
//#endregion HTML-ELEMENTS 

//#region WINDOW-EVENTS ==========================================================================================================================================================================================
export const onWindowLoad       = _callback => {window.addEventListener('load',_callback)};
export const onWindowScroll     = _callback => {window.addEventListener('scroll',_callback)};
export const onWindowOnline     = _callback => {window.addEventListener('online',_callback)};
export const onWindowOffline    = _callback => {window.addEventListener('offline',_callback)};
export const onPageHide         = _callback => {window.addEventListener('pagehide',_callback)};
export const onPageShow         = _callback => {window.addEventListener('pageshow',_callback)};
//#endregion WINDOW-EVENTS 

//#region BETTER-WORKFLOW ==========================================================================================================================================================================================
export const resetElementScroll = _el => {_el.scrollTo(0,0)};
export const typeOf             = _el => {return typeOfHelper(_el)};
export const log                = _message => {console.log(_message)};
export const table              = _object => {console.table(_object)};
export const removeItem         = _key => {localStorage.removeItem(_key)};
export const loadLocalData      = _key => {return localStorage.getItem(_key)};
export const saveLocalData      = (_key,_value) => {localStorage.setItem(_key,_value)};
export const copy               = _string => {navigator.clipboard.writeText(_string)};
//#endregion BETTER-WORKFLOW


//#region HELPER-FUNCTIONS ==========================================================================================================================================================================================
function suffleHelper(_array){
    for (let i = _array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [_array[i], _array[j]] = [_array[j], _array[i]];
    }
    return _array;
}
function swapNodesHelper(_node1,_node2){
  areSiblings()?optionTrue():optionFalse();
  function areSiblings(){_node1===_node2.nextElementSibling}
  function optionTrue(){_node2.parentNode.insertBefore(_node1,_node2)}
  function optionFalse(){_node1.replaceWith(_node2);_node2.parentNode.insertBefore(_node1,_node2.nextElementSibling)}
}
function sumHelper(_nums){
    let sum = 0;
    _nums.forEach(_n=>{
        sum += _n;
    })
    return sum;
}
function multHelper(_nums){
    let mult = 1;
    _nums.forEach(_n=>{
        mult *= _n;
    })
    return mult;
}
function createNodeHelper(_htmlString){
    const placeholder=document.createElement('div');
    placeholder.innerHTML=_htmlString;
    return placeholder.firstElementChild;
}
function randomFloatHelper(_min,_max){
    return _min+Math.random()*(_max-_min+1)
}
function typeOfHelper(_el){
    return Object.prototype.toString.call(_el).replace('[object ','').replace(']','');
}
//#endregion HELPER-FUNCTIONS
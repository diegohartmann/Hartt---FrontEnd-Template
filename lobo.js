//#region HELPER-FUNCTIONS ==========================================================================================================================================================================================
function suffleHelper(_array){
    for (let i = _array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [_array[i], _array[j]] = [_array[j], _array[i]];
    }
    return _array;
}
function moneyFormatFromHelper(_numberPrice,_currencyFormat='usa',_numberFormat='usa',_currencyDisplay ='symbol' /*'symbol' / 'code' / 'key'*/){
    return _numberPrice.toLocaleString(finalNumberFormat(),{style:"currency",currency:finalCurrencyCode(),currencyDisplay:_currencyDisplay.toLowerCase()});
    function finalNumberFormat(){return parametersOptions(_numberFormat.toLowerCase())['country']}
    function finalCurrencyCode(){return parametersOptions(_currencyFormat.toLowerCase())['currency']}
    function parametersOptions(_input){
        const _inputs_={
          //br
          'br':localeStringOptions('_br_'),
          'ptbr':localeStringOptions('_br_'),
          'pt-br':localeStringOptions('_br_'),
          'pt_br':localeStringOptions('_br_'),
          'bra':localeStringOptions('_br_'),
          'brazil':localeStringOptions('_br_'),
          'brasil':localeStringOptions('_br_'),
          // eua
          'eu':localeStringOptions('_usa_'),
          'us':localeStringOptions('_usa_'),
          'eua':localeStringOptions('_usa_'),
          'usa':localeStringOptions('_usa_'),
          'unitedstates':localeStringOptions('_usa_'),
          'estadosunidos':localeStringOptions('_usa_'),
      }
      return _inputs_[_input];
      //===============
      function localeStringOptions(_option){
          const _options_={
              _br_:new Option('BRL','pt-BR'),
              _usa_:new Option('USD','eng-US'),
          }
          return _options_[_option];
      }
      function Option(_currency,_country){this.currency=_currency;this.country=_country}
  }
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

//#endregion HELPER-FUNCTIONS

const L = {

    //#region STRINGS ==========================================================================================================================================================================================
    // String.prototype.numbered:function(){return +(this.trim())}
    toNumber:function(_string){return +(_string.trim())},
    // String.prototype.replacedAll:function(_from,_to){return this.split(_from).join(_to)}
    replacedAllFrom:function(_string, _from, _to){return _string.split(_from).join(_to)},
    //#endregion STRING
    
    //#region ARRAYS ==========================================================================================================================================================================================
    arrayCloneFrom:function(_array){return _array.slice()},
    addToStartOfArray:function(_originalArray, _el){if(Array.isArray(_el)){_el.reverse().forEach(_e=>{_originalArray.unshift(_e)});return}_originalArray.unshift(_el)},
    addToEndOfArray:function(originalArray, _el){if(Array.isArray(_el)){_el.forEach(_e=>{originalArray.push(_e)});return}originalArray.push(_el)},
    biggestNumInArray:function(_array){return _array.reduce((_anterior,_current)=>{return _anterior>_current?_anterior:_current})},
    smallestNumInArray:function(_array){return _array.reduce((_anterior,_current)=>{return _anterior<_current?_anterior:_current})},
    shuffle:function(_array){return suffleHelper(_array)},
    arrayQuery:function(_nodeListSelector){return Array.from(document.querySelectorAll(_nodeListSelector))},
    //#endregion ARRAY
    
    //#region NUMBERS ==========================================================================================================================================================================================
    isEven:function(_n){return(_n)%2==0},
    moneyFormatFrom:function(_n,_currencyFormat,_numberFormat,_currencyDisplay){return moneyFormatFromHelper(_n,_currencyFormat,_numberFormat,_currencyDisplay)},
    randomFloatBetween:function(_min,_max){return _min+Math.random()*(_max-_min+1)},
    randomIntBetween:function(_min,_max){return Math.floor(_min+Math.random()*(_max-_min+1))},
    sum:function(..._nums){return this.sumHelper(_nums)},
    multiplicate:function(..._nums){return this.multHelper(_nums)},
    //#endregion NUMBER
    
    //#region HTML-ELEMENTS ==========================================================================================================================================================================================
    // getById:function(_parent = document, _elementId){return _parent.getElementById(_elementId)},
    // getByClass:function(_parent = document, _elementClass){return _parent.getElementsByClasskey(_elementClass)},
    // getBySelector:function(_parent = document, _selector){return _parent.querySelector(_selector)},
    // getBySelectorAll:function(_parent = document, _selector){return _parent.querySelectorAll(_selector)},
    arrayFromSel:function(_sel){return Array.from(document.querySelectorAll(_sel))},
    createNode:function(_htmlString){const placeholder=document.createElement('div');placeholder.innerHTML=_htmlString;return placeholder.firstElementChild},
    appendNode:function(_el,_htmlString){_el.appendChild(this.createNode(_htmlString))},
    addClass:function(_el,_class='active'){_el.classList.add(_class)},
    toggleClass:function(_el,_class='active'){_el.classList.toggle(_class)},
    removeClass:function(_el,_class='active'){_el.classList.remove(_class)},
    swapNodes:function(_node1,_node2){swapNodesHelper(_node1,_node2)},
    //#endregion HTML-ELEMENTS 
    
    //#region EVENTS ====================================================================================================================================================================================================
    onRightClick:function(_node,_callback){_node.addEventListener('contextmenu',_callback)},
    onClick:function(_node,_callback){_node.addEventListener('click',_callback)},
    onDoubleClick:function(_node,_callback){_node.addEventListener('dblclick',_callback)},
    onLoad:function(_node,_callback){_node.addEventListener('load',_callback)},
    onDrag:function(_node,_callback){_node.addEventListener('drag',_callback)},
    onDragEnd:function(_node,_callback){_node.addEventListener('dragend',_callback)},
    onDragEnter:function(_node,_callback){_node.addEventListener('dragenter',_callback)},
    onDragLeave:function(_node,_callback){_node.addEventListener('dragleave',_callback)},
    onDragOver:function(_node,_callback){_node.addEventListener('dragover',_callback)},
    onDragStart:function(_node,_callback){_node.addEventListener('dragstart',_callback)},
    onDragDrop:function(_node,_callback){_node.addEventListener('drop',_callback)},
    onFocus:function(_node,_callback){_node.addEventListener('focus',_callback)},
    onUserInput:function(_node,_callback){_node.addEventListener('input',_callback)},
    onKeyDown:function(_node,_callback){_node.addEventListener('keydown',_callback)},
    onKeyUp:function(_node,_callback){_node.addEventListener('keyup',_callback)},
    onMouseDown:function(_node,_callback){_node.addEventListener('mousedown',_callback)},
    onMouseUp:function(_node,_callback){_node.addEventListener('mouseup',_callback)},
    onMouseEnter:function(_node,_callback){_node.addEventListener('mouseenter',_callback)},
    onMouseLeave:function(_node,_callback){_node.addEventListener('mouseleave',_callback)},
    onMouseMove:function(_node,_callback){_node.addEventListener('mousemove',_callback)},
    onMouseOver:function(_node,_callback){_node.addEventListener('mouseover',_callback)},
    onMouseOut:function(_node,_callback){_node.addEventListener('mouseout',_callback)},
    onMouseWheel:function(_node,_callback){_node.addEventListener('wheel',_callback)},
    onCopy:function(_node,_callback){_node.addEventListener('copy',_callback)},
    onCut:function(_node,_callback){_node.addEventListener('cut',_callback)},
    onPaste:function(_node,_callback){_node.addEventListener('paste',_callback)},
    onScroll:function(_node,_callback){_node.addEventListener('scroll',_callback)},
    onSearch:function(_node,_callback){_node.addEventListener('search',_callback)},
    onSelect:function(_node,_callback){_node.addEventListener('select',_callback)},
    onSubmit:function(_node,_callback){_node.addEventListener('submit',_callback)},
    onTouchStart:function(_node,_callback){_node.addEventListener('touchstart',_callback)},
    onTouchMove:function(_node,_callback){_node.addEventListener('touchmove',_callback)},
    onTouchEnd:function(_node,_callback){_node.addEventListener('touchend',_callback)},
    onTouchCancel:function(_callback){this.addEventListener('touchcancel',_callback)},
    //#endregion EVENTS

    //#region BETTER-WORKFLOW ==========================================================================================================================================================================================
    typeOf:function(_el){return Object.prototype.toString.call(_el).replace('[object ','').replace(']','')},
    onWindowLoad:function(_callback){window.addEventListener('load',_callback)},
    onWindowOnline:function(_callback){window.addEventListener('online',_callback)},
    onWindowOffline:function(_callback){window.addEventListener('offline',_callback)},
    onWindowScroll:function(_callback){window.addEventListener('scroll',_callback)},
    onPageHide:function(_callback){window.addEventListener('pagehide',_callback)},
    onPageShow:function(_callback){window.addEventListener('pageshow',_callback)},
    clog:function(_message){console.log(_message)},
    copy:function(_string){navigator.clipboard.writeText(_string)},
    saveLocalData:function(_key,_value){localStorage.setItem(_key,_value)},
    loadLocalData:function(_key){return localStorage.getItem(_key)},
    removeItem:function(_key){localStorage.removeItem(_key)},
    //#endregion BETTER-WORKFLOW
    
}

export default L;
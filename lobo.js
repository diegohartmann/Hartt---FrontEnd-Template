//#region STRINGS ==========================================================================================================================================================================================
String.prototype.numbered=function(){return +(this.trim())}
String.prototype.replacedAll=function(_from,_to){return this.split(_from).join(_to)}
//#endregion STRING

//#region ARRAYS ==========================================================================================================================================================================================
Array.prototype.clone=function(){return this.slice()}
Array.prototype.addToStart=function(_el){if(Array.isArray(_el)){_el.reverse().forEach(_e=>{this.unshift(_e)});return}this.unshift(_el)}
Array.prototype.addToEnd=function(_el){if(Array.isArray(_el)){_el.forEach(_e=>{this.push(_e)});return}this.push(_el)}
Array.prototype.biggestNum=function(){return this.reduce((_anterior,_current)=>{return _anterior>_current?_anterior:_current})}
Array.prototype.smallestNum=function(){return this.reduce((_anterior,_current)=>{return _anterior<_current?_anterior:_current})}
//#endregion ARRAY

//#region NUMBERS ==========================================================================================================================================================================================
Number.prototype.isEven=function(){return (this)%2==0}
Number.prototype.formatedToMoney=function(_currencyFormat,_numberFormat,_currencyDisplay){return moneyFormatFrom(this,_currencyFormat,_numberFormat,_currencyDisplay)}
function randomIntBetween(_min,_max){return Math.floor(randomFloatBetween(_min, _max))}
function randomFloatBetween(_min,_max){return _min + Math.random() * (_max - _min + 1)}
//#endregion NUMBER

//#region HTML-ELEMENTS ==========================================================================================================================================================================================
function getById(_elementId){return document.getElementById(_elementId)}
function getByClass(_elementClass){return document.getElementsByClassName(_elementClass)}
function getBySelector(_selector){return document.querySelector(_selector)}
function getBySelectorAll(_selector){return document.querySelectorAll(_selector)}
Node.prototype.addClass=function(_class='active'){this.classList.add(_class)}
Node.prototype.toggleClass=function(_class='active'){this.classList.toggle(_class)}
Node.prototype.removeClass=function(_class='active'){this.classList.remove(_class)}
//#endregion HTML-ELEMENTS 

//#region EVENTS ====================================================================================================================================================================================================
Node.prototype.onRightClick=function(_callback){this.addEventListener('contextmenu',_callback)}
Node.prototype.onClick=function(_callback){this.addEventListener('click',_callback)}
Node.prototype.onDoubleClick=function(_callback){this.addEventListener('dblclick',_callback)}
Node.prototype.onLoad=function(_callback){this.addEventListener('load',_callback)}
Node.prototype.onDrag=function(_callback){this.addEventListener('drag',_callback)}
Node.prototype.onDragEnd=function(_callback){this.addEventListener('dragend',_callback)}
Node.prototype.onDragEnter=function(_callback){this.addEventListener('dragenter',_callback)}
Node.prototype.onDragLeave=function(_callback){this.addEventListener('dragleave',_callback)}
Node.prototype.onDragOver=function(_callback){this.addEventListener('dragover',_callback)}
Node.prototype.onDragStart=function(_callback){this.addEventListener('dragstart',_callback)}
Node.prototype.onDragDrop=function(_callback){this.addEventListener('drop',_callback)}
Node.prototype.onFocus=function(_callback){this.addEventListener('focus',_callback)}
Node.prototype.onUserInput=function(_callback){this.addEventListener('input',_callback)}
Node.prototype.onKeyDown=function(_callback){this.addEventListener('keydown',_callback)}
Node.prototype.onKeyUp=function(_callback){this.addEventListener('keyup',_callback)}
Node.prototype.onMouseDown=function(_callback){this.addEventListener('mousedown',_callback)}
Node.prototype.onMouseUp=function(_callback){this.addEventListener('mouseup',_callback)}
Node.prototype.onMouseEnter=function(_callback){this.addEventListener('mouseenter',_callback)}
Node.prototype.onMouseLeave=function(_callback){this.addEventListener('mouseleave',_callback)}
Node.prototype.onMouseMove=function(_callback){this.addEventListener('mousemove',_callback)}
Node.prototype.onMouseOver=function(_callback){this.addEventListener('mouseover',_callback)}
Node.prototype.onMouseOut=function(_callback){this.addEventListener('mouseout',_callback)}
Node.prototype.onMouseWheel=function(_callback){this.addEventListener('wheel',_callback)}
Node.prototype.onCopy=function(_callback){this.addEventListener('copy',_callback)}
Node.prototype.onCut=function(_callback){this.addEventListener('cut',_callback)}
Node.prototype.onPaste=function(_callback){this.addEventListener('paste',_callback)}
Node.prototype.onScroll=function(_callback){this.addEventListener('scroll',_callback)}
Node.prototype.onSearch=function(_callback){this.addEventListener('search',_callback)}
Node.prototype.onSelect=function(_callback){this.addEventListener('select',_callback)}
Node.prototype.onSubmit=function(_callback){this.addEventListener('select',_callback)}
Node.prototype.onTouchStart=function(_callback){this.addEventListener('touchstart',_callback)}
Node.prototype.onTouchMove=function(_callback){this.addEventListener('touchmove',_callback)}
Node.prototype.onTouchEnd=function(_callback){this.addEventListener('touchend',_callback)}
Node.prototype.onTouchCancel=function(_callback){this.addEventListener('touchcancel',_callback)}
//#endregion EVENTS

//#region BETTER-WORKFLOW ==========================================================================================================================================================================================
function onWindowLoad(_callback){window.addEventListener('load', _callback)}
function onWindowOnline(_callback){window.addEventListener('online', _callback)}
function onWindowOffline(_callback){window.addEventListener('offline', _callback)}
function onWindowScroll(_callback){window.addEventListener('scroll', _callback)}
function onPageHide(_callback){window.addEventListener('pagehide', _callback)}
function onPageShow(_callback){window.addEventListener('pageshow', _callback)}
function clog(_message){console.log(_message)}
//#endregion BETTER-WORKFLOW

//#region HELPER-FUNCTIONS ==========================================================================================================================================================================================
function moneyFormatFrom(_numberPrice,_currencyFormat='usa',_numberFormat='usa', _currencyDisplay = 'symbol' /*'symbol' / 'code' / 'name'*/) {
    return _numberPrice.toLocaleString(finalNumberFormat(),{ style:"currency",currency:finalCurrencyCode(),currencyDisplay: _currencyDisplay.toLowerCase()});
    function finalNumberFormat(){return parametersOptions(_numberFormat.toLowerCase())['country']}
    function finalCurrencyCode(){return parametersOptions(_currencyFormat.toLowerCase())['currency']}
    function parametersOptions(_input){
        const _inputs_ = {
            //br
            'br': localeStringOptions('_br_') ,
            'ptbr':localeStringOptions('_br_') ,
            'pt-br': localeStringOptions('_br_') ,
            'pt_br':localeStringOptions('_br_') ,
            'bra': localeStringOptions('_br_') ,
            'brazil': localeStringOptions('_br_') ,
            'brasil': localeStringOptions('_br_') ,
            // eua
            'eu': localeStringOptions('_usa_') ,
            'us': localeStringOptions('_usa_') ,
            'eua': localeStringOptions('_usa_') ,
            'usa': localeStringOptions('_usa_') ,
            'unitedstates': localeStringOptions('_usa_') ,
            'estadosunidos': localeStringOptions('_usa_') ,
        }
        return _inputs_[_input];
        //===============
        function localeStringOptions(_option){
            const _options_ = {
                _br_: {
                    'currency': 'BRL',
                    'country': 'pt-BR',
                },
                _usa_: {
                    'currency': 'USD',
                    'country': 'eng-US',
                } ,
            }
            return _options_[_option];
            // const localeStringOptions = {
//     countries : {
//         //br
//         br: 'pt-BR',
//         ptbr: 'pt-BR',
//         pt_br: 'pt-BR',
//         bra: 'pt-BR',
//         brazil: 'pt-BR',
//         brasil: 'pt-BR',
//         //eua
//         eu: 'eng-US',
//         us: 'eng-US',
//         eua: 'eng-US',
//         usa: 'eng-US',
//         unitedstates: 'eng-US',
//         estadosunidos: 'eng-US',
//     },
//     currencies : {
//         //br
//         br: 'BRL',
//         ptbr: 'BRL',
//         pt_br: 'BRL',
//         bra: 'BRL',
//         brazil: 'BRL',
//         brasil: 'BRL',
//         //eua
//         eu: 'USD',
//         us: 'USD',
//         eua: 'USD',
//         usa: 'USD',
//         unitedstates: 'USD',
//         estadosunidos: 'USD',
//     },
    // ar-SA Arabic (Saudi Arabia)
    // bn-BD Bangla (Bangladesh)
    // bn-IN Bangla (India)
    // cs-CZ Czech (Czech Republic)
    // da-DK Danish (Denmark)
    // de-AT Austrian German
    // de-CH "Swiss" German
    // de-DE Standard German (as spoken in Germany)
    // el-GR Modern Greek
    // en-AU Australian English
    // en-CA Canadian English
    // en-GB British English
    // en-IE Irish English
    // en-IN Indian English
    // en-NZ New Zealand English
    // en-US US English
    // en-ZA English (South Africa)
    // es-AR Argentine Spanish
    // es-CL Chilean Spanish
    // es-CO Colombian Spanish
    // es-ES Castilian Spanish (as spoken in Central-Northern Spain)
    // es-MX Mexican Spanish
    // es-US American Spanish
    // fi-FI Finnish (Finland)
    // fr-BE Belgian French
    // fr-CA Canadian French
    // fr-CH "Swiss" French
    // fr-FR Standard French (especially in France)
    // he-IL Hebrew (Israel)
    // hi-IN Hindi (India)
    // hu-HU Hungarian (Hungary)
    // id-ID Indonesian (Indonesia)
    // it-CH "Swiss" Italian
    // it-IT Standard Italian (as spoken in Italy)
    // ja-JP Japanese (Japan)
    // ko-KR Korean (Republic of Korea)
    // nl-BE Belgian Dutch
    // nl-NL Standard Dutch (as spoken in The Netherlands)
    // no-NO Norwegian (Norway)
    // pl-PL Polish (Poland)
    // pt-BR Brazilian Portuguese
    // pt-PT European Portuguese (as written and spoken in Portugal)
    // ro-RO Romanian (Romania)
    // ru-RU Russian (Russian Federation)
    // sk-SK Slovak (Slovakia)
    // sv-SE Swedish (Sweden)
    // ta-IN Indian Tamil
    // ta-LK Sri Lankan Tamil
    // th-TH Thai (Thailand)
    // tr-TR Turkish (Turkey)
    // zh-CN Mainland China, simplified characters
    // zh-HK Hong Kong, traditional characters
    // zh-TW Taiwan, traditional characters
// }
        }
    }
}
//#endregion HELPER-FUNCTIONS

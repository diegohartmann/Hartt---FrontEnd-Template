function onWindowLoad(_callback){
    window.addEventListener('load', _callback);
}
function clog(_message) {
    console.log(_message);
}
function getById(_elementId){
    return document.getElementById(_elementId);
}
function getByClass(_elementClass){
    return document.getElementsByClassName(_elementClass);
}
function getBySelector(_selector) {
    return document.querySelector(_selector);
}
function getBySelectorAll(_selector) {
    return document.querySelectorAll(_selector);
}
function randomFloatBetween(_min, _max) {
    return _min + Math.random() * (_max - _min + 1);
}
function randomIntBetween(_min, _max) {
    return Math.floor(randomFloatBetween(_min, _max));
}
function addClassTo(_element, _class = 'active') {
    _element.classList.add(_className);
}
function toggleClassOf(_element, _class = 'active') {
    _element.classList.toggle(_className);
}
function removeClassFrom(_element, _class = 'active') {
    _element.classList.remove(_class);
}
function setClassNameTo(_element, _class = 'active'){
    _element.className = _className;
}
Number.prototype.moneyformat = function (_currencyFormat, _numberFormat, _currencyDisplay){
    return moneyFormatFrom(this, _currencyFormat, _numberFormat, _currencyDisplay);
}
function moneyFormatFrom(_numberPrice, _currencyFormat = 'usa', _numberFormat = 'usa', _currencyDisplay = 'symbol' /*'symbol' / 'code' / 'name'*/) {
    function finalNumberFormat(){
        return localeStringOptionsUsers(_numberFormat.toLowerCase())['country'];
    }
    function finalCurrencyCode(){
        return localeStringOptionsUsers(_currencyFormat.toLowerCase())['currency'];
    }
    function localeStringOptionsUsers(_user){
        const _users_ = {
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
        return _users_[_user];

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
        }
    }
    return _numberPrice.toLocaleString(finalNumberFormat(),{ style:"currency",currency:finalCurrencyCode(),currencyDisplay: _currencyDisplay.toLowerCase()});
}

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
String.prototype.numbered = function(){
    return +((_string).trim())
}
// function numberFromString(_string){
//     return +((_string).trim())
// }
String.prototype.replacedAll = function(_from, _to){
    return _string.split(_from).join(_to);
}
// function replaceAllFrom(_string, _from, _to){
//     return _string.split(_from).join(_to);
// }
Array.prototype.clone = function(){
    return this.slice();
}
// function arrayCloneFrom(_originalArray){
//     return _originalArray.slice();
// }
Array.prototype.addAtStart = function (_el){
    if(Array.isArray(_el)){
        for (let i = _el.length - 1; i >= 0; i--) {
            this.unshift(_el[i]);        
        }
        return;
    }
    this.unshift(_el);
}
// function addAtStartTo(_array, _el){
//     if(Array.isArray(_el)){
//         for (let i = _el.length - 1; i >= 0; i--) {
//             _array.unshift(_el[i]);        
//         }
//         return;
//     }
//     _array.unshift(_el);
// }
Array.prototype.addAtEnd = function(_el){
    if(Array.isArray(_el)){
        _el.forEach(_e => {this.push(_e);});
        return;
    }
    this.push(_el);
}
// function addAtEndTo(_array, _el){
//     if(Array.isArray(_el)){
//         _el.forEach(_e => {_array.push(_e);});
//         return;
//     }
//     _array.push(_el);
// }
Array.prototype.biggestNumber = function() {
    return this.reduce((_anterior, _current)=>{
        return _anterior > _current? _anterior : _current;
    })
}
// function biggestNumberFrom(_array){
//     return _array.reduce((_anterior, _current)=>{
//         return _anterior > _current? _anterior : _current;
//     })
// }
Array.prototype.smallestNumber = function() {
    return this.reduce((_anterior, _current)=>{
        return _anterior < _current? _anterior : _current;
    })
}
// function smallestNumberFrom(_array){
//     return _array.reduce((_anterior, _current)=>{
//         return _anterior < _current? _anterior : _current;
//     })
// }
Number.prototype.isEven = function(){
    return (this)%2 == 0;
}
// function isEven(_n){
//     return (_n)%2 == 0; 
// }
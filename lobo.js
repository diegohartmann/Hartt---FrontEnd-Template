function clog(_message) {
    console.log(_message);
}
function getById(_elementId){
    return document.getElementById(_elementId);
}
function getByClass(_elementClass){
    return document.getElementsByClassName(_elementClass);
}
function getByQuerySel(_selector) {
    return document.querySelector(_selector);
}
function getByQuerySelAll(_selector) {
    return document.querySelectorAll(_selector);
}
function getRandomFloatBetween(_min, _max) {
    return _min + Math.random() * (_max - _min + 1);
}
function getRandomIntBetween(_min, _max) {
    return Math.floor(randomFloatBetween(_min, _max));
}
function getSquare(_number){
    return _number*_number;
}
function getDouble(_number){
    return _number*2;
}
function getHalf(_number){
    return _number/2;
}
function addClassTo(_element, _className) {
    _element.classList.add(_className);
}
function toggleClassOf(_element, _className) {
    _element.classList.toggle(_className);
}
function removeClassFrom(_element, _class) {
    _element.classList.remove(_class);
}
function setClassNameTo(_element, _className){
    _element.className = _className;
}
function getCurrencyStringFrom(_numberPrice, _currencyFormat, _numberFormat, _currencyDisplay = 'symbol') {
    //_currencyDisplay = 'symbol' / 'code' / 'name'
    return _numberPrice.toLocaleString(localeStringOptions.countries[_numberFormat.toLowerCase()], {
        style: "currency",
        currency: localeStringOptions.currencies[_currencyFormat.toLowerCase()],
        currencyDisplay : _currencyDisplay,
    });
}
const localeStringOptions = {
    countries : {
        //br
        br: 'pt-BR',
        ptbr: 'pt-BR',
        pt_br: 'pt-BR',
        bra: 'pt-BR',
        brazil: 'pt-BR',
        brasil: 'pt-BR',
        //eua
        eu: 'eng-US',
        us: 'eng-US',
        eua: 'eng-US',
        usa: 'eng-US',
        unitedstates: 'eng-US',
        estadosunidos: 'eng-US',
    },
    currencies : {
        //br
        br: 'BRL',
        ptbr: 'BRL',
        pt_br: 'BRL',
        bra: 'BRL',
        brazil: 'BRL',
        brasil: 'BRL',
        //eua
        eu: 'USD',
        us: 'USD',
        eua: 'USD',
        usa: 'USD',
        unitedstates: 'USD',
        estadosunidos: 'USD',
    },
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
}
function getNumberFromString(_string){
    return +((_string).trim())
}
function DomEl(_selector){
    this.element = function(){
        return document.querySelector(_selector);
    }
    this.addClass = function(_class){
        this.element().classList.add(_class);
    }
    this.removeClass = function (_class){
        this.element().classList.remove(_class);
    }
    this.toggleClass = function(_class){
        this.element().classList.toggle(_class);
    }
}
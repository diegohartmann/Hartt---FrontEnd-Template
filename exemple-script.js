onWindowLoad(()=>{
    const title1 = getByQuerySel('h1');
    title1.innerHTML = "<s>document.querySelector()</s> --> <i>getByQuerySel()</i>";
    
    const title2 = getById('secondText');
    title2.innerHTML = "<s>document.getElementById()</s> --> <i>getById()</i>";

    const title3 = getByQuerySel('h3');
    title3.innerHTML = "<s>console.log()</s> --> <i>clog()</i>";

    const title4 = getByQuerySel('h4');
    title4.innerHTML = " <s>_min + Math.random() * (_max - _min + 1)</s> --> <i>getRandomFloatBetween(_min, _max)</i> / <i>getRandomIntBetween(_min, _max)</i> ";
    
    const title5 = getByClass('fifthTextClass');
    title5.inner = " <s>document.getElementsByClassName</s> --> <i>getByClass()</i>";
    title5.innerHTML = " <s>document.getElementsByClassName</s> --> <i>getByClass()</i>";
})

// clog('This is a "console.log()" shorthand from lobo.js');
clog( getCurrencyStringFrom(22000, 'bra', 'ESTADOSUNIDOS', 'name') );
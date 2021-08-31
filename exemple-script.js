onWindowLoad(()=>{
    const title1 = getByQuerySel('h1');
    title1.innerHTML = "<s>document.querySelector()</s> --> <i>getByQuerySel()</i>";
    
    const title2 = getById('secondText');
    title2.innerHTML = "<s>document.getElementById()</s> --> <i>getById()</i>";

    const title3 = getByQuerySel('h3');
    title3.innerHTML = "<s>console.log()</s> --> <i>clog()</i>";

    const title4 = getByQuerySel('h4');
    title4.innerHTML = " <s>_min + Math.random() * (_max - _min + 1)</s> --> <i>getRandomFloatBetween(_min, _max)</i> / <i>getRandomIntBetween(_min, _max)</i> ";
})

clog('This is a "console.log()" shorthand from lobo.js');


clog(`
------------------- SIMPLE MONEY FORMAT FROM ANY NUMBER ------------------------

getCurrencyStringFrom(100, 'usa', 'usa') -----------------> ${getCurrencyStringFrom(100, 'usa', 'usa', 'symbol')}

getCurrencyStringFrom(100, 'usa', 'bra', 'code') ---------> ${getCurrencyStringFrom(100, 'usa', 'bra', 'code')}

getCurrencyStringFrom(100, 'bra', 'bra', 'name') ---------> ${getCurrencyStringFrom(100, 'bra', 'bra', 'name')}

---------------------------------------------------------------------------------
`);
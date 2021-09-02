onWindowLoad(()=>{
    const title1 = getBySelector('h1');
    title1.innerHTML = "<s>document.querySelector()</s> --> <i>getByQuerySel()</i>";
    
    const title2 = getById('secondText');
    title2.innerHTML = "<s>document.getElementById()</s> --> <i>getById()</i>";

    const title3 = getBySelector('h3');
    title3.innerHTML = "<s>console.log()</s> --> <i>clog()</i>";

    const title4 = getBySelector('h4');
    title4.innerHTML = " <s>_min + Math.random() * (_max - _min + 1)</s> --> <i>getRandomFloatBetween(_min, _max)</i> / <i>getRandomIntBetween(_min, _max)</i> ";

    title4.onClick((e)=>{
        e.currentTarget.toggleClass('a')
    })
})

clog('This is a "console.log()" shorthand from lobo.js');


clog(`
------------------- SIMPLE MONEY FORMAT FROM ANY NUMBER ------------------------

moneyFormatFrom(100, 'usa', 'usa') -----------------> ${moneyFormatFrom(100, 'usa', 'usa', 'symbol')}

moneyFormatFrom(100, 'usa', 'bra', 'code') ---------> ${moneyFormatFrom(100, 'usa', 'bra', 'code')}

moneyFormatFrom(100, 'bra', 'bra', 'name') ---------> ${moneyFormatFrom(100, 'bra', 'bra', 'name')}

---------------------------------------------------------------------------------
`);

clog(
    `

    `
)
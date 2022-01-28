import L from './lobo.js';

L.onWindowLoad(()=>{
    const title1 = L.getBySelector(document,'h1');
    title1.innerHTML = "<s>document.querySelector()</s> --> <i>getByQuerySel()</i>";
    
    const title2 = L.getById(document,'secondText');
    title2.innerHTML = "<s>document.getElementById()</s> --> <i>getById()</i>";

    const title3 = L.getBySelector(document,'h3');
    title3.innerHTML = "<s>console.log()</s> --> <i>clog()</i>";

    const title4 = L.getBySelector(document,'h4');
    title4.innerHTML = " <s>_min + Math.random() * (_max - _min + 1)</s> --> <i>getRandomFloatBetween(_min, _max)</i> / <i>getRandomIntBetween(_min, _max)</i> ";

    L.onClick(title4,(e)=>{
        L.toggleClass(e.currentTarget, 'a')
        L.appendNode(title4,   `
        section>
        <ul>
        <li>aaa</li>
        <li>a</li>
        <li>aaa</li>
        </ul>
        </section><
        `)
    })
})

L.clog('This is a "console.log()" shorthand from lobo.js');

L.clog(L.moneyFormatFrom(100,'bra', 'bra','code'))

L.clog(`
------------------- SIMPLE MONEY FORMAT FROM ANY NUMBER ------------------------

moneyFormatFrom(100, 'usa', 'usa') -----------------> ${L.moneyFormatFrom(100, 'usa', 'usa', 'symbol')}

moneyFormatFrom(100, 'usa', 'bra', 'code') ---------> ${L.moneyFormatFrom(100, 'usa', 'bra', 'code')}

moneyFormatFrom(100, 'bra', 'bra', 'name') ---------> ${L.moneyFormatFrom(100, 'bra', 'bra', 'name')}

---------------------------------------------------------------------------------
`);


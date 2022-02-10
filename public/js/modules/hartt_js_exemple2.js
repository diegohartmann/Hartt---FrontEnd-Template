import {table, log, typeOf} from '../harttLib/hartt.js'

export default function hartt_js_exemple2(){
    
    // 'typeOf' function returns a string telling the REAL, ACTUAL type of any data.
    const realType = typeOf(8);
    
    //   'log' is a shorhand function for 'console.log' (there is also a 'table' function, for 'console.table')
    log(realType);

    //'table' is a shorthand function for 'console.table', which is a better way of loggin objects in the console.
    table( {name: 'JS', typed: false} ); 
    table( {name: 'C#', typed: true} ); 

}
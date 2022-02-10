import {appendNode, createNode} from '../harttLib/hartt.js';

export default function hartt_js_exemple1(){

    const myContainer = document.querySelector('body');

    //         CONTAINER   <---- appended to ----  HTML STRING 
    //            |                                   |
    //            V                                   V
    appendNode(myContainer,
        `
            <div class="debug-2 pd-1rem">
                <h1>
                    This node was added to the container directly from it's HTML string parameter with 'appendNode' function
                </h1>
            </div>

            <br>
            <br>
        ` 
    );


    //OR...

    //just get a HTMLDivElement passing its HTML string into the 'createNode' function
    const myCustomNode = createNode(
       `
            <div class="debug-3 pd-1rem">
                <h2>
                    This node was created into 'createNode' function only inserting its HTML string as parameter, but added later to container with simple 'appendChild' function
                </h2>
            </div>
        `
    );
  
    //and append it the traditional way...
    myContainer.appendChild(myCustomNode);
}
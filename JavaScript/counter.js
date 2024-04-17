const content= document.querySelector('#counter');

const increment=()=>{
    let value= parseInt(content.innerText);
    value=value+1;
    content.innerText=value;
};
const decrement= ()=>{
    let value= parseInt(content.innerText);
    value=value-1;
    content.innerText=value;
};
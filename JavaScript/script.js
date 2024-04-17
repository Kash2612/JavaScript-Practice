//  // line below is used to print on the console window
//  console.log("heyyyyy");

// //  create variables
// let a=5;
// let b="kashish"
// console.log(a);
// console.log(b);

// // constant variable
// const c=5;
// c =6;


// object creation
// let rectangle={
//     length:1,
//     breadth: 2,

//     draw: function(){
//         console.log('draw');
//     }
// }; 

// factory function
// function createRectangle(len,bre){
//     return Rectangle={
//         length:len,
//         breadth:bre,
//         draw(){
//             console.log("draw");
//         }

//     }
// }

// let rectangle1=createRectangle(4,5)


// Constructor function
function CRectangle(len,bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function(){
        console.log("drawing");
    }
}

let rectangle2=new CRectangle(7,8);

// Constructor of Rectangle2  is CRectangle
// Constructor of CRectangle is 
let CRectangle= new Function('lenght', 'breadth',
`this.length=len;
this.breadth=bre;
this.draw=function(){
    console.log("drawing");`);


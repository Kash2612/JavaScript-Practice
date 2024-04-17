// https://jsonplaceholder.typicode.com/guide/
// get call

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// // or get call can be

// async function utility(){
//     let content= await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output= await content.json();
//     console.log(output);
// }

// utility()


// POST CALL
async function helper(){
    let options ={
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    };

    let content= await fetch('https://jsonplaceholder.typicode.com/posts', options);

    let response= await content.json();
    console.log(response);
}

// async function utility(){
//     let ans= await helper();
//     console.log(ans);
// }

helper();
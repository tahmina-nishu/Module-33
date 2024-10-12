const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))

    .catch(error => console.log('Error happend', error));       // error pele eta k catch krbe
}


// uporer ta r nicher ta duitai same kaj korbe. porer ta bst...

const loadComments2 = async() => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await res.json();
        console.log(data);
    }
    catch(error){
        console.error('data load error');   // kothaw error khele eta show korbe.
    }
}
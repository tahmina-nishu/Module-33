function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(data => console.log(data))
}

/*

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => console.log(data))
}

*/

// Same kaj ta onnovabe kora jay -->

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => displayUsers(data))
}

function displayUsers(data){
    console.log(data);
}

function loadUsers2(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

function displayUsers2(data){
    console.log(data);

    // prottekta user k alada kore print kora jabe
    for(const user of data){
      console.log(user);
    }

    // prottekta user er name k alada kore print kora jabe
    for(const user of data){
      console.log(user.name);
    }

    // prottekta user er mail k alada kore print kora jabe
    for(const user of data){
      console.log(user.email);
    }
}



// website e show koranor jonno
function displayUsers2(data){
  const ul = document.getElementById('users-list');
  for(const user of data){
    console.log(user.name);
    const li = document.createElement('li');
    li.innerText = user.name;
    ul.appendChild(li);
  }
}

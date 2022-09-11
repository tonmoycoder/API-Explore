/*   const user ={id: 24 , name: 'habib khan' , job: 'accountant'};
// Javascript object notation =json
const stringified = JSON.stringify(user);

console.log(user);
console.log(stringified);

const shop ={
    owner: 'Alia',
    address: {
        street: 'kochukhat vut ar goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopObject = JSON.stringify(shop);
console.log(shopObject);
const shopObject2 = JSON.parse(shopObject);
console.log(shopObject2);  */

/* fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
 */

/* function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}

function userOne(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => console.log(user))
} */


function user2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => userSplitting(data))
}

function userSplitting(data){
    const ol = document.getElementById('user-list');
    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ol.appendChild(li);
    }
}
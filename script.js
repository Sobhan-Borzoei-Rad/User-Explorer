const loadButton = document.querySelector('#loadUsers');
const usersContainer = document.querySelector('#usersContainer');
const statusElement = document.querySelector('#status');

loadButton.addEventListener('click', async function getUsers() {
    try {
        usersContainer.innerHTML = '';
        statusElement.innerHTML = 'Loading users...';

        const respons = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        if (!respons.ok) {
            throw new Error("Failed to fetch users!");
        }

        const users = await respons.json();
        
        statusElement.innerHTML = 'Users loaded successfully!'
        
        console.log(users);

        users.forEach((user) => {

            const nameBox = document.createElement('p');
            nameBox.textContent = user.name;
            nameBox.classList.add('user-name')

            const emailBox = document.createElement('p');
            emailBox.textContent = user.email;

            const addressBox = document.createElement('p');
            addressBox.textContent = user.address.city;

            const websiteBox = document.createElement('p');
            websiteBox.textContent = user.website;

            const phoneBox = document.createElement('p');
            phoneBox.textContent = user.phone;

            const userBox = document.createElement('div');
            userBox.classList.add('user-card');

            userBox.append(nameBox);
            
            userBox.append(emailBox);
            
            userBox.append(addressBox);
            
            userBox.append(websiteBox);
            
            userBox.append(phoneBox);
            
            usersContainer.append(userBox);
        })
    } catch (error) {
        statusElement.innerHTML = 'Failed to load users!'
        console.log(error);
    }
})


const products = ['Lap','Mob','Muse'];

localStorage.setItem('products', JSON.stringify(products));

const savePr = JSON.parse(localStorage.getItem('products'));

savePr.forEach((product)=>{
    console.log(product);
})

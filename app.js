// import functions
import { makeUser } from './common/utils.js';


// get the form from the DOM
const userSignUp = document.getElementById('user-sign-up');

// add an event handler on the submit button that grabs the form data, makes a new user, and puts it into local storage
userSignUp.addEventListener('submit', (event) =>{
    event.preventDefault();
    const formData = new FormData(userSignUp);

    const user = makeUser(formData);

    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);

});



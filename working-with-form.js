/*
<!-- index.html -->
<form>
    <input type="text" id="name" name="name" placeholder="Name">
    <input type="email" id="email" name="email" placeholder="Email">
</form>
*/

// script.js

// create object
function fn(e) {
    // option 1
    const name = e.target.name.value;
    const email = e.target.email.value;
    // option 2
    const name = form.name.value;
    const email = form.email.value;
    // option 3
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    const obj = {
        name: name,
        email: email,
    };
}

// show data in input field
function fn(e) {
    e.preventDefault();
    // option 1
    e.target.name.value = obj.name;
    e.target.email.value = obj.email;
    // option 2
    form.name.value = obj.name;
    form.email.value = obj.email;
    // option 3
    document.getElementById('name').value = obj.name;
    document.getElementById('email').value = obj.email;
}

// update object
function fn(e) {
    e.preventDefault();
    // option 1
    const updateName = e.target.name.value;
    const updateEmail = e.target.email.value;
    // option 2
    const updateName = form.name.value;
    const updateEmail = form.email.value;
    // option 3
    const updateName = document.getElementById('name').value;
    const updateEmail = document.getElementById('email').value;

    const updateObj = {
        name: updateName,
        email: updateEmail,
    };
    obj.name = updateName;
    obj.email = updateEmail;
}

// clear input field after form submission
// option 1
e.target.name.value = '';
e.target.email.value = '';
// option 2
form.name.value = '';
form.email.value = '';
// option 3
document.getElementById('name').value = '';
document.getElementById('email').value = '';

// validating form
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const data = {
    name: name,
    email: email,
};
if (!data.name || !data.email) {
    // ...
}

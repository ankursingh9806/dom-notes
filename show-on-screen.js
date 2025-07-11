/*
<!-- index.html -->
<body>
    <form id="item-form">
        <input type="text" id="item-input" placeholder="Enter new item" required>
        <button type="submit">Add Item</button>
    </form>
    <ul id="item-list">
        <!-- new items will be added here -->
    </ul>
</body>
*/

// script.js
document.getElementById('item-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const itemInput = document.getElementById('item-input').value;
    // create new list item element
    const newItem = document.createElement('li');
    newItem.textContent = itemInput;
    // append new item to list
    const itemList = document.getElementById('item-list');
    itemList.appendChild(newItem);
});

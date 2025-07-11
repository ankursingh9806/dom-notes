/*
<!-- index.html -->
<h1>search filter</h1>
<input type="text" id="search-input" placeholder="search items...">
<ul id="items-list">
    <li class="item">apple</li>
    <li class="item">banana</li>
    <li class="item">cherry</li>
    <li class="item">papaya</li>
    <li class="item">blueberry</li>
    <li class="item">strawberry</li>
    <li class="item">grape</li>
</ul>
*/

/* style.css */
/*
.hidden {
    display: none;
}
*/

// script.js
const searchInput = document.getElementById('search-input');
const items = document.querySelectorAll('#items-list .item');
searchInput.addEventListener('keyup', filterItems);
function filterItems() {
    const searchValue = searchInput.value.toLowerCase();
    items.forEach(function (item) {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchValue)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

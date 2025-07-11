// pass data from one script file (script1.js) to another (script2.js) when navigating between pages (index1.html to index2.html)
// using URL parameters - pass data as query parameter in URL and then retrieve it in script2.js on new page (index2.html)

// script1.js (on index1.html)
// include data as query parameter in link
function navigateToPage(data) {
    window.location.href = `/path/index2.html?data=${encodeURIComponent(data)}`;
}

// script2.js (on index2.html)
// extract query parameter from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
const data = getQueryParam('data');

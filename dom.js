// Examine the Document Object Model (DOM) of a web page

/*
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title = "New title";
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links);
*/

// GetElementById
//console.log(document.getElementById("header-title"));
let headerTitle = document.getElementById("header-title");
headerTitle.textContent = "Hello";
headerTitle.innerText = "Goodbye";
/**
 * textContent is the actual content of the element
 * innerText is the visible content of the element
 * The difference is that textContent will return the content of all child elements and innerText will not
 */





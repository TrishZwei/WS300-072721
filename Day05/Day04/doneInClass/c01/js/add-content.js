//convert to class demo method, eliminating the bad practice of document.write

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

//document.write is a bad practice. You will see it...
//document.write('<h3>' + greeting + '</h3>');

var newEl = document.createElement('h3'); 
newEl.textContent = greeting;
var ref = document.querySelector('h1');

function insertAfter(el, referenceNode){
    //el is the element we want to insert
    //referenceNode is the element we want to have our el insterted into the DOM after

    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);

}    

insertAfter(newEl, ref);

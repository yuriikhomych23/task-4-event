let getId = x => document.getElementById(x);
let getSel = x => document.querySelector(x);

function changeSize() {
    getId('red').style.color = 'red';
    getId('yellow').style.color = 'yellow';
    getId('green').style.color = 'green';
    getId('blue').style.color = 'blue';
    getId('orange').style.color = 'orange';
    getId('grey').style.color = 'grey';
    console.log(this);
}

getSel('.click').onclick = changeSize;

























// getId('red').onclick = function() {
//     getId('red').style.color = 'red'
// }

// getId('green').onclick = function() {
//     getId('green').style.color = 'green'
// }

// getId('yellow').onclick = function() {
//     getId('yellow').style.color = 'yellow'
// }

// getId('blue').onclick = function() {
//     getId('blue').style.color = 'blue'
// }

// getId('orange').onclick = function() {
//     getId('orange').style.color = 'orange'
// }

// getId('grey').onclick = function() {
//     getId('grey').style.color = 'grey'
// }
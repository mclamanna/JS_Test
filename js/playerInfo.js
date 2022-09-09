const myForm = document.getElementById("todo");
const list = document.querySelector(".list-items");
myForm.addEventListener("submit", addTodo);

function addTodo(e) {
  e.preventDefault();
  const userInput = document.querySelector(".userAdd").value;
  const userListItem = document.createElement("li");
  userListItem.appendChild(document.createTextNode(userInput));
  list.appendChild(userListItem);
  const myArray = map(listItems, getText);
  localStorage.setItem('userListItem', JSON.stringify(myArray));
}

const listItems = document.getElementsByTagName('li');


function map(arrayLike, fn) {
    var ret = [], i = -1, len = arrayLike.length;
    while (++i < len) ret[i] = fn(arrayLike[i]);
    return ret;
}

function getText(node) {
    if (node.nodeType === 3) return node.data;
    var txt = '';
    if (node = node.firstChild) do {
        txt += getText(node);
    } while (node = node.nextSibling);
    return txt;
}
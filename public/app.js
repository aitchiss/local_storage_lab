var init = function(){
  var state = JSON.parse(localStorage.getItem('todoList')) || {list1: [], list2: []};
  var list = document.querySelector('#todo-list');
  var button = document.querySelector('button');
  var select = document.querySelector('select');

  button.onclick = handleClick;
  select.onchange = handleChange;

  console.log(list)
  console.log(state)

  populate(list, 'list1', state);
}

var populate = function(list, key, state){
  array = state[key];
  array.forEach(function(listItem){
    addItem(list, listItem);
  })

  //for each item in the state, invoke addItem
}

var addItem = function(list, item){
  var listItem = document.createElement('li');
  listItem.innerText = item;
  list.appendChild(listItem);


  //add an item to the list
}

var handleClick = function(){
  var input = document.querySelector('#new-item');
  var list = document.querySelector('#todo-list');
  addItem(list, input.value);
  save(input.value);
  input.value = '';


  //get the value of the input box
  //get the "todo-list" element from the DOM
  //invoke addItem
  //invoke save
}

var save = function(item){
  var select = document.querySelector('select');
  var selectedList = select.value;

  var state = JSON.parse(localStorage.getItem('todoList')) || {list1: [], list2: []};
  console.log(state)
  console.log(state.selectedList)
  console.log(selectedList)
  state[selectedList].push(item);

  var toSave = JSON.stringify(state);
  localStorage.setItem('todoList', toSave);

  //save the item to localStorage 
  //NOTE You'll have to use JSON.stringify
}

var handleChange = function(){
  var state = JSON.parse(localStorage.getItem('todoList')) || {list1: [], list2: []};
  var list = document.querySelector('#todo-list');
  var listNodes = list.childNodes;
  while(list.hasChildNodes()){
    list.removeChild(list.firstChild);
  }
  populate(list, this.value, state);
}

window.onload = init;

//ADVANCED: create a drop-down of many to-do lists that are stored in localStorage
//HINT: you'll have to use a different data structure (an array of objects maybe?)

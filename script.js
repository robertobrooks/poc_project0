const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let count = 0;
let uncheckedCount = 0;

function newTodo() {
  const todo = $('#todo').val();
  count += 1;

  $('#todo-list').append('<li id="todoCheckBox'+ count +'"><input type="checkbox" class="todoCheckBox" onclick="checkCount(this)" checked>'+ todo +' <button type="button" onclick="deleteTodo(`todoCheckBox'+ count +'`)">Delete</button></li>');
  
  // Set the count in the DOM
  $('#item-count').text(count);
  
  // Clear the input box 
  $('#todo').val('');
}

function checkCount(e){
  if(!e.checked){
    uncheckedCount += 1;
    $('#unchecked-count').text(uncheckedCount);
  } else {
    uncheckedCount -= 1;
    $('#unchecked-count').text(uncheckedCount);
  }
}

function deleteTodo(id){
  $('#'+ id).remove();
}
      let todoList = [];
document.getElementById('button').addEventListener('click', function(event) {
event.preventDefault();
      var list = document.getElementById('myTodo');
list.innerHTML = ''; 
      var todoF = document.getElementById('todoField').value;
todoList.push(todoF);  

    for (var i = 0; i < todoList.length; i++) {
    var liEl = document.createElement("li");
  
    
liEl.appendChild(document.createTextNode(todoList[i]));
list.append(liEl);

    }
})
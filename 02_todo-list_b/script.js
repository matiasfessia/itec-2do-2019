const ul = document.getElementById('list');
const taskName = document.getElementById('task-name');      
const btnAddTask = document.getElementById('btn-add-task');
const btnPickTask = document.getElementById('btn-pick-task');

const addTask = function () {
  if (taskName.value.trim() == '' ) {
    alert('Un valor es necesario');
    return false;
  }
  tasks.push({
    name: taskName.value,
    color: 'red'
  });
  saveInLocalStorage();
  render();
}

const pickTask = function () {
  let random = Math.floor((Math.random() * tasks.length));
  //
  document.querySelector('.message h3').textContent = `selecciono la tarea ${tasks[random]}`;
  document.getElementsByClassName('message')[0].classList.remove('hidden');
  document.getElementsByClassName('overlay')[0].classList.remove('hidden');
  
  tasks.splice(random, 1);
  saveInLocalStorage(tasks);
  render();
  if (tasks.length == 0) {
    btnPickTask.disabled = true;
  }
}

const render = () => {
  ul.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(task.name));
    li.style.color = task.color;
    ul.appendChild(li);
  });
  if (tasks.length > 0) {
    btnPickTask.removeAttribute('disabled');
  }
}

const saveInLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const closePopUp = () => {
  document.getElementsByClassName('message')[0].classList.add('hidden');
  document.getElementsByClassName('overlay')[0].classList.add('hidden');
}

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
render();

btnAddTask.addEventListener('click', addTask);
btnPickTask.addEventListener('click', pickTask);
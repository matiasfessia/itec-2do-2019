const ul = document.getElementById('list');
const taskName = document.getElementById('task-name');      
const btnAddTask = document.getElementById('btn-add-task');
const btnPickTask = document.getElementById('btn-pick-task');
let counter = 0;
let itemsIds = [];

const addTask = function () {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(taskName.value));
  li.setAttribute('id', counter)
  taskName.value = '';
  ul.appendChild(li);
  itemsIds.push(counter);
  counter++;
  console.log(itemsIds);
}


const pickTask = function () {
  let random = Math.floor((Math.random() * itemsIds.length));
  let elem = document.getElementById(itemsIds[random]);

  //
  document.getElementsByClassName('message')[0].classList.remove('hidden');
  document.getElementsByClassName('overlay')[0].classList.remove('hidden');
  
  // alert(`selecciono la tarea ${elem.textContent}`);
  document.querySelector('.message h3').textContent = `selecciono la tarea ${elem.textContent}`;
  elem.remove();
  itemsIds.splice(random, 1);
  counter--;
  //console.log(random);
}

const closePopUp = () => {
  document.getElementsByClassName('message')[0].classList.add('hidden');
  document.getElementsByClassName('overlay')[0].classList.add('hidden');
}

btnAddTask.addEventListener('click', addTask);
btnPickTask.addEventListener('click', pickTask);
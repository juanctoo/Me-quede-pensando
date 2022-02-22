import {saveTask, getTasks, onGetTasks, deleteTask} from './firebase.js';

const taskForm = document.getElementById('formText-container');
const tasksContainer = document.getElementById('Text-container'); 

window.addEventListener ("DOMContentLoaded", async () => {
      onGetTasks((querySnapshot) => {
        let html = "";
        querySnapshot.forEach((doc) => {
          const task = doc.data();
          html += `
                <div id= "newText-container">
                    <h3 id="h3-pre">${task.title}</h3>
                    <p id="p-pre">${task.description}</p>
                    <img id="img-pre" src="${task.img}" style="max-width: 1000px; max-height: 500px;">
                    <p id = "pre-date">${task.date}</p>
                    <button class="btn-delete" data-id="${doc.id}" >Borrar</button>
                </div>
            `
        });
       
        tasksContainer.innerHTML = html;

        const btnsDelete = tasksContainer.querySelectorAll('.btn-delete')
        btnsDelete.forEach(btn => {
            btn.addEventListener ('click', ({target : {dataset }}) => {
                deleteTask(dataset.id);
                
            })
        })
        
      });
});


taskForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const title = taskForm['text-title']
      const description = taskForm['text-text'] 
      const img = taskForm['text-file']  
      const date = taskForm['text-date']
      saveTask(title.value, description.value, img.value, date.value);
      taskForm.reset();
});
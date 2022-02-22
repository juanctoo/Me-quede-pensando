import {saveTask, getTasks, onGetTasks} from './firebase.js';

const blogTaskForm = document.getElementById('blog-Form');
const blogTasksContainer = document.getElementById('blog-container'); 


window.addEventListener ("DOMContentLoaded", async () => {
      onGetTasks((querySnapshot) => {
        let html = "";
        querySnapshot.forEach( (doc) => {
          const task = doc.data();
          html += `
                <div id="blogDiv">
                    <h3 id="h3-blog">${task.title}</h3><br>
                    <p id="p-blog">${task.description}</p>
                    <img id="img-blog" src="${task.img}" style="max-width: 1000px; max-height: 500px;">
                    <p id = "date">${task.date}</p>
                </div>
            `
        });
        blogTasksContainer.innerHTML = html;
      });
});



var app = new Vue({
     el: '#app',
     data: {
          message: 'Hello Vue!',
          tasks : [
          {
               text : "fare la spesa",
               editMode: false,
          },
          {
               text: "studiare",
               editMode: false,
          },
          {
               text: "mangiare",
               editMode: false,
          },
          ],

          newTask:"",
          error: false,
     },

     methods:  {

          removeTask(i){
             this.tasks.splice(i, 1) 
          },

          addTask(){
               
               if(this.newTask.length > 5){
                    this.tasks.push({
                         text : this.newTask,
                         editMode: false,
                    })
                    this.error = false
               }
               else{
                    this.error = true
               }
               this.newTask = ""
          },

          changeTask(i){
               this.tasks[i].editMode = true
          },

          saveChange(i){
               this.tasks[i].editMode = false
          },

     }
     
})




















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

          completedTasks:[],

          trashedTasks:[],

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

          completeTask(i){   
               this.completedTasks.push(this.tasks[i])
               this.tasks.splice(i, 1)
               console.log(this.completedTasks)
               console.log(this.tasks)
          },

          trashTask(i){
               this.trashedTasks.push(this.tasks[i])
               this.tasks.splice(i, 1)
          },

          restoreTaskCompleted(i){
               this.tasks.push(this.completedTasks[i])
               this.completedTasks.splice(i, 1)
          },

          restoreTaskTrashed(i){
               this.tasks.push(this.trashedTasks[i])
               this.trashedTasks.splice(i, 1)
          },

          deleteTrash(){
               this.trashedTasks = []
          },

     }
     
})



















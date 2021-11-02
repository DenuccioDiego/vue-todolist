var app = new Vue({
     el: '#app',
     data: {
          message: 'Hello Vue!',
          tasks : [
               "fare la spesa",
               "studiare",
               "mangiare",
          ],
          newTask:"",

     },
     methods:  {

          removeTask(){
               
          },

          addTask(){
               console.log("aggiungo")
               this.tasks.push(this.newTask)
          }

     }
     
})
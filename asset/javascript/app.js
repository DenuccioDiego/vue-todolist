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

          removeTask(i){
             console.log("cliccato rimuovi"),
             this.tasks.splice(i, 1) 
          },

          addTask(){
               console.log("aggiungo")
               this.tasks.push(this.newTask)
          }

     }
     
})





















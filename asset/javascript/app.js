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
          error: false,
     },
     methods:  {

          

          

          removeTask(i){
             console.log("cliccato rimuovi"),
             this.tasks.splice(i, 1) 
          },

          addTask(){
               
               if(this.newTask.length > 5){
                    this.tasks.push(this.newTask)
                    this.error = false
                   console.log(this.tasks)
               }
               else{
                    this.error = true
               }
               
          }

     }
     
})





















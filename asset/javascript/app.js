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
          mostra: false,
          nascondi: true,
     },

     methods:  {


          removeTask(i){
             //console.log("cliccato rimuovi"),
             this.tasks.splice(i, 1) 
          },

          addTask(){
               
               if(this.newTask.length > 5){
                    this.tasks.push(this.newTask)
                    this.error = false
                    //console.log(this.tasks)
               }
               else{
                    this.error = true
               }
               this.newTask = ""
          },

          changeTask(i){
               //console.log(this.tasks[i])
               if(this.mostra = true ){
                    this.nascondi = false
                    this.mostra = true 
                    console.log(this.mostra)
               }
               else if(this.nascondi = false){
                    this.nascondi = true
                    this.mostra = false
                    console.log(this.nascondi)
               }
               
          }
     }
     
})





















const data = require('../../data.json');
const path = require('path');
const fs = require('fs');

class CommandController {
  
    constructor() {
    
    }

     saveTasks(){
        const dataFilePath = path.join(__dirname, "../../data.json");
        const fileContent = `${JSON.stringify(data,null,2)}`;
        fs.writeFileSync(dataFilePath, fileContent, "utf8");
     }

    async createTask(req, res) {
        const {title, description, dueDate,completed} = req.body;
        if(!title || !description || !dueDate || !completed) {
            return res.status(400).json({error: 'Argumentos não encontrados.'});
        }
      data.count = data.count + 1;
      const newTask={
        id: data.count,
        title,
        description,
        dueDate,
        completed
      }
      data.tasks.push(newTask)
      console.log(data)
      this.saveTasks();
      return res.status(201).json(data.tasks)
    }
    async updateTask(req, res) {
        const id = parseInt(req.params.id);
        const {title, description, dueDate, completed} = req.body;

        if(!title || !description || !dueDate || completed === undefined) {
            return res.status(400).json({error: 'Argumentos não encontrados.'});
        }

        const selectedTask = data.tasks.findIndex((t) => t.id === id);
        if(selectedTask === -1) {
            return res.status(404).json({error: 'Tarefa não encontrada.'});
        }

        data.tasks[selectedTask] = {id, title, description, dueDate, completed};
        this.saveTasks();
        return res.status(200).json(data.tasks[selectedTask])
    }

    async deleteTask(req, res) {
        const id = parseInt(req.params.id);
        const selectedTask = data.tasks.findIndex((t)=>t.id === id);
       if(selectedTask === -1) {
        res.status(404).json({error: 'Tarefa não encontrada.'});
       }
       data.tasks.splice(selectedTask, 1);
       this.saveTasks();
       return res.status(204).json()
    }
}

module.exports = ()=> new CommandController()

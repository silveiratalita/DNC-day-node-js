
const data = require('../../data.json');

class QueryController {
  constructor() {
    
  }

  async getAllTasks(req, res) {
    return res.status(200).json(data.tasks)
  }

  async getTaskById (req, res) {
    const id = parseInt(req.params.id);

    const selectedTask = data.tasks.findIndex((t) => t.id === id);
    if(selectedTask === -1) {
      return res.status(404).json({error: 'Tarefa não encontrada.'});
    }
    return res.status(200).json(data.tasks[selectedTask])
    
  }
}

module.exports = ()=> new QueryController()
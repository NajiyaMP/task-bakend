const express = require('express');
const {
  getTasks,
  createTask,
  updateTaskStatus,
  updateTaskDescription,
  deleteTask,
} = require('../controllers/taskController');

const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
router.patch('/:id/status', updateTaskStatus);
router.put('/:id/description', updateTaskDescription);
router.delete('/:id', deleteTask);

module.exports = router;

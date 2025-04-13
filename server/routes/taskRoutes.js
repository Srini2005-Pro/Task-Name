const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Route to get all tasks
router.get('/', taskController.getAllTasks);

// Route to add a new task
router.post('/', taskController.addTask);

// Route to edit an existing task
router.put('/:id', taskController.editTask);

// Route to delete a task
router.delete('/:id', taskController.deleteTask);

// Route to mark a task as completed
router.patch('/:id/complete', taskController.markAsCompleted);

// Route to mark a task as incomplete
router.patch('/:id/incomplete', taskController.markAsIncomplete);

// Route to search tasks by title or description
router.get('/search', taskController.searchTasks);

// Route to filter tasks by category
router.get('/category/:category', taskController.filterTasksByCategory);

module.exports = router;
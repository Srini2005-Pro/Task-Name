const Task = require('../models/Task');

// Add a new task
exports.addTask = async (req, res) => {
    const { title, description, dueDate, category } = req.body;
    try {
        const newTask = new Task({ title, description, dueDate, category });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Error adding task', error });
    }
};
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ dueDate: 1 });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
};

// Edit an existing task
exports.editTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, dueDate, category } = req.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, { title, description, dueDate, category }, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: 'Error editing task', error });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
};

// Mark task as completed
exports.markAsCompleted = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        task.completed = !task.completed;
        await task.save();
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error toggling task completion', error });
    }
};

// Search tasks by title or description
exports.searchTasks = async (req, res) => {
    const { query } = req.query;
    try {
        const tasks = await Task.find({
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } }
            ]
        });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error searching tasks', error });
    }
};

// Filter tasks by category
exports.filterTasksByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const tasks = await Task.find({ category });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error filtering tasks', error });
    }
};

exports.markAsIncomplete = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        task.completed = false;
        await task.save();
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error marking task as incomplete', error });
    }
};
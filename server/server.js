const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const dbConfig = require('./config/db');

const app = express();
const PORT = 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


dbConfig();


app.use('/api/tasks', taskRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
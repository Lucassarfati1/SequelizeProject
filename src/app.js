const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json()); // Agrega esto para poder parsear JSON

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use(userRoutes);

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


// Middleware para parsear el cuerpo de las peticiones en formato JSON
app.use(bodyParser.json());

// Array para almacenar los alumnos
let alumnos = [
  { id: 1, nombre: 'Juan', matricula: '12345' },
  { id: 2, nombre: 'María', matricula: '54321' }
];

// GET para obtener la lista de alumnos
app.get('/alumnos', (req, res) => {
  res.json(alumnos);
});

// POST para crear un nuevo alumno
app.post('/alumnos', (req, res) => {
  const nuevoAlumno = req.body;
  alumnos.push(nuevoAlumno);
  res.status(201).json(nuevoAlumno);
});

// PUT para editar un alumno existente
app.put('/alumnos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, matricula } = req.body;

  alumnos = alumnos.map(alumno => {
    if (alumno.id === id) {
      alumno.nombre = nombre;
      alumno.matricula = matricula;
    }
    return alumno;
  });

  res.status(200).json(alumnos.find(alumno => alumno.id === id));
});

// DELETE para eliminar un alumno
app.delete('/alumnos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  alumnos = alumnos.filter(alumno => alumno.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`La aplicación está corriendo en http://localhost:${port}`);
});

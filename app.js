const express = require ('express'); //Requiero el modulo
const app = express (); //Invoco la funcion
const port = 3030; //Me conviene crear el puerto en una constante. 
const path = require ('path'); // Requiero modulo nativo para crear rutas y utilizar SendFile.
app.use(express.static('public'));

//LEVANTO EL SERVIDOR EN EL PUERTO 3030
app.listen(port,() => {
    console.log ('Servidor corriendo en puerto 3030')
});

app.get('/', (req,res) =>  res.sendFile (path.join (__dirname, 'views', 'index.html')));
app.get('/babbage', (req,res) =>  res.sendFile (path.join (__dirname, 'views', 'babbage.html')));
app.get('/berners-lee', (req,res) =>  res.sendFile (path.join (__dirname, 'views', 'berners-lee.html')));
app.get('/clarke', (req,res) =>  res.sendFile (path.join (__dirname, 'views', 'clarke.html')));
app.get('/hamilton', (req,res) =>  res.sendFile (path.join (__dirname, 'views', 'hamilton.html')));
app.get('/hopper', (req,res) =>  res.sendFile (path.join (__dirname, 'views', 'hopper.html')));
app.get('/lovelace', (req,res) =>  res.sendFile (path.join (__dirname, 'views', 'lovelace.html')));
app.get('/turing', (req,res) =>  res.sendFile (path.join (__dirname, 'views', 'turing.html')));




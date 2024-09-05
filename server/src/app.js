const express = require('express');
const path = require('path');
const {port} = require('./keys');

const app = express();
app.use(express.json()); // permite leer datos que enviemos al cliente en formato json

// seteamos el motor de plantilla
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//seteamo la carpeta public para archivos estaticos
app.use(express.static(path.join(__dirname, '/public')));

// Configuraciones
app.set('port', port);

// Importar y usar las rutas
app.use('/', require('./routes/index.routes'));
// app.use('/', require('./routes/index.auth'));
app.use('/', require('./routes/index.panelAdmin'));

app.listen(app.get('port'), () => {
    console.log("------------------");
    console.log("=> ✅ Servidor corriendo en http://localhost:" + app.get('port'));
});
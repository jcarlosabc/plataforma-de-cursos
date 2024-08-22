const express = require('express');
const {port} = require('./keys');

const app = express();
app.use(express.json()); // permite leer datos que enviemos al cliente en formato json

// Configuraciones
app.set('port', port);

// Importar y usar las rutas
app.use('/', require('./routes/index.routes'));

app.listen(app.get('port'), () => {
    console.log("------------------");
    console.log("=> ✅ Servidor corriendo en http://localhost:" + app.get('port'));
    
});
const express = require('express');
const routers = require('./routers');
const app = express();
const port = 3000;

// app.use(handleError)
// app.use(log)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// penempatan mempengaruhi
app.use(routers)
app.listen(port, () => console.log(`server running at http://localhost:${port}`));
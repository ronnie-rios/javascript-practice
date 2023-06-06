const express = require('express') //look into my node_modules and use express


const app = express();
const port = 9001
app.listen(()=> console.log(`server is running on ${port}`))
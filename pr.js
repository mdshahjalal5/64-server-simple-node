const express = require('express')
const app = express();
const cors = require('cors')
app.use(cors());

app.get('/',(_req, res)=>{
    res.send('node js serever')
})
app.listen(6000,()=>{
    console.log('server is running on port 6000');
})
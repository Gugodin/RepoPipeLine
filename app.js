var express = require('express');
var app = express();
const port = process.env.PORT || 3000

const files = require("./routes/files")


app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.get('/',(req,res)=>{
  res.send({respuesta:'all ok'})
})

app.get('/prueba',(req,res)=>{
  res.send({respuesta:'Soy la prueba'})
})



app.listen(port, function () {
  console.log(`funcinando en el puerto ${port}`)
});
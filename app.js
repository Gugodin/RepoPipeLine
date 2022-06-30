var express = require('express');
var app = express();
const port = 3000


app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.get('/',(req,res)=>{
  res.send({respuesta:'all ok prueba de Cristian'})
})

app.get('/prueba',(req,res)=>{
  res.send({respuesta:'Soy la prueba'})
})



app.listen(port, function () {
  console.log(`funcinando en el puerto ${port}`)
});
var http = require('http'),
    app = require('express')();

http.Server(app);


app.use("/",function(req,res){
    console.log("Funciona!!");    
    res.send("Mi primer servidor en Node.js con express: "+ new Date());
})

var port = 3000;
app.listen(port,function(){
    console.log("Servidor funcionando en puerto ",port);
});


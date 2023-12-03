import express from "express";
import UserRouter from "./routes/UserRoutes";

const  app = express();

app.use(express.json());
app.use(UserRouter);

const port = 3000;

app.get('/', function (req,res){
    res.send('tudo ok');
});

app.listen(port, function(){
    console.log('Server rodando na porta ' + port);
});
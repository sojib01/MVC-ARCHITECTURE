const express= require('express');
const app = express();
const port =3000;

app.listen(port , ()=>{
    console.log(`server is running at http://localhost:${port}`)
});
//server end

const userRouter = require('./routes/users.route')




//use start
app.use(express.urlencoded({extended : true}));
app.use(userRouter);
//use end



app.use((req,res,next)=>{
 res.status(404).json({
    message:"resource not found"
 })
});
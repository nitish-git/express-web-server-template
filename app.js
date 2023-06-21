const express = require('express');
const app = express();
const {userRouter} = require('./routes/user');

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('./public'));
app.use('/api/v1/users',userRouter);


app.listen(5000, ()=>{console.log('server started listening at port 5000')});
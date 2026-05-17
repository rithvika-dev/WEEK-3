import exp from 'express';
import {connect} from 'mongoose'
// import {userApp} from "./API/userApi.js";
import {productApp} from"./API/productApi.js";
import cookieParser from 'cookie-parser';
const app=exp();
//add body parser
app.use(exp.json())
//forward req to userApp if path starts  with /user-api
//connect to db server
app.use(cookieParser())

// app.use('/user-api',userApp);
app.use('/product-api',productApp);
async function connectDB()
{try{
    await connect("mongodb://localhost:27017/anuragdb")
    console.log("db connection success")
    app.listen(4000,()=>console.log("server on port 4000...."))
}catch(err)
{
    console.log("err in db connection:",err);
}
}
connectDB();
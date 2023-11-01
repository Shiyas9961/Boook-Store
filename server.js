import express from "express"
import { PORT,mongoDBUrl } from "./config.js"
import mongoose from "mongoose"
import bookRouter from "./routes/bookRoute.js"
import cors from "cors"

const app = express()

app.use(express.json())

//In this the link can access all third party link
app.use(cors())

/* app.use(cors({
    origin : 'http://localhost:3000/',
    methods : ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders : ['Content-Type']
})) */

app.get('/',(req,res)=>{
    res.status(200).send("Hi ...Guysss")
})

app.use('/book',bookRouter)

mongoose.connect(mongoDBUrl).then(()=>{
    console.log('App connected to data base')
    app.listen(PORT,()=>console.log(`Server running at port no. ${PORT}`))
}).catch(err=>console.log(err.message))
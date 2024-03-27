//                         imports
// --------------------------------------------------------------//
import express,{Express,Request,Response,Router} from 'express'

import cors from 'cors'

import jwt from 'jsonwebtoken'

import admin_routers from '../routes/admin_routes'

import user_routes from '../routes/user_routes'

import {connectDB} from '../db/blog_db'

import blog_model from '../model/blog_model'
const app:Express= express()



//                      routes middleware
// --------------------------------------------------------------//

app.use(cors({origin:"*"}))

app.use('/', async(req: Request, res:Response)=>
{
    try{

        const blog=await blog_model.find({})
        res.status(200).json({blog})
    }
    catch(error){
        res.status(404).json({msg:error})
    };
})
app.use('/api/v1/admin', admin_routers)

app.use('/api/v1/login',user_routes)

app.use(express.json())

// app.use(morgan('dev'))

// *******************************
//   get :   /api/v1/admin       *
//   post:   /api/v1/admin       * 
//   patch   /api/v1/admin       *
//   delete  /api/v1/admin       *
// *******************************

//                      start server
// --------------------------------------------------------------//


const PORT= process.env.PORT || 3000
const start = async function()
{
    try{
        await connectDB()
        console.log('connected to Mongo Database')
        app.listen(PORT, ():void=>{console.log(`listening on port ${PORT}`)})

    }
    catch(error)
    {
       console.log(`---------Fail to listen on port ${PORT}`)
    }
}

start()


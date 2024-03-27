//                         imports
// --------------------------------------------------------------//
import express,{Express,Request,Response,Router} from 'express'

import cors from 'cors'

import jwt from 'jsonwebtoken'

import admin_routers from '../routes/admin_routes'

import user_routes from '../routes/user_routes'

import {connectDB} from '../db/blog_db'


export const app:Express= express()

//                      swagger 
// --------------------------------------------------------------//
import swaggerUi from 'swagger-ui-express'

import swaggerSpec from './swagger'


//                      routes middleware
// --------------------------------------------------------------//

app.use(cors({origin:"*"}))

app.use('/api/v1/admin', admin_routers)

app.use('/api/v1/login',user_routes)

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec) );


// app.use(morgan('dev'))

// *******************************
//   get :   /api/v1/admin       *
//   post:   /api/v1/admin       * 
//   patch   /api/v1/admin       *
//   delete  /api/v1/admin       *
// *******************************

//                      start server
// --------------------------------------------------------------//


const PORT:number=3000
const start = async function()
{
    try{
        await connectDB()
        app.listen(PORT, ():void=>{console.log(`listening on port ${PORT}`)})

    }
    catch(error)
    {
       console.log(`---------Fail to listen on port ${PORT}`)
    }
}

start()


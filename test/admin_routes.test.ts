import supertest from 'supertest'
import app from '../src/app'
import test, { describe } from 'node:test'
import blog_model from '../model/blog_model'
import contact_model from '../model/contact_model'
import mongoose from 'mongoose'
import { error } from 'node:console'

const request=supertest(app)


// testing blog api


describe('testing api for blog',()=>{
    const blog_id= '65f7ed5a95711795ce23dff3'
    // testing get all blog api
    test('get all blog API',async()=>{
        const exist_blog= await contact_model.findOne({})

        if(!exist_blog)
        {
            throw new Error('Blog does not exist')
        }

        const response= await request.get('/api/v1/admin/contact')

        expect(response.statusCode).toBe(200)
    })

    // get single blog ipi
    test('get single blog by id', async()=>{
       
        const blog_exist= await blog_model.findOne({_id:blog_id})
        if(!blog_exist)
        {
            throw new Error('The blog does not exist')
        }

        const response= await request.get(`/api/v1/admin/blog/${blog_id}`)

        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveProperty('title', 'Pthython')
    })

    // delete blog api

    test('find blog and delete it', async()=>{
        
        const blog_exist= await blog_model.findOne({_id:blog_id})
        if(!blog_exist)
        {
            throw new Error('the blog does nor exist')
        }
        const response= await request.delete(`/api/v1/admin/blog/${blog_id}`)
        expect(response.statusCode).toBe(200)
    })
})

describe('testing contact message api',()=>
{
   const user_id='65f8536219e71ef845248402'
    test('get all contact message API',async()=>{
        const exist_user= await blog_model.findOne({})

        if(!exist_user)
        {
            throw new Error('no blog exist')
        }

        const response= await request.get('/api/v1/admin/user')

        expect(response.statusCode).toBe(200)
    })
})

 



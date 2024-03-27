import supertest from "supertest";

import user_model from "../model/user_model";

import {app} from '../src/app';

import mongoose from "mongoose";

import { error } from "console";


const request=supertest(app)

describe('testing the user api',()=>{
    test('get all user', async()=>{
        const user_exist= await user_model.findOne({})
        if(!user_exist)
        {
            throw error('user does not exist')
        }

        const response= await request.get('/api/v1/admin/user')
        expect(response.statusCode).toBe(200)
    })
})


import { error } from 'console'
import {connectDB} from '../db/blog_db'

test('connected seccessfull', async()=>
{
    expect(connectDB).toBeDefined()
})
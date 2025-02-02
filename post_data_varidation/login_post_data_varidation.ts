
import joi from 'joi'
import { time } from 'node:console'

const login_data_varidation=function(login_data:{email:string, password:string})
{
    const login_data_schrema=joi.object({
        email:joi.string().email().required(),
        password:joi.string().min(5).max(15).required(),
    })

    return login_data_schrema.validate(login_data)
}

const signUp_data_varidation=function(signup_data:{email:string, username:string,password:string, time:string})
{
    const signup_data_schrema=joi.object({
        email:joi.string().email().required(),
        username:joi.string().min(5).required(),
        password:joi.string().min(5).max(15).required(),
        time:joi.any()
    })
    
    return signup_data_schrema.validate(signup_data)
}

export {login_data_varidation, signUp_data_varidation}
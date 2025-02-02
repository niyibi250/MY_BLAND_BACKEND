//---------------------------------imports--------------------------------------//
//------------------------------------------------------------------------------//

import express,{ Response,Request } from "express";

import jwt from 'jsonwebtoken'

import user_model from '../model/user_model'

import {login_data_varidation, signUp_data_varidation} from '../post_data_varidation/login_post_data_varidation'


//----------------------------verfie if user exist-------------------------------------//
//------------------------------------------------------------------------------------//

const verf_user= async function(req:Request, res:Response)
{
   try{
        const {email, password}= req.body
        
        const valide=login_data_varidation(req.body)
        
        if(valide.error)
        {
            return res.status(404).json({msg:'JOI varidation did not go through', valide})
        }

        const user= await user_model.findOne({email:email, password:password})
        
        if(!user)
        {
            return res.json({msg:'user not found',user})
        }
        
        const token=jwt.sign({user_id:user._id, username:user.username, email:user.email},'eric1234')
        
        return res.status(200).json({token, user})
        
    }
    catch(error){
        res.status(404).json({msg:'Did not go through',error})
    }
}

//-----------------------------------create new user-------------------------------//
//---------------------------------------------------------------------------------//

const create_user= async function(req:Request, res:Response)
{
   try{
        const varide= signUp_data_varidation(req.body)

        if(varide.error)
        {
            return res.status(404).json({msg:'provided data is incorrect', varide})
        }
       const {email, password}=req.body

       const user_exist= await user_model.findOne({email:email, password:password}) 

       if(user_exist)
       {
        return res.json({msg:'user exist pls login', user_exist})
       }

       const user= await user_model.create(req.body)

       const token= jwt.sign({user_id:user._id, username:user.username, email:user.email},'eric1234')

       res.status(200).json({token,user})
   }
   catch(error)
   {
    res.status(404).json({msg:"message user not created"})
   }
}


//----------export controller----------------------------//

export {verf_user,create_user}  

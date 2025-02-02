
import { Request,Response } from "express";

import user_model from "../model/user_model";

import {update_user_data_varidation} from '../post_data_varidation/admin_post_data_varidation'

// get all user-----------------------------------------------------------
const getall_user= async function(req:Request, res:Response)
{
   try{
        const user= await user_model.find({})
        res.status(200).json({user})
   }
   catch(error)
   {
    res.status(404).json({error})
   }
}

// get single user ---------------------------------------------

const get_single_user= async function(req:Request, res:Response)
{
   try{
        const {id:user_id}= req.params
        const user= await user_model.findOne({_id:user_id})
        if(!user)
        {
         res.status(404).json({msg:'user not found'})
        }
        res.status(200).json({user})
   }
   catch(error)
   {
    res.status(404).json({msg:'the sarch did not go through', error})
   }
}
// get update user -----------------------------------------

const update_user= async function(req:Request, res:Response)
{
   try{
      const {user_data}=req.body
      const varidate=update_user_data_varidation(user_data)
      if(varidate.error)
      {
         return res.status(404).json({msg:'the varidation did not go throught', varidate})
      } 
       
       const {id:user_id}= req.params
        const user= await user_model.findOneAndUpdate({_id:user_id},req.body.user_data,{new:true})
        res.status(200).json({user})
   }
   catch(error)
   {
    res.status(404).json({msg:'the update did not go throuhth on server',error})
   }
}

// delete user -----------------------------------------

const delete_user= async function(req:Request, res:Response)
{
   try{
        const {id:user_id}= req.params
        const user= await user_model.findOneAndDelete({_id:user_id})
        res.status(200).json({user})
   }
   catch(error)
   {
    res.status(404).json({error})
   }
}

export {getall_user,get_single_user, update_user, delete_user}
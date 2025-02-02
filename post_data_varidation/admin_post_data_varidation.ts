
import joi from 'joi'

const sent_massage_data_varidation=function(message_data:{email:string, username:string, massage:string})
{
    const sent_message_schrema= joi.object({
        email:joi.string().email().required(),
        username:joi.string().min(5).required(),
        message:joi.string().min(10).required(),
        time:joi.any()
    })

    return sent_message_schrema.validate(message_data)
}

const update_user_data_varidation=function(user_update:{username?:string, email?:string,password?:string,time:string})
{
    const user_update_data_schrema=joi.object({
        username:joi.string().min(3),
        email:joi.string().email(),
        password:joi.string().min(5),
        time:joi.any()
    })

    return user_update_data_schrema.validate(user_update)
}

const update_blog_data_varidation=function(blog_update_data:{title?:string, photo?:string, content?:string})
{
    const blog_update_data_schrema=joi.object({
        title:joi.string().min(3),
        categorly:joi.string().min(3),
        photo:joi.any(),
        content:joi.string().min(5),
        time:joi.any()
    })

    return blog_update_data_schrema.validate(blog_update_data)
}

const create_blog_data_varidation=function(blog_create_data:{title:string,categarly:string ,photo:string, content:any, time:any})
{
    const blog_update_data_schrema=joi.object({
        title:joi.string().min(3),
        categorly:joi.string().min(3),
        photo:joi.any(),
        content:joi.any(),
        time:joi.any()
    })

    return blog_update_data_schrema.validate(blog_create_data)
}


export {sent_massage_data_varidation,update_user_data_varidation,update_blog_data_varidation,create_blog_data_varidation}
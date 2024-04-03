//                  imports
// --------------------------------------------------------------//

import express,{Router} from 'express'

const router:Router= express.Router()


import {getall_blog,create_blog,update_blog,get_single_blog,delete_blog} from '../controller/admin_blog_controller'

import {getall_contact,create_contact, get_single_contact, delete_contact} from '../controller/admin_contact_controller'

import {getall_user, get_single_user, update_user, delete_user} from '../controller/admin_user_controller'

// import verfy_token from '../verify_token/verify_token'

//                middleware
// -----------------------------------------------------------//
router.use(express.json())

// routes for blogs
//------------------------------------------------------------------------//

/**
 * @swagger
 * /api/v1/admin/blog:
 *   get:
 *     summary: Retrieve all blogs
 *     description: Retrieve a list of all blogs.
 *     tags:
 *       - Blogs
 *     responses:
 *       200:
 *         description: A list of blogs.
 *   post:
 *     summary: Create a new blog
 *     description: Create a new blog.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the blog.
 *               Photo:
 *                 type: string
 *                 description: the photo of blog.
 *               content:
 *                 type: string
 *                 description: The content of the blog.
 *     tags:
 *       - Blogs
 *     responses:
 *       201:
 *         description: Blog created successfully.
 */
router.route('/blog').get(getall_blog).post(create_blog);

/**
 * @swagger
 * /api/v1/admin/blog/{id}:
 *   get:
 *     summary: Retrieve single blog
 *     description: Retrieve a single blog for given _id.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the blog to retrieve.
 *         required: true
 *         schema:
 *           type: string
 *     tags:
 *       - Blogs
 *     responses:
 *       200:
 *         description: A single of blog is Retrieved successfull.
 * 
 *   patch:
 *     summary: update the blog
 *     description: update a blog.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the blog to retrieve.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the blog.
 *               Photo:
 *                 type: string
 *                 description: the photo of blog.
 *               content:
 *                 type: string
 *                 description: the content of blog
 *     tags:
 *       - Blogs 
 *     responses:
 *       200:
 *         description: Blog updated successfully.
 *   
 *   delete:
 *     summary: delete the blog
 *     description: delete a blog.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the blog to retrieve.
 *         required: true
 *         schema:
 *           type: string 
 *     tags:
 *       - Blogs
 *     responses:
 *       200:
 *         description: Blog deleted successfully.
 */
router.route('/blog/:id').get(get_single_blog).patch(update_blog).delete(delete_blog)

// contact routes
// --------------------------------------------------------------------------//

//routes for the contact
/**
 * @swagger
 * /api/v1/admin/contact:
 *   get:
 *     summary: Retrieve all contacts
 *     description: Retrieve a list of all contacts.
 *     tags:
 *       - contact message
 *     responses:
 *       200:
 *         description: A list of contacts.
 *   post:
 *     summary: Create a new contact
 *     description: Create a new contact.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user email.
 *               username:
 *                 type: string
 *                 description: the username of user.
 *               message:
 *                 type: string
 *                 description: the content of message 
 *     tags:
 *       - contact message
 *     responses:
 *       201:
 *         description: contact created successfully.
 */
router.route('/contact').get(getall_contact).post(create_contact)

//routes for the contact

/**
 * @swagger
 * /api/v1/admin/contact/{id}:
 *   get:
 *     summary: Retrieve single contact
 *     description: Retrieve a single contact for given _id.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the message to retrieve.
 *         required: true
 *         schema:
 *           type: string
 *     tags:
 *       - contact message
 *     responses:
 *       200:
 *         description: A single of contact is Retrieved successfull.
 *   
 *   delete:
 *     summary: delete the contact
 *     description: delete a contact.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the message to delete.
 *         required: true
 *         schema:
 *           type: string
 *     tags:
 *       - contact message
 *     responses:
 *       200:
 *         description: contact deleted successfully.
 */
router.route('/contact/:id').get(get_single_contact).delete(delete_contact)

// routes for User
// ----------------------------------------------------------------------------------//

/**
 * @swagger
 * /api/v1/admin/user:
 *   get:
 *     summary: Retrieve all users
 *     description: Retrieve a list of all users.
 *     tags:
 *       - users
 *     responses:
 *       200:
 *         description: A list of all users.
 */
router.route('/user').get(getall_user)


/**
 * @swagger
 * /api/v1/admin/user/{id}:
 *   get:
 *     summary: Retrieve single user
 *     description: Retrieve a single user for given _id.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the user to get.
 *         required: true
 *         schema:
 *           type: string
 *     tags:
 *       - users
 *     responses:
 *       200:
 *         description: A single of user is Retrieved successfull.
 * 
 *   patch:
 *     summary: update the user
 *     description: update a user.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the user to update.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user email.
 *               username:
 *                 type: string
 *                 description: the user username.
 *               password:
 *                 type: string
 *                 description: the user password
 *     tags:
 *       - users
 *     responses:
 *       200:
 *         description: user updated successfully.
 *   
 *   delete:
 *     summary: delete the user
 *     description: delete a user.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the user to delete.
 *         required: true
 *         schema:
 *           type: string
 *     tags:
 *       - users
 *     responses:
 *       200:
 *         description: user deleted successfully.
 */
router.route('/user/:id').get(get_single_user).delete(delete_user).patch(update_user)
// export routes---------------------------------------------//

export default router 
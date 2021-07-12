const express = require('express')
const router = new express.Router()
const User = require('../database/models/user.model')

router.post('/user/register', async (req,res)=>{
    try{
        const userData = new User(req.body)
        /*
        new User({
"name":"marwa",
"email":"marwa@test.com",
"password":"123456",
"x":"7"
})
        */
        await userData.save()
        res.send('done')
    }
    catch(e){
res.send(e)
    }
})

router.get('/user/all', async(req,res)=>{
    try{
const data =await User.find()
res.send(data)
    }
    catch(e){
res.send(e)
    }
})
module.exports=router
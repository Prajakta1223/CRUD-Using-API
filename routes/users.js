var express = require('express');
var router = express.Router();

const userController=require('../controller/UserController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//CRUD
router.post('/addUser',userController.addUser);//Post the data
router.get('/display',userController.display);//Read all Data
router.get('/oneUserRecord/:postId',userController.oneUserRecord);//show only one user
router.delete('/delete/:postId',userController.delete);//Delete the Data
router.patch('/update/:postId',userController.update);//Update the data

module.exports = router;

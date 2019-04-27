//require express
var express = require('express');

//instance of app
var myapp = express();
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');

myapp.use(bodyParser.urlencoded({extended:true}))
myapp.use(bodyParser.json());
myapp.use(express.static(
	path.join(__dirname,'resources')
	));

myapp.set('views',__dirname+'/views');
myapp.set('view engine','ejs');

 var upload = multer(
 {
 	dest : 'resources/uploads/'
 }
 	)

var mystorage = multer.diskStorage({
	destination : function(req,file,cb){
		cb(null,'resources/uploads')
	},
	filename : function(req,file,cb){
		cb(null,'asdfasd')
	}
})
var upload = multer({storage: mystorage})


myapp.get('/admin/login',function(req,res){
	res.render('backend/login',{message:''});
})

myapp.get('/admin/registration',function(req,res){
	res.render('backend/registration');
})




// console.log(process.env.PORT);
 myapp.get('/admin/login',function(req,res)
 {
 	res.render('backend/login',{message:''});
 })
 myapp.post('/admin/postlogin',function(req,res)
 {
 	// console.log(req.body)	

 	console.log(req.body.username);
 	console.log(req.body.password);
 	if(req.body.username =='' && req.body.password =='')
 	{
 		res.render('backend/login',{message:'u/p cannot be empty'})
 	}
 })

myapp.post('/admin/registration',upload.single('usrphoto'),function(req,res,next){
	console.log('test');
	console.log(req.file);
})



  myapp.get('/admin/registration',function(req,res)
 {
 	res.render('backend/registration',{message:''});
 	res.send({"test": "sdadf"})
 })
  myapp.post('/admin/postregistration',function(req,res)
 {
 	console.log(req.body)
 })

  myapp.get('/initial',function(req,res)
 {
 	res.jason({
 		"hotelname" : "test",
 		"location"  : "kathmandu"
 	})
 })
 myapp.listen(process.env.PORT);
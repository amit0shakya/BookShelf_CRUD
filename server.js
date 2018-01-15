var express = require('express');
var app = express();
var config=require('./knexfile');
var knex = require('knex')(config)
var bookshelf = require('bookshelf')(knex);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var users = bookshelf.Model.extend({
	tableName: 'userinfo'
});

app.get('/users',function(req,res){
	knex.select()
	.table('userinfo')
	.then(function(users){
		res.send(users)
	})
})

app.get('/bookshelf/users',function(req,res){
	users.fetchAll()
	.then(function(users){
		res.send(users.toJSON())
	})
})

app.post('/bookshelf/user',function(req,res){

	console.log('post req',req.body)

	users.forge({
	name:'amit1',
	email:'1amit0shakya@gmail.com'
	})
	.save()
	.then(function(user){
	res.json({error:false,data:user})
	})
	.catch(function(err){
	res.status(500).json({error:true,data,err})
	})
})

app.listen(3000,function(){
	console.log('server running port '+3000)
})
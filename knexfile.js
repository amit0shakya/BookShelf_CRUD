module.exports={
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'knexdb'
	  },
	  migrations:{
	  	directory: __dirname+"/db/migrations"
	  },
	  seeds:{
	  	directory: __dirname+"/db/seeds"
	  }
}
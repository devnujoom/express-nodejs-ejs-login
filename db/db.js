var mysql= require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'my_db'
});

// establish connection
connection.connect(function(error){
  if (!!error) {

    console.log(error);
  }
  else {

    console.log('DB connected')

}
});

module.exports = connection;

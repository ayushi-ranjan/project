var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '',
    database : "CSV_DB 9"
});

connection.connect(function(err){
    if(err)
    {
        console.log(err.code);
        console.log(err.fatal);
    }
})

$query = "Select * from gr_task";

connection.query($query,function(err,rows,fields){
    if(err)
    {
        console.log("An error occured within the query");
        return;
    }
    console.log("Query successfully executed",rows);
});

connection.end(function(){
    console.log("Connection closed");
})

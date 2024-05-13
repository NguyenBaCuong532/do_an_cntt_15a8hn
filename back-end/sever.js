const express =require('express');
const mysql2 =require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const db= mysql2.createConnection({
    host: 'localhost', 
    database: 'btl', 
    user: 'root',
    password: 'root',
})

app.post('/auth', function(request, response) {
	let username = request.body.username;
	let password = request.body.password;
	if (username && password) {
		db.query('SELECT * FROM user WHERE name = ? AND password = ?', [username, password], function(error, results, fields) {
			if (error) throw error;
			if (results.length > 0) {
				return response.json("Success");
							
			} else {
                return response.json("false");

			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.listen(4000,()=>{
    console.log("Listening....")
})
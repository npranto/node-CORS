const express = require('express');	// getting the express library for use
const {json} = require('body-parser'); // var json = require('body-parser').json;					 
const masterRoutes = require('./server/masterRoutes');
const movieCtrl = require('./server/movies/movieCtrl');

const app = express();
const port = 8080;

app.use(json());
app.use(movieCtrl.checkUser);
////////////////


masterRoutes(app);



/////////////////
app.listen(port, () => {
	console.log(`Express listening on ${port}`);
})


// `/api/movies`		// get all movies
// `/api/movies/:id`	// get a specific movie by id
// `/api/movies`		// Post a movie
// `/api/movies/:id`	// Put(edit) a movie
// `/api/movies/:id`	// delete a specific movie


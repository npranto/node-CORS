const movieRoutes = require('./movies/movieRoutes');


module.exports = (app) => {
	movieRoutes(app);
}
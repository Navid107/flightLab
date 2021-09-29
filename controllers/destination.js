const Flight = require('../model/flight')
// Movie <- is our Model that can talk to the db

module.exports = {
	create
}

function create(req, res){
	console.log(req.body)

	Flight.findById(req.params.id, function(err, flightDocument){ 
		if(err){
			console.log(err)
			res.send(err)
		}
		console.log(flightDocument)
		flightDocument.destination.push(req.body); // <- our review is req.body
		
        console.log(flightDocument)// When we mutate (aka change a document) we have to tell the db, by saving
		flightDocument.save(function(err){
				// 3 respond to the client (aka the browser)
			console.log(flightDocument, "second log")	// 
				res.redirect(`/flights/${req.params.id}`); // redirecting back to the page the user was on
				// req.params.id <-- the movies id that was just updated, show page
		});	
	});
}
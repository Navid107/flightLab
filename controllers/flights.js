const Flight = require("../model/flight");

module.exports = {
new: newFlight,
index,
create,
showTheScheduled
};


function newFlight(req, res){
    res.render('flights/new', {title: "New Flights"})
}

function create(req, res){
     req.body.flightNo = parseInt(req.body.flightNo);
    Flight.create(req.body, function(err, createFlight){
        if(err) {
            console.log(err);
            return res.redirect("/flights/new")
        }
        console.log(createFlight, "-< createFlight");
        res.redirect(`/flights/${createFlight._id}`);
    })
}

function index(req, res){
    Flight.find({}, function(err, flightDoc){
        console.log(flightDoc)
        res.render("flights/index", {
            flights: flightDoc,
            title: "Flights"
        });
    });
}
function showTheScheduled(req, res,) {
    Flight.findById(req.params.id, function (err, chossenflight) {   
    res.render('flights/show',{
        title: 'Flight Details',
        flight: chossenflight,
    });
})
}
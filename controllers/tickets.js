const Ticket = require('../model/tickets');
const Flight = require('../model/flights');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    res.render('flights/new', {title: "Tickets"})
}  

function create(req, res){
   Ticket.create(req.body, function(err, createTicket){
       if(err) {
           console.log(err);
           return res.redirect("/flights/new")
       }
       console.log(createTicket, "-< createFlight");
       res.redirect(`/flights/${createTicket._id}`);
   })
}
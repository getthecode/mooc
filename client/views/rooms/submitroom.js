Template.create.events({
'submit form': function(e, tmpl) {
e.preventDefault();
var newRoom = {
            title: tmpl.find("#room").value
            
        };
room._id = Rooms.insert(newroom);

}
});

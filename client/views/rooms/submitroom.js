Template.create.events({
'submit form': function(e) {
e.preventDefault();
var room = {
room: $(e.target).find('[name=room]').val(),
}
room._id = Rooms.insert(room);
Router.go('all-rooms', room);
}
});

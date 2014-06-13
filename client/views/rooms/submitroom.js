Template.create.events({
'submit form': function(e) {
e.preventDefault();
var room = {
room: $(e.target).find('[name=room]').val(),
}
Rooms.insert(room);

}
});

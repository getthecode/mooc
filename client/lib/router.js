Router.configure({
  layoutTemplate: 'layout'
});
Router.map(function() { 
	this.route('roomx', {path: '/'});
	this.route('create', {path: '/create-new'});
	this.route('all-rooms', {path: '/all-rooms'});
	
});
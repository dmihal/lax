Template.userListItem.events({
  'click': function(e){
    e.preventDefault();
    Session.set('channel', this._id);
  }
});
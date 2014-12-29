Template.channelListItem.events({
  'click': function(e){
    e.preventDefault();
    Session.set('channel', this.name);
  }
});
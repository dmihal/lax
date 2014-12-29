Template.chatListMessage.helpers({
  name: function(){
    return Meteor.users.findOne(this.user).username;
  }
});
Template.chatList.helpers({
  messages: function(){
    return Messages.find({channel: this.name});
  }
});

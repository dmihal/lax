Template.sendForm.events({
  'click .send': function(e, template){
    sendMessage(template);
  },
  'keypress .message': function(e, template){
    if (e.which === 13) {
      sendMessage(template);
    }
  }
});

var sendMessage = function(template){
  var msg = template.find('.message').value;
  Messages.insert({
    channel: Session.get('channel'),
    message: msg,
    user: Meteor.userId(),
    time: new Date()
  });
  template.find('.message').value = "";
}

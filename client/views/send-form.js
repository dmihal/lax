Template.sendForm.events({
  'click .send': function(e, template){
    var msg = template.find('.message').value;
    Messages.insert({
      channel: Session.get('channel'),
      message: msg,
      user: Meteor.userId(),
      time: new Date()
    });
    template.find('.message').value = "";
  }
});

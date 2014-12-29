Session.setDefault('channel', null);
Template.registerHelper('currentChannel',function(){
  channel = Session.get('channel');
  return channel && Channels.findOne({name: channel});
});

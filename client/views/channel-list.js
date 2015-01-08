Template.channelList.helpers({
  channels: function(){
    return Channels.find();
  },
  users: function(){
    return Meteor.users.find({_id: {$ne: Meteor.userId()}});
  }
});

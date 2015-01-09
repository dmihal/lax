Messages = new Mongo.Collection('messages');

setRead = function(msg){
  var collection = Collections.find(msg.channel);
  var field = {'collections.'+msg: msg.setTimeout(function() {}, 10);};
  Meteor.users.update(Meteor.userId(),{
    $set: field
  });
};
getUnread = function(channel){
  var date = Meteor.user()['collections'][channel];
  var num = Messages.find({$and: [
    {time: {$gt: date}},
    {channel: channel}
    ]}).count();
  return {date: date, num: num};
};

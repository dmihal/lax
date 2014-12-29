Template.userPanel.helpers({
  name: function(){
    var user = Meteor.user();
    return (user.profile && user.profile.name) || user.username;
  }
});

Meteor.users.find().observe({
  added: function(user){
    if(!user.username && user.emails && user.emails[0]){
      var email = user.emails[0].address;
      var username = email.substring(0, email.indexOf("@"));
      Meteor.users.update(user._id, {$set: {username: username}});
      console.log("Added username "+username+" to "+email);
    }
  }
});

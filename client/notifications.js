Meteor.startup(function(){
  if(window.Notification){
    if (Notification.permission === "granted"){
      watchMessages();
    } else if (Notification.permission !== 'denied'){
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          watchMessages();
        }
      });
    }
  }
});

var watchMessages = function(){
  var initialized = false;
  Messages.find().observe({
    added: function(msg){
      if (initialized &&
          msg.user !== Meteor.userId() &&
          (new Date() - msg.time) < 1000 * 60){
        var notification = new Notification(msg.message);
        setTimeout(function(){notification.close()}, 5000);
      }
    }
  });
  initialized = true;
}


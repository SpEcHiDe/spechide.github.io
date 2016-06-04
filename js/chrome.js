
var pushStatus = false;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(registration) {
    // Registration was successful, show interface

    // => The UI part
    // we need everything to run silently without the user noticing!
    //document.getElementById('not-status').innerHTML = '<h4>mobiForge notifications</h4><input type="checkbox" name="pushStatus" id="pushStatus" value="false" /><label for="pushStatus">Receive push notifications for new content</label><div id="pushStatusMsg"></div>';

    //Check subscription state
    checkSubscription();

    if(!pushStatus){
        subUnsubPush();
    }

    //Attach listener
    // document.getElementById("pushStatus").addEventListener('click', function(){
    //   subUnsubPush();
    // });

  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}
else {
  console.log("ServiceWorker not supported :-(");
  document.getElementById('not-status').innerHTML = 'ServiceWorker not supported :-(';
}

function checkSubscription() {
  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.getSubscription().then(
      function(pushSubscription) {
        if(!!pushSubscription) {
          //Send subscription to application server
          sendSub(pushSubscription);
          //Manage interface
          pushStatus = true;
          // document.getElementById("pushStatus").checked = true;
          // document.getElementById("pushStatusMsg").innerHTML = '<span>You are subscribed!</span>';
          console.log('<span>You are subscribed!</span>');
        }
        else {
          //Manage interface
          pushStatus = false;
          // document.getElementById("pushStatus").checked = false;
          // document.getElementById("pushStatusMsg").innerHTML = '<span>You are not subscribed!</span>';
          console.log('<span>You are not subscribed!</span>');
        }
      }.bind(this)).catch(function(e) {
        console.error('Error getting subscription', e);
      });
  });
}

function subscribePush() {
  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly: true})
      .then(function(pushSubscription) {
        //Store this subscription on application server
        sendSub(pushSubscription);
        //Update status of interface
        // document.getElementById("pushStatus").checked = true;
        // document.getElementById("pushStatusMsg").innerHTML = '<span>You are subscribed!</span>';
        console.log('<span>You are subscribed!</span>');
        pushStatus = true;
      })
      .catch(function(e) {
        console.error('Unable to register push subscription', e);
      });
  });
}

function unsubscribePush() {
  console.log('unsubscribing...');
  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {

    serviceWorkerRegistration.pushManager.getSubscription().then(
      function(pushSubscription) {
        // Check we have a subscription to unsubscribe
        if (!pushSubscription) {
          // Nothing to unsubscribe, set checkboox interface unchecked...
          // document.getElementById("pushStatus").checked = false;
          // document.getElementById("pushStatusMsg").innerHTML = '<span>You are not subscribed!</span>';
          console.log('<span>You are not subscribed!</span>');
          pushStatus = false;
          return;
        }
        // We have a subscription, so remove it from applications server...
        cancelSub(pushSubscription);
        //... and unsubscribe it
        pushSubscription.unsubscribe().then(function() {
          //User unchecked the checkbox, but let's make sure
          // document.getElementById("pushStatus").checked = false;
          // document.getElementById("pushStatusMsg").innerHTML = '<span>You are not subscribed!</span>';
          console.log('<span>You are not subscribed!</span>');
          pushStatus = false;
        }).catch(function(e) {
          console.log('Error unsubscribing: ', e);
        });
      }).catch(function(e) {
        console.error('Error unsubscribing.', e);
      });
  });
}

function sendSub(pushSubscription) {
  console.log(pushSubscription);
  //get endpoint
  const endPoint = pushSubscription.endpoint.slice(pushSubscription.endpoint.lastIndexOf('/')+1);
   fetch("https://projects.shrimadhavuk.me/spechide/reggcm.php/subscribe/"+endPoint).then(function(res) {
        console.log(res);
      }).catch(function(e) {
          console.error('Error sending subscription to server:', e);
        });
}

function cancelSub(pushSubscription) {
  const endPoint = pushSubscription.endpoint.slice(pushSubscription.endpoint.lastIndexOf('/')+1);
  fetch("https://projects.shrimadhavuk.me/spechide/reggcm.php/unsubscribe/"+endPoint).then(function(res) {
      console.log(res);
  })
}

function subUnsubPush() {
  //Get current status
  if(!pushStatus) subscribePush();
  else unsubscribePush();
}

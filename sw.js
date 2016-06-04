console.log("left blank for historical purposes!");

var APILINK = "https://projects.shrimadhavuk.me/spechide/gcm.php";

self.addEventListener('push', function(event) {
     event.waitUntil(
         fetch(APILINK).then(function(response) {
           console.log(response);
       return response.json().then(function(data) {
                 console.log(data);
                 var title = data.title;
                 var body = data.message;
                 var icon = 'img/photo.jpg';
                 var tag = 'temp-tag';
                 var urlOpen = data.URL;

               return  self.registration.showNotification(title, {
                     body: body,
                     icon: icon,
                     tag: tag
                 })
             });
         })
     );
 });

self.addEventListener('notificationclick', function(e) {
  console.log('Notification click: tag ', e.notification.tag);
    e.notification.close();
   if (clients.openWindow) {
     clients.openWindow(notificationData.data.url);
   }
});

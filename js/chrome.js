if ('serviceWorker' in navigator) {
    console.log('Service Worker is supported');
    navigator.serviceWorker.register('sw.js').then(function(reg) {
        console.log(':^)', reg);
        reg.pushManager.subscribe({
            userVisibleOnly: true
        }).then(function(sub) {

            console.log('endpoint:', sub.endpoint);
            var subscription_id = sub.endpoint.split('/')[sub.endpoint.split('/').length-1];
            console.log(subscription_id);

        });
    }).catch(function(error) {
        console.log(':^(', error);
    });
}

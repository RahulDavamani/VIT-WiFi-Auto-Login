chrome.runtime.onMessage.addListener((request) => {
   if(request.req == 'Close Tab'){
      chrome.tabs.query({active: true, currentWindow: true}, tabs => {
         chrome.tabs.remove(tabs[0].id)
      })
   }

   if(request.req == 'Add Notif'){
      console.log(request.req);
      var notifOpt = {
         type: 'basic',
         iconUrl: '../icons/icon16.png',
         title: 'VIT WiFi Auto Login',
         message: 'Add Your Login Credential to Automatically Connect to VIT WiFi'
      };
      chrome.notifications.create('addNotif', notifOpt)
   }

   if(request.req == 'Incorrect Notif'){
      console.log(request.req);
      var notifOpt = {
         type: 'basic',
         iconUrl: '../icons/icon16.png',
         title: 'VIT WiFi Auto Login',
         message: 'Incorrect Credentials'
      };
      chrome.notifications.create('incorrectNotif', notifOpt)
   }
})
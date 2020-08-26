var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BPvvEAzTbW0mAnjHv72aPzfr4Un8F0KeH1qKZ8sna2N8NEv3QxcS82bUPff3QYEPBq6SHusaTdmpmqb4hMCohgw",
   "privateKey": "SqZ-8wMSrSBJvoAuOkwn9q2oOBq2adpILc_Gi_edn6c"
};
 
 
webPush.setVapidDetails(
   'mailto:fajarikhsan689@gmail.com',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/cp_N9Pr8JJo:APA91bEp5qlApn6Bc_BYjSXc_JKgdrfZcudcfIsYNoN8mHfzb4VlUbp1QLh5-KiXaKuEUHc-yxQp8IUEic_uhjgt_VnjKMNo3dAb2LafIo-DWHTwid6mdsjMh35fyq0b3hav7-vyu66u",
   "keys": {
       "p256dh": "BF4pV23Df/SuzYb81s8tuJ6OekGZ5p8I1wZmcMrlJJn+HqNJds2Mf28Rqp3jpQJ0MSfhR9YMN8eeTqQxPPyehHE=",
       "auth": "/AyA1g5JPAjo6TeDVrxcKw=="
   }
};
var payload = 'Selamat Datang Di Supernova Football La Liga!';
 
var options = {
   gcmAPIKey: '712623074306',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);
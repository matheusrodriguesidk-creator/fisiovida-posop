// Fisiovida — SW de auto-remocao (sem reload para evitar loops)
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){
  e.waitUntil((async function(){
    try{
      var keys = await caches.keys();
      await Promise.all(keys.map(function(k){ return caches.delete(k); }));
      await self.registration.unregister();
    }catch(err){}
  })());
});
// Nao intercepta fetch — navegador busca tudo da rede

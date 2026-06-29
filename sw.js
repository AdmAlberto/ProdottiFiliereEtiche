self.addEventListener('install', (e) => {
  console.log('App pronta per installazione');
});

self.addEventListener('fetch', (e) => {
  // Lasciamo passare le richieste verso Supabase liberamente
});

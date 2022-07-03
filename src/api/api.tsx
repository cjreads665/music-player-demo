const released = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/charts/track',
    params: {locale: 'en-US', pageSize: '20', startFrom: '0'},
    headers: {
      'X-RapidAPI-Key': '7fedfc74f4msha589398dacdd232p1304efjsncbead375de30',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  const featured = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/list-artist-top-tracks',
    params: {id: '40008598', locale: 'en-US'},
    headers: {
      'X-RapidAPI-Key': '7fedfc74f4msha589398dacdd232p1304efjsncbead375de30',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };

  export {released,featured}
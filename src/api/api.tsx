const released = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/charts/track',
  params: {locale: 'en-US', pageSize: '20', startFrom: '0'},
  headers: {
    'X-RapidAPI-Key': '6d8c3f1ce4msh83c51f8509b7152p1dc548jsn87a7c235bcff',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
};
  const featured = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
    params: {key: '484129036', locale: 'en-US'},
    headers: {
      'X-RapidAPI-Key': '6d8c3f1ce4msh83c51f8509b7152p1dc548jsn87a7c235bcff',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };

  export {released,featured}
const released ={
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/charts/track',
  params: {locale: 'en-US', pageSize: '20', startFrom: '0'},
  headers: {
    'X-RapidAPI-Key': '3b97962990msh3c2611279f30200p1bc6ddjsn1c52b7ee91cb',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  }
};
  const featured = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
    params: {key: '484129036', locale: 'en-US'},
    headers: {
      'X-RapidAPI-Key': '3b97962990msh3c2611279f30200p1bc6ddjsn1c52b7ee91cb',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };

  export {released,featured}
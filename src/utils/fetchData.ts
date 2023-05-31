type options = {
  method: string;
  headers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    'X-RapidAPI-Key': any,
    'X-RapidAPI-Host': string
  }
}

export const apiOptions = {
  method: 'GET',
  headers: {
    // 'X-RapidAPI-Key': env.X_RapidAPI_Key,
    'X-RapidAPI-Key': import.meta.env.VITE_X_RapidAPI_Key,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const apiOptionsYT = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_X_RapidAPI_Key_YT,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async <T>(url: string, options: options): Promise<T> => {
  const response = await fetch(url, options)
  const data = await response.json()
  return data
}
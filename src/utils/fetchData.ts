import { exercises } from "./types";

export const apiOptions = {
  method: 'GET',
  headers: {
    // 'X-RapidAPI-Key': env.X_RapidAPI_Key,
    'X-RapidAPI-Key': import.meta.env.VITE_X_RapidAPI_Key,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};



export const fetchData = async <T>(url: string, options: typeof apiOptions): Promise<T> => {
  const response = await fetch(url, options)
  const data = await response.json()
  return data
}
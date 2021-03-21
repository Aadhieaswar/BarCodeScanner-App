const API_KEY = 'fe6604f4b8msh63effb7aa310800p1ed4e5jsne316a3410445';
const API_HOST = 'nutritionix-api.p.rapidapi.com';
const API_URL = 'https://nutritionix-api.p.rapidapi.com/v1_1/item';

export default async function searchFor(UPC) {
let res = await fetch(`${API_URL}/?upc=${UPC}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST,
    }
  });
  let data = await res.json();
  return data;
}

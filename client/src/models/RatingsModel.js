import api from "../api.js";

export async function getAllRatings({ id }) {
  console.log(id);
  /* const result = await api.get("/products/:id/ratings"); */
  const result = await api.get(`products/:${id}/ratings`);
  console.log(result.data);

  if (result.status === 200) return result;
  else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}

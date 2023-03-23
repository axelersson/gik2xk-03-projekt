import api from "../api.js";

export async function getAllRatings({ id }) {
  console.log(id);
  const result = await api.get(`products/:${id}/ratings`);
  console.log(result.data);

  if (result.status === 200) return result;
  else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}
export async function create(id, rating) {
  console.log(rating, id);
  const result = await api.post(`/products/${id}/addRating`, {
    rating: rating,
  });

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}

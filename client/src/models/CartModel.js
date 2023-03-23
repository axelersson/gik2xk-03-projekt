import api from "../api.js";

export async function getAll() {
  const result = api.get("/cart");

  if (result.status === 200) return result;
  else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}

export async function create(id) {
  /* console.log('hej från cartmodel')
  console.log(id) */
  const result = await api.post(`/carts/${id}`);

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}

export async function getOne(id) {
  const result = await api.get(`/carts/${id}`);

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}

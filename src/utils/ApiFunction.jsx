import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export async function createAccount(photo, obj) {
  const formData = new FormData();
  formData.append("pf_img", photo);
  formData.append("requestString", JSON.stringify(obj));

  console.log(formData);

  try {
    const response = await api.post("/users/register", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createCard(userId, photo, obj) {
  const formData = new FormData();
  formData.append("imageFile", photo);
  formData.append("requestString", JSON.stringify(obj));

  try {
    const response = await api.post(`/cards/add?user_id=${userId}`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

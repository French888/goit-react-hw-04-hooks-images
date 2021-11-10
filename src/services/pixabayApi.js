import axios from "axios";

const key = "23210508-f6b5f09e6f5a868a1633393ca";
axios.defaults.baseURL = "https://pixabay.com/api/";
const params = "image_type=photo&orientation=horizontal&per_page=12";

async function fetchImagesApi(query, page) {
  const {
    data: { hits },
  } = await axios.get(`?&q=${query}&page=${page}&key=${key}&${params}`);
  return hits;
}

export default fetchImagesApi;

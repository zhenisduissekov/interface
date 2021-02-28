// axios
// link: https://medium.com/@stasonmars/%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D0%B5%D0%BC-axios-%D0%B2-react-453c04ed0654
// yarn add axios shards-react
import axios from "axios";
const URL = "http://127.0.0.1:8088";

export default axios.create({
  baseURL: URL,
  responseType: "json",
  mode: "cors",
  credentials: "include",
});

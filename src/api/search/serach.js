import axios from "axios";

export function search() {
  return axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.YT_API_KEY}&q=kien&type=video&part=snippet`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((res) => res.data);
}

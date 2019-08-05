import axios from 'axios';

const ACCESS_TOKEN = process.env.INSTAGRAM_API_ACCESS_TOKEN;

const fetchData = async () => {
  const res = await axios.get(
    'https://api.instagram.com/v1/users/self/media/recent/',
    {
      params: {
        access_token: ACCESS_TOKEN,
      },
    }
  );
  const data = res.data;
  data.data.forEach((element: any) => {
    console.log(element.images.low_resolution.url);
  });
};

fetchData();

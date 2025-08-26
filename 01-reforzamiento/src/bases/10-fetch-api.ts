import type { GiphyRandomResponse } from '../data/giphy.response';

const API_KEY = 'Z8LIL25EDt55WC06xhC2OcF3D3syCTen';

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

// myRequest
//   .then((response) => {
//     response.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement('img');
  imgElement.src = url;

  document.body.append(imgElement);
};

myRequest
  .then((response) => response.json())
  .then(({ data }: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    createImageInsideDOM(imageUrl);
  })
  .catch((error) => {
    console.error(error);
  });

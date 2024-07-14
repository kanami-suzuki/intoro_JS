'use strict'
const images = [{
    src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/C0zDWAPFT9A.jpg',
    description: '猫の画像1'
  },
  {
    src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/fEK4jvgnApg.jpg',
    description: '猫の画像2'
  },
  {
    src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/egfS7HzgKcc.jpg',
    description: '猫の画像3'
  },
  {
    src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/e-S23SJzFqs.jpg',
    description: '猫の画像4'
  },
  {
    src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/Hnwm8ktAd6E.jpg',
    description: '猫の画像5'
  }
]

const mainImage = document.getElementById('mainImage');
const imageText = document.getElementById('imageText');
const photoGallery = document.getElementById('photoGallery');

for (let i = 0; i < images.length; i++) {
  let listItem = document.createElement('li');
  listItem.setAttribute('class', 'listItem');
  let listImage = document.createElement('img');
  listImage.setAttribute('src', images[i].src);
  listImage.setAttribute('alt', images[i].description);
  listItem.appendChild(listImage);
  photoGallery.appendChild(listItem);

  let listItems = document.querySelectorAll('.listItem img');
  listItems[i].addEventListener('click', () => {
    mainImage.setAttribute('src', images[i].src);
    mainImage.setAttribute('alt', images[i].description);
    imageText.textContent = images[i].description;
  })
}
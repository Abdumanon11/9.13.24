
const whiteBtn = document.getElementById('white-btn');
const spaceGreyBtn = document.getElementById('space-grey-btn');
const productImage = document.querySelector('.product img');
const colorNameElement = document.getElementById('color-name');
const mani = document.getElementById('mani')


whiteBtn.addEventListener('click', () => {
  productImage.src = 'img/photo_2024-09-12_18-19-48.jpg'; 
});

spaceGreyBtn.addEventListener('click', () => {
  productImage.src = 'img/photo_2024-09-12_19-15-46.jpg';
});




whiteBtn.addEventListener('click', () => {
  colorNameElement.textContent = 'White';
});

spaceGreyBtn.addEventListener('click', () => {
  colorNameElement.textContent = 'Space Grey';
});

whiteBtn.addEventListener('click', () => {
    mani.textContent = '$1,999';
  });
  
  spaceGreyBtn.addEventListener('click', () => {
    mani.textContent = '$2,959';
  });
  
  





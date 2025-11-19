// *** CAROUSEL ***
document.addEventListener( 'DOMContentLoaded', function() {
  const carouselContainer = document.querySelector('.carousel__container');
  const prevButton = document.querySelector('.carousel__button--prev');
  const nextButton = document.querySelector('.carousel__button--next');
  const itemWidth = carouselContainer.querySelector('.carousel__item').offsetWidth + 16; 
  const premierItem = carouselContainer.querySelector('.carousel__item');

  prevButton.addEventListener('click', function() {
    carouselContainer.scrollBy({
      left: -itemWidth,
      behavior: 'smooth'
    });
  });
}

// TODO

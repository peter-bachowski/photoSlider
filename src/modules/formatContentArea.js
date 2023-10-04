function formatContentArea () {
    const mainBody = document.querySelector('.mainBody');
    const slideContainer = document.createElement('div');
    const rightArrow = document.createElement('div');
    const leftArrow = document.createElement('div');
    const previousSlide = document.createElement('div');
    const mainSlide = document.createElement('div');
    const nextSlide = document.createElement('div');
    const pauseStartBtn = document.createElement('div');

    slideContainer.classList.add('slideContainer');
    rightArrow.classList.add('arrow');
    leftArrow.classList.add('arrow');
    rightArrow.id = 'forward';
    leftArrow.id = 'backward';

    mainSlide.classList.add('mainSlide');
    previousSlide.classList.add('previousSlide');
    nextSlide.classList.add('nextSlide');

    pauseStartBtn.classList.add('pauseStartBtn');

    mainBody.appendChild(leftArrow);
    mainBody.appendChild(slideContainer);
    slideContainer.appendChild(previousSlide);
    slideContainer.appendChild(mainSlide);
    slideContainer.appendChild(nextSlide);
    //slideContainer.appendChild(pauseStartBtn)
    mainBody.appendChild(rightArrow);



}

export default formatContentArea;
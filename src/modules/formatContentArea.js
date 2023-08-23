function formatContentArea () {
    const mainBody = document.querySelector('.mainBody');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const slideContainer = document.createElement('div');
    const rightArrow = document.createElement('div');
    const leftArrow = document.createElement('div');
    const slide = document.createElement('div');
    const pauseStartBtn = document.createElement('div');

    slideContainer.classList.add('slideContainer');
    rightArrow.classList.add('arrow');
    leftArrow.classList.add('arrow');
    rightArrow.id = 'forward';
    leftArrow.id = 'backward';
    slide.classList.add('slide');
    pauseStartBtn.classList.add('pauseStartBtn');

    mainBody.appendChild(slideContainer);
    slideContainer.appendChild(leftArrow);
    slideContainer.appendChild(rightArrow);
    slideContainer.appendChild(slide);
    slideContainer.appendChild(pauseStartBtn);

}

export default formatContentArea;
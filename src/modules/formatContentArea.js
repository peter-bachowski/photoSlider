function formatContentArea () {
    const mainBody = document.querySelector('.mainBody');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const slideContainer = document.createElement('div');
    const rightArrow = document.createElement('div');
    const leftArrow = document.createElement('div');
    const slide = document.createElement('div');

    slideContainer.classList.add('slideContainer');
    rightArrow.classList.add('arrow');
    leftArrow.classList.add('arrow');
    rightArrow.id = 'forward';
    leftArrow.id = 'backward';
    slide.classList.add('slide');


    header.innerText = 'Header';
    footer.innerText = 'Footer';

    mainBody.appendChild(slideContainer);
    slideContainer.appendChild(leftArrow);
    slideContainer.appendChild(rightArrow);
    slideContainer.appendChild(slide);

}

export default formatContentArea;
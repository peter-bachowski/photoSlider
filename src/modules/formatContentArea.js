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

    mainBody.appendChild(slideContainer);
    slideContainer.appendChild(previousSlide);
    slideContainer.appendChild(mainSlide);
    slideContainer.appendChild(nextSlide);
    //slideContainer.appendChild(pauseStartBtn)

    window.addEventListener('resize', () => {
        if (slideContainer.clientWidth <= 1200) {
            try {
                slideContainer.removeChild(previousSlide);
                slideContainer.removeChild(mainSlide);
                slideContainer.removeChild(nextSlide);
                mainBody.appendChild(leftArrow);
                mainBody.appendChild(slideContainer);
                mainBody.appendChild(rightArrow);
                slideContainer.appendChild(mainSlide);
                mainSlide.style.width = '600px';
            }
            catch {
                return;
            }
        }
        else if (slideContainer.clientWidth > 1200) {
            try {
                mainBody.removeChild(document.querySelector('#backward'));
                mainBody.removeChild(document.querySelector('#forward'));
                slideContainer.removeChild(mainSlide);
                slideContainer.appendChild(previousSlide);
                slideContainer.appendChild(mainSlide);
                slideContainer.appendChild(nextSlide);
                //mainBody.appendChild(slideContainer);
                mainSlide.style.width = '34%';
            }
            catch {
                return;
            }
        }
    });

    // window.onload = () => {
    //     if (slideContainer.clientWidth <= 1200) {
    //         try {
    //             slideContainer.removeChild(previousSlide);
    //             slideContainer.removeChild(mainSlide);
    //             slideContainer.removeChild(nextSlide);
    //             slideContainer.appendChild(leftArrow);
    //             slideContainer.appendChild(mainSlide);
    //             slideContainer.appendChild(rightArrow);
    //             mainSlide.style.width = '600px';
    //         }
    //         catch {
    //             return;
    //         }
    //     }
    // };
}

export default formatContentArea;
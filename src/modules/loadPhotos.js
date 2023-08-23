function loadPhotos () {
    const slide = document.querySelector('.slide');
    const numOfPics = 5;
    let position = 1;
    let isPaused = false;

    slide.classList.add('pic' + position);

    //listeners

    window.setInterval(function () {
        if (!isPaused) {
            nextPicture();
        }
    }, 5000);

    document.querySelector('#forward').addEventListener('click', nextPicture);
    document.querySelector('#backward').addEventListener('click', previousPicture);
    document.querySelector('.pauseStartBtn').addEventListener('click', () => {
        if (isPaused) {
            isPaused = false;
        }
        else {
            isPaused = true;
        }
    });

    //functions

    function nextPicture () {
        if (position >= numOfPics) {
            slide.classList.remove('pic' + numOfPics);
            position = 0;
        }
        if (position !== 0){
            position += 1;
            slide.classList.remove('pic' + (position - 1));
            slide.classList.add('pic' + position);    
        }
        else {
            position += 1;
            slide.classList.add('pic' + position);     
        }
    }

    function previousPicture () {
        if (position === 1) {
            slide.classList.remove('pic' + position);
            slide.classList.add('pic' + numOfPics);
            position = numOfPics;
        }
        else {
            slide.classList.remove('pic' + position);
            slide.classList.add('pic' + (position - 1))
            position -= 1;    
        }
    }
}

export default loadPhotos;
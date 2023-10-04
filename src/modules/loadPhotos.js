function loadPhotos () {
    const mainBody = document.querySelector('.mainBody');
    const slideContainer = document.querySelector('.slideContainer');

    const previousSlide = document.querySelector('.previousSlide');
    const mainSlide = document.querySelector('.mainSlide');
    const nextSlide = document.querySelector('.nextSlide');

    const numOfPics = 5;
    let position = 1;
    let isPaused = false;

    previousSlide.classList.add('pic5');
    mainSlide.classList.add('pic1');
    nextSlide.classList.add('pic2');

    //listeners

    // window.setInterval(function () {
    //     if (!isPaused) {
    //         nextPicture();
    //     }
    // }, 5000);

    document.querySelector('.nextSlide').addEventListener('click', nextPicture);
    document.querySelector('.previousSlide').addEventListener('click', previousPicture);
    // document.querySelector('.pauseStartBtn').addEventListener('click', () => {
    //     if (isPaused) {
    //         isPaused = false;
    //     }
    //     else {
    //         isPaused = true;
    //     }
    // });

    //functions

    function nextPicture () {
        if (position >= numOfPics) {
            previousSlide.classList.remove('pic' + (numOfPics - 1));
            mainSlide.classList.remove('pic' + numOfPics);
            nextSlide.classList.remove('pic1');
            position = 0;
        }
        if (position !== 0){
            position += 1;

            mainSlide.classList.remove('pic' + (position - 1));
            mainSlide.classList.add('pic' + position); 
            
            if (position === 2) {previousSlide.classList.remove('pic' + numOfPics);}
            else {previousSlide.classList.remove('pic' + (position - 2));}
            previousSlide.classList.add('pic' + (position - 1));

            nextSlide.classList.remove('pic' + (position));
            if (position === 5) {nextSlide.classList.add('pic1')}
            else {nextSlide.classList.add('pic' + (position + 1));}
        
        }
        else {
            position += 1;
            previousSlide.classList.add('pic' + numOfPics);
            mainSlide.classList.add('pic' + position); 
            nextSlide.classList.add('pic' + (position + 1));
        }
    }

    function previousPicture () {
        if (position === 1) {
            previousSlide.classList.remove('pic' + numOfPics);
            previousSlide.classList.add('pic' + (numOfPics - 1));

            mainSlide.classList.remove('pic' + position);
            mainSlide.classList.add('pic' + numOfPics);

            nextSlide.classList.remove('pic' + (position + 1));
            nextSlide.classList.add('pic' + position);

            position = numOfPics;
        }
        else {
            previousSlide.classList.remove('pic' + (position - 1));
            if (position - 2 === 0) {
                previousSlide.classList.add('pic' + numOfPics);
            }
            else {
                previousSlide.classList.add('pic' + (position - 2));
            }

            mainSlide.classList.remove('pic' + position);
            mainSlide.classList.add('pic' + (position - 1))

            nextSlide.classList.remove('pic' + (position + 1));
            nextSlide.classList.add('pic' + (position));

            position -= 1;    
        }
    }

}

export default loadPhotos;
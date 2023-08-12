function loadPhotos () {
    const slide = document.querySelector('.slide');

    let photoArray = [];
    const photo1 = new Image();
    const photo2 = new Image();
    const photo3 = new Image();
    const photo4 = new Image();
    const photo5 = new Image();

    photo1.src = 'images/pic1';
    photo2.src = '../src/styles/images/pic2';
    photo3.src = '../src/styles/images/pic3';
    photo4.src = '../src/styles/images/pic4';
    photo5.src = '../src/styles/images/pic5';

    photoArray[0] = photo1;
    photoArray[1] = photo2;
    photoArray[2] = photo3;
    photoArray[3] = photo4;
    photoArray[4] = photo5;

    slide.style.backgroundImage = "url('../src/styles/images/pic1')";

    //window.setTimeout(nextPicture, 5000);

    function nextPicture () {
        let position = 0;
        console.log(photoArray[position].src);
        slide.style.backgroundImage = 'url(' + photoArray[position].src + ')';
        position += 1;
    }
}

export default loadPhotos;
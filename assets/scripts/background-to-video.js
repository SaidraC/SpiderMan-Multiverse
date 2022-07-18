
function changeBgToVideo(){
    const title = document.title;
    console.log(title);
    let mainContent;
    switch(title){
        case 'Multiverso | Spider-Man':
            mainContent = document.getElementsByClassName('s-main-content s-spiderman-01-01');
            mainContent[0].classList.remove('s-spiderman-01-01');
            break;
        case 'Multiverso | Spider-Man 2':
            mainContent = document.getElementsByClassName('s-main-content s-spiderman-01-02');
            mainContent[0].classList.remove('s-spiderman-01-02');
            break;
        case 'Multiverso | Spider-Man 3':
            mainContent = document.getElementsByClassName('s-main-content s-spiderman-01-03');
            mainContent[0].classList.remove('s-spiderman-01-03');
            break;
        case 'Multiverso | The Amazing Spider-Man':
            mainContent = document.getElementsByClassName('s-main-content s-spiderman-02-01');
            mainContent[0].classList.remove('s-spiderman-02-01');
            break;
        case 'Multiverso | The Amazing Spider-Man 2':
            mainContent = document.getElementsByClassName('s-main-content s-spiderman-02-02');
            mainContent[0].classList.remove('s-spiderman-02-02');
            break;
        case 'Multiverso | Spider-Man Homecoming':
            mainContent = document.getElementsByClassName('s-main-content s-spiderman-03-01');
            mainContent[0].classList.remove('s-spiderman-03-01');
            break;
        case 'Multiverso | Spider-Man Far From Home':
            mainContent = document.getElementsByClassName('s-main-content s-spiderman-03-02');
            mainContent[0].classList.remove('s-spiderman-03-02');
            break;
        case 'Multiverso | Spider-Man No Way Home':
            mainContent = document.getElementsByClassName('s-main-content s-spiderman-03-03');
            mainContent[0].classList.remove('s-spiderman-03-03');
            break;
    }
    
}

window.setTimeout(changeBgToVideo, 3000);


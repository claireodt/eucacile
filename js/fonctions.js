    function carrouselBasic() {
        let largeurImg;

            if (window.matchMedia("(max-width: 800px)").matches) {
                largeurImg = 92;
                console.log(largeurImg)
            } else {
                largeurImg = 634;
                console.log(largeurImg)
            }

        let nbImages = document.querySelectorAll('.images li').length;

        let lesimg = document.querySelector('.images');

        let bsuiv = document.querySelector('.suivante img');
        let bprec = document.querySelector('.precedente img');

        // NAVIGATION
        let cpt=0;

        // TRANSITION SETTINGS
        lesimg.style.transition = 'transform 0.5s ease-in-out';

        // ONCLICK SUIVANT
        bsuiv.addEventListener('click',function() {
            console.log('detect bsuiv');
            if (cpt<(nbImages-1)) {
                cpt++;
            } else {
                cpt=0;
            }
            if (window.matchMedia("(max-width: 800px)").matches) {
                lesimg.style.transform = 'translateX(-'+cpt*largeurImg+'vw)';
            } else {
                lesimg.style.transform = 'translateX(-'+cpt*largeurImg+'px)';
            }
        });

        // ONCLICK PRECEDENT
        bprec.addEventListener('click',function() {
            console.log('detect bprec');
            if (cpt>0) {
                cpt--;
            } else {
                cpt=nbImages-1;
            }
            if (window.matchMedia("(max-width: 800px)").matches) {
                lesimg.style.transform = 'translateX(-'+cpt*largeurImg+'vw)';
            } else {
                lesimg.style.transform = 'translateX(-'+cpt*largeurImg+'px)';
            }
        });
    }


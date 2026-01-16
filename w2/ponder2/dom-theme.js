
let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";

        const pictureElements = document.getElementById('logo');
        let rotation = 0;
        const angle = 15;
        const maxRotation = 360;
        const intervalId = setInterval(() => {
            rotation += angle;
            pictureElements.style.transform = `rotate(${rotation}deg)`;

            if (rotation >= maxRotation) {
                clearInterval(intervalId);
            }
        }, 50);
        
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
        
        const pictureElements = document.getElementById('logo');
        let opacity = 1.0;
        const fadeStep = 0.05;
        const fadeOutIntervalId = setInterval(() => {
            opacity -= fadeStep;
            pictureElements.style.opacity = opacity;

            if (opacity <= 0) {
                opacity = 0;
                clearInterval(fadeOutIntervalId);

                const fadeInIntervalId = setInterval(() => {
                opacity += fadeStep;
                pictureElements.style.opacity = opacity;

                if (opacity >= 1) {
                    opacity = 1;
                    clearInterval(fadeInIntervalId);
                }
                }, 100);
            }
        }, 100);

    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";

        const pictureElements = document.getElementById('logo');
        let scale = 1.0;
        const scaleStep = 0.1;
        const minScale = 0.25;
        const maxScale = 1.5;

        let phase = 'shrink';

        const scaleIntervalId = setInterval(() => {
            if (phase === 'shrink') {
                scale -= scaleStep;
                if (scale <= minScale) {
                    scale = minScale;
                    phase = 'grow';
                }  
            } else if (phase === 'grow') {
                scale += scaleStep;
                if (scale >= maxScale) {
                    scale = maxScale;
                    phase = 'return';
                }
            } else if (phase === 'return') {
                scale -= scaleStep;
                if (scale <= 1.0) {
                    scale = 1.0;
                    clearInterval(scaleIntervalId);
                }
            }
            pictureElements.style.transform = `scale(${scale})`;
        }, 100);

    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}
          
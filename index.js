const images = document.querySelectorAll(".slider img");
const slider = document.querySelector(".slider_container");
const inner_slider = document.querySelector(".slider");
const tabs = document.querySelectorAll(".tab");

const play = document.getElementById("playBtn");
const pause = document.getElementById("pauseBtn");

let current = 2;
let prev = current - 1;
let next = current + 1;

images[prev].classList.add("prev");
images[next].classList.add("next");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");


let imageSize;

let imageSizep;

function myFunction(x) {
    if (x.matches) {
        imageSize = images[0].clientWidth;
        imageSizep = imageSize + 16;
        inner_slider.style.transform = `translateX(${-imageSizep * current}px)`;
        inner_slider.style.transition = 'none';
    } else {
        imageSize = images[0].clientWidth;
        imageSizep = imageSize + 16;
        inner_slider.style.transform = `translateX(${-imageSizep * current}px)`;
        inner_slider.style.transition = 'none';
    }
}

var x = window.matchMedia("(max-width: 1068px)");
myFunction(x);
x.addListener(myFunction);

function myFunction(y) {
    if (y.matches) {
        imageSize = images[0].clientWidth;
        imageSizep = imageSize + 16;
        inner_slider.style.transform = `translateX(${-imageSizep * current}px)`;
        inner_slider.style.transition = 'none';
    } else {
        imageSize = images[0].clientWidth;
        imageSizep = imageSize + 16;
        inner_slider.style.transform = `translateX(${-imageSizep * current}px)`;
        inner_slider.style.transition = 'none';
    }
}

var y = window.matchMedia("(max-width: 1930px)");
myFunction(y);
y.addListener(myFunction);

function myFunction(z) {
    if (z.matches) {
        imageSize = images[0].clientWidth;
        imageSizep = imageSize + 16;
        inner_slider.style.transform = `translateX(${-imageSizep * current}px)`;
        inner_slider.style.transition = 'none';
    } else {
        imageSize = images[0].clientWidth;
        imageSizep = imageSize + 16;
        inner_slider.style.transform = `translateX(${-imageSizep * current}px)`;
        inner_slider.style.transition = 'none';
    }
}

var z = window.matchMedia("(max-width: 735px)");
myFunction(z);
z.addListener(myFunction);

images.forEach(function (image, index) {
    image.addEventListener("click", () => {

        if (image.classList.contains("prev")) {

            pause.style.display = "none";
            play.style.display = "block";

            clearInterval(Setautoslide);

            if (current <= 0) return;

            current = index;

            for (var i = 0; i < images.length; i++) {
                images[i].classList.remove("prev");
                images[i].classList.remove("next");
                tabs[i].classList.remove("active");
            }

            inner_slider.style.transition = 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0s';
            prev = current - 1;
            next = current + 1;
            inner_slider.style.transform = `translateX(${-imageSizep * current}px)`;

            if (images[current].classList.contains("first_img")) {
                tabs[images.length - 3].classList.add("active");
            }

            inner_slider.addEventListener("transitionend", () => {
                if (images[current].classList.contains("first_img")) {
                    inner_slider.style.transition = 'none';
                    current = images.length - 3;
                    prev = current - 1;
                    next = current + 1;
                    inner_slider.style.transform = `translateX(${-imageSizep * current}px)`;
                }

                images[prev].classList.add("prev");
                images[next].classList.add("next");
            })

            tabs[current].classList.add("active");

        }

        if (image.classList.contains("next")) {

            pause.style.display = "none";
            play.style.display = "block";

            clearInterval(Setautoslide);

            if (current >= images.length - 1) return;

            current = index;

            for (var i = 0; i < images.length; i++) {
                images[i].classList.remove("prev");
                images[i].classList.remove("next");
                tabs[i].classList.remove("active");
            }

            inner_slider.style.transition = 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0s';
            prev = current - 1;
            next = current + 1;
            inner_slider.style.transform = `translateX(${-imageSizep * current}px)`;


            if (images[current].classList.contains("last_img")) {
                tabs[images.length - current].classList.add("active");
            }

            inner_slider.addEventListener("transitionend", () => {

                if (images[current].classList.contains("last_img")) {
                    inner_slider.style.transition = 'none';
                    current = images.length - current;
                    prev = current - 1;
                    next = current + 1;
                    inner_slider.style.transform = `translateX(${-imageSizep * current}px)`;
                }

                images[prev].classList.add("prev");
                images[next].classList.add("next");
            })

            tabs[current].classList.add("active");

        }

    })
})


tabs.forEach(function (tab, Index) {
    tab.addEventListener("click", () => {

        clearInterval(Setautoslide);

        current = Index;

        for (var i = 0; i < images.length; i++) {
            images[i].classList.remove("prev");
            images[i].classList.remove("next");
            tabs[i].classList.remove("active");
        }

        inner_slider.style.transition = 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0s';
        prev = current - 1;
        next = current + 1;
        inner_slider.style.transform = `translateX(${-imageSizep * current}px)`;

        images[prev].classList.add("prev");
        images[next].classList.add("next");

        tabs[current].classList.add("active");

        Setautoslide = setInterval(autoslide, 5000);

    })
})

function autoslide() {

    for (var i = 0; i < images.length; i++) {
        images[i].classList.remove("prev");
        images[i].classList.remove("next");
        tabs[i].classList.remove("active");
    }

    inner_slider.style.transition = 'transform 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s';
    current++;
    prev = current - 1;
    next = current + 1;
    inner_slider.style.transform = `translateX(${-imageSizep * current}px)`;

    if (images[current].classList.contains("last_img")) {
        tabs[images.length - current].classList.add("active");
    }


    inner_slider.addEventListener("transitionend", () => {
        if (images[current].classList.contains("last_img")) {
            inner_slider.style.transition = 'none';
            current = images.length - current;
            inner_slider.style.transform = `translateX(${-imageSizep * current}px)`;
            prev = current - 1;
            next = current + 1;
        }
        images[prev].classList.add("prev");
        images[next].classList.add("next");
    })

    tabs[current].classList.add("active");
    
    if (current >= images.length - 1) {
        current = 1;
    };

};

let Setautoslide = setInterval(autoslide, 5000);


play.addEventListener("click", () => {

    pause.style.display = "block";
    play.style.display = "none";

    clearInterval(Setautoslide);
    Setautoslide = setInterval(autoslide, 5000);
});

pause.addEventListener("click", () => {
    pause.style.display = "none";
    play.style.display = "block";

    clearInterval(Setautoslide);
});

let start;
let change;


slider.addEventListener("touchstart", (e) => {
    start = e.touches[0].clientX;
});

slider.addEventListener("touchmove", (e) => {
    e.preventDefault();
    let touch = e.touches[0];
    change = start - touch.clientX;
});

slider.addEventListener("touchend", ImageSlide);

function ImageSlide(e) {
    inner_slider.scrollLeft = 0;
    if (change > 0) {
        pause.style.display = "none";
        play.style.display = "block";

        clearInterval(Setautoslide);

        if (current >= images.length - 1) return;

        current++;

        for (var i = 0; i < images.length; i++) {
            images[i].classList.remove("prev");
            images[i].classList.remove("next");
            tabs[i].classList.remove("active");
        }

        inner_slider.style.transition = 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0s';
        prev = current - 1;
        next = current + 1;
        inner_slider.style.transform = `translateX(${-imageSizep * current}px)`;


        if (images[current].classList.contains("last_img")) {
            tabs[images.length - current].classList.add("active");
        }

        inner_slider.addEventListener("transitionend", () => {

            if (images[current].classList.contains("last_img")) {
                inner_slider.style.transition = 'none';
                current = images.length - current;
                prev = current - 1;
                next = current + 1;
                inner_slider.style.transform = `translateX(${-imageSizep * current}px)`;
            }

            images[prev].classList.add("prev");
            images[next].classList.add("next");
        })

        tabs[current].classList.add("active");

    }
    else {
        pause.style.display = "none";
        play.style.display = "block";

        clearInterval(Setautoslide);

        if (current <= 0) return;

        current--;

        for (var i = 0; i < images.length; i++) {
            images[i].classList.remove("prev");
            images[i].classList.remove("next");
            tabs[i].classList.remove("active");
        }

        inner_slider.style.transition = 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) 0s';
        prev = current - 1;
        next = current + 1;
        inner_slider.style.transform = `translateX(${-imageSizep * current}px)`;

        if (images[current].classList.contains("first_img")) {
            tabs[images.length - 3].classList.add("active");
        }

        inner_slider.addEventListener("transitionend", () => {
            if (images[current].classList.contains("first_img")) {
                inner_slider.style.transition = 'none';
                current = images.length - 3;
                prev = current - 1;
                next = current + 1;
                inner_slider.style.transform = `translateX(${-imageSizep * current}px)`;
            }

            images[prev].classList.add("prev");
            images[next].classList.add("next");
        })

        tabs[current].classList.add("active");
    }
}

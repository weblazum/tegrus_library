"use strict";

$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        infinite: false,
        centerMode: true,
        initialSlide: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        centerPadding: '100px',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '80px',
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerMode: false,
                }
            }
        ]
    });
});

for (let i of document.querySelectorAll(".number")) {

    let numberTop = i.getBoundingClientRect().top,
        start = +i.innerHTML,
        end = +i.dataset.max;

    window.addEventListener('scroll', function onScroll() {
        if (window.pageYOffset > numberTop - window.innerHeight / 1) {
            this.removeEventListener('scroll', onScroll);
            let interval = this.setInterval(function () {
                i.innerHTML = ++start;
                if (start == end) {
                    clearInterval(interval);
                }
            }, 100);
        }
    });
}

function showButton() {
    let btn = document.querySelector('#getSolutionButton');
    if (window.pageYOffset > 500) {
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'initial';
    } else {
        btn.style.opacity = '0';
        btn.style.pointerEvents = 'none';
    }
}

window.addEventListener('scroll', showButton);

// Анимация при скролле

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
                animItem.classList.add("_active");
            } else {
                if (!animItem.classList.contains("_anim-no-hide")) {
                    animItem.classList.remove("_active");
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}

// just-validate
new window.JustValidate('.form', {
    rules: {
        company: {
            required: true,
        },
        question: {
            required: true,
        }
    },
    colorWrong: '#ff3435',
    messages: {
        name: {
            required: 'Введите имя',
            minLength: 'Имя не должно быть меньше 3 символов',
            maxLength: 'Имя не должно содержать более 15 символов'
        },
        company: {
            required: 'Введите название компании',
        },
        email: {
            email: 'Введите корректный E-mail',
            required: 'Введите E-mail'
        },
        question: {
            required: 'Напишите ваш вопрос'
        }
    },
    submitHandler: function (thisForm) {

    }
})
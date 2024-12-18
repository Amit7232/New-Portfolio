const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelectorAll('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () =>{
    navLinks.forEach(links => {
        links.classList.remove('active');
    });

    sections.forEach(section => {
        section.classList.remove('active');
    });
}

navLinks.forEach((link,idx) => {
     link.addEventListener('click',() => {
        if(!link.classList.contains('active')){
            activePage();

            link.classList.add('active');
            sections[idx].classList.add('active');
            
        }
     });
});

if (navLinks[0] && sections[0] && !navLinks[0].classList.contains('active')) {
    activePage();
    navLinks[0].classList.add('active');
    sections[0].classList.add('active');
}


const resumeBtns = document.querySelectorAll('.resume-btn');
console.log(resumeBtns);

resumeBtns.forEach((btn,idx) => {
btn.addEventListener('click', () => {

    const resumeDetails = document.querySelectorAll('.resume-details')

    resumeBtns.forEach(btn =>{
        btn.classList.remove("active");
    });
        btn.classList.add("active");

    resumeDetails.forEach(details =>{
        details.classList.remove("active");
    });
    resumeDetails[idx].classList.add('active');
});
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-details');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(details =>{
        details.classList.remove('active')
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click',()=>{
    if (index < 3) {
        index++;
        arrowLeft.classList.remove('disabled')
    }
    else{
        index = 3;
        arrowRight.classList.add('disabled')
    }

    activePortfolio();
});
arrowLeft.addEventListener('click',()=>{
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled')
    }
    else{
        index = 0;
        arrowLeft.classList.add('disabled')
    }

    activePortfolio();
});
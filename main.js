
// const a = document.querySelectorAll('a');

// a.scroll(0, -100000);
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            top:200
        });
    });
});
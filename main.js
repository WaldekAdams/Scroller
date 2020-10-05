const root = document.querySelector('.root');
const sections = root.querySelectorAll('section');
let currentSectionIndex = 0;

document.addEventListener('mousewheel', function (e) {
    console.log(e.wheelDelta);
    const direction = e.wheelDelta < 0 ? -1 : 1;
})
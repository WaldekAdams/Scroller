const root = document.querySelector('.root');
const sections = root.querySelectorAll('section');
let currentSectionIndex = 0;

document.addEventListener('mousewheel', function (e) {
    // console.log(e.wheelDelta);
    const direction = e.wheelDelta < 0 ? -1 : 1;

    if (direction === 1) {
        const isLastSection = currentSectionIndex === sections.length - 1;
        if (isLastSection) return;
    } else if (direction === -1) {
        const firstSection = currentSectionIndex === 0;
        if (firstSection) return;
    }

    currentSectionIndex = currentSectionIndex + direction;
    console.log(currentSectionIndex)
})
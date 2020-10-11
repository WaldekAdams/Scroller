document.addEventListener('DOMContentLoaded', function () {
    console.log('ok');


    const root = document.querySelector('.root');
    const sections = root.querySelectorAll('section');
    let currentSectionIndex = 0;
    let isTrottled = false;

    document.addEventListener('mousewheel', function (e) {
        // console.log(e.wheelDelta);
        if (isTrottled) return;
        isTrottled = true;

        setTimeout(function () {
            isTrottled = false;
        }, 700)

        const direction = e.wheelDelta < 0 ? -1 : 1;

        if (direction === 1) {
            const isLastSection = currentSectionIndex === sections.length - 1;
            if (isLastSection) return;
        } else if (direction === -1) {
            const firstSection = currentSectionIndex === 0;
            if (firstSection) return;
        }

        currentSectionIndex = currentSectionIndex + direction;
        console.log(currentSectionIndex);

        sections[currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: "start",
        })
    })
})
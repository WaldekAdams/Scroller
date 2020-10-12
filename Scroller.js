class Scroller {
    constructor(rootElement) {

        const root = document.querySelector(rootElement);
        this.sections = document.querySelectorAll('section');
        this.currentSectionIndex = 0;
        this.isTrottled = false;

    }

    listenScroll = (e) => {
        if (this.isTrottled) return;
        this.isTrottled = true;

        setTimeout(function () {
            this.isTrottled = false;
        }, 700)

        const direction = e.wheelDelta < 0 ? -1 : 1;

        this.scrolling(direction)

    }
    scrolling = (direction) => {
        console.log(direction)
        if (direction === 1) {
            const isLastSection = this.currentSectionIndex === this.sections.length - 1;
            if (isLastSection) return;
        } else if (direction === -1) {
            const firstSection = this.currentSectionIndex === 0;
            if (firstSection) return;
        }

        this.currentSectionIndex = this.currentSectionIndex + direction;
        // console.log(currentSectionIndex);

        // scrollToCurentSection()
    }
}
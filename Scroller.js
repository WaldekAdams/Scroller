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

        // scrolling(direction)

    }
}
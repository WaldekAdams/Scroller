class Scroller {
    constructor(rootElement) {

        const root = document.querySelector(rootElement);
        this.sections = document.querySelectorAll('section');
        this.currentSectionIndex = 0;
        this.isTrottled = false;

    }
}
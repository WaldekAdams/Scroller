class Scroller {
    constructor(rootElement) {

        const root = document.querySelector(rootElement);
        this.sections = document.querySelectorAll('section');
        const sectionArr = [...this.sections];
        const currentSectionIndex = sectionArr.findIndex((element) => {
            return this.isScrolledIntoView(element);
        })
        this.isTrottled = false;
        this.currentSectionIndex = currentSectionIndex < 0 ? 0 : currentSectionIndex;
        console.log(this.currentSectionIndex);

        this.drawNavigation();
    }

    listenScroll = (e) => {
        if (this.isTrottled) return;
        this.isTrottled = true;

        setTimeout(() => {
            this.isTrottled = false;
        }, 700)

        const direction = e.wheelDelta < 0 ? -1 : 1;

        this.scrolling(direction)

    }
    scrolling = (direction) => {
        // console.log(direction)
        if (direction === 1) {
            const isLastSection = this.currentSectionIndex === this.sections.length - 1;
            if (isLastSection) return;
        } else if (direction === -1) {
            const firstSection = this.currentSectionIndex === 0;
            if (firstSection) return;
        }

        this.currentSectionIndex = this.currentSectionIndex + direction;
        // console.log(currentSectionIndex);

        this.scrollToCurentSection()
    }
    scrollToCurentSection = () => {
        this.sections[this.currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: "start",
        })
    }

    isScrolledIntoView(el) {
        const rect = el.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = Math.floor(rect.bottom);

        const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

        return isVisible;
    }

    drawNavigation() {
        this.navConteiner = document.createElement('aside');
        this.navConteiner.setAttribute('class', 'scroller__navigation');
        const ul = document.createElement('ul');

        this.sections.forEach(section => {
            const listItem = document.createElement('li');

            ul.appendChild(listItem);
        })
        this.navConteiner.appendChild(ul);
        document.body.appendChild(this.navConteiner);


    }
}
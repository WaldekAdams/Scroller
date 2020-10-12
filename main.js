document.addEventListener('DOMContentLoaded', function () {
    console.log('ok');

    scroller = new Scroller('#root');
    // console.log(scroller);

    document.addEventListener('mousewheel', scroller.listenScroll)

})
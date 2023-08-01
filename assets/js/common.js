// gsap.registerPlugin(ScrollTrigger);

gsap.set('.header', {
    opacity: 0,
});
gsap.set('.intro__desc', {
    opacity: 0,
});
gsap.set('.interactive', {
    opacity: 0,
});
gsap.set('.intro__title--first span', {
    yPercent: 100,
});
gsap.set('.intro__title--second span', {
    yPercent: 100,
});

const introMotion = gsap.timeline();
introMotion
.to('.intro__title--first span', {yPercent: 0})
.to('.intro__title--second span', {yPercent: 0})
.to('.intro__title--second span', {yPercent: -100})
.addLabel('a')
.to('.header', {opacity: 1}, 'a+=0.5')
.to('.intro__desc', {opacity: 1}, 'a+=0.5')
.to('.interactive', {opacity: 1}, 'a+=0.5')



$(window).on('scroll', function (){
    $('.is-show').each(function(){
        var top = $(this).offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        if( scrollTop > top - (windowHeight - (windowHeight * 0.15)) ){
            $(this).addClass('on');
        } else if (scrollTop < top) {
            $(this).removeClass('on');
        }
    });
});
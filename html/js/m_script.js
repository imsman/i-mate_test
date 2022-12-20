$(document).ready(function(){
    // gsap animation
    gsap.fromTo("#section8 .tab-nav2", {top: -110, opacity: 0}, {duration: 1.4, top: 90, opacity: 1, delay:1.5, ease: Power3.easeOut});

    // header
    gsap.fromTo("#header", {top: -110, opacity: 0}, {duration: 1.3, top: 0, opacity: 1, delay:0.8, ease: Power3.easeOut});
    gsap.fromTo("#header.intro", {top: -110, opacity: 0}, {duration: 1, top: 0, opacity: 1, delay:0.8, ease: Power3.easeOut});

    // section1
    gsap.fromTo("#section1 .img01", {y: 100, opacity: 0}, {delay: 0.4, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
    gsap.fromTo("#section1 .img02", {y: 100, opacity: 0}, {delay: 0.6, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
    gsap.fromTo("#section1 .img03", {y: 100, opacity: 0}, {delay: 0.8, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
    gsap.fromTo("#section1 p", {y: 100, opacity: 0}, {delay: 1, duration: 1.5, y: 0, opacity: 1, ease: Power3.easeOut});
    gsap.fromTo("#section1 .arrow", {y: 100, opacity: 0}, {delay: 1.2, duration: 1.5, y: 0, opacity: 1, ease: Power3.easeOut});

    // section6
    gsap.fromTo("#section6 .title", {y: 100, opacity: 0}, {delay: 0.4, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
    gsap.fromTo("#section6 p", {y: 100, opacity: 0}, {delay: 0.6, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
    gsap.fromTo("#section6 .img01", {y: 100, opacity: 0}, {delay: 0.8, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
    gsap.fromTo("#section6 .img02", {y: 100, opacity: 0}, {delay: 1, duration: 1.5, y: 0, opacity: 1, ease: Power3.easeOut});
    gsap.fromTo("#section6 .arrow.mo", {y: 100, opacity: 0}, {delay: 1.2, duration: 1.5, y: 0, opacity: 1, ease: Power3.easeOut});

    // section8
    gsap.fromTo("#tab01 .txt-wrap", {y: 100, opacity: 0}, {delay: 0.6, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
    gsap.fromTo("#tab01 .swiper", {y: 100, opacity: 0}, {delay: 0.8, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
    gsap.fromTo("#tab01 .table-wrap", {y: 100, opacity: 0}, {delay: 1, duration: 1.5, y: 0, opacity: 1, ease: Power3.easeOut});
    gsap.fromTo("#tab01 .inquiry-box", {y: 100, opacity: 0}, {delay: 1.2, duration: 1.7, y: 0, opacity: 1, ease: Power3.easeOut});

    gsap.fromTo("#tab02 .txt-wrap", {y: 100, opacity: 0}, {delay: 0.4, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
    gsap.fromTo("#tab02 .swiper", {y: 100, opacity: 0}, {delay: 0.6, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
    gsap.fromTo("#tab02 .table-wrap", {y: 100, opacity: 0}, {delay: 0.8, duration: 1.5, y: 0, opacity: 1, ease: Power3.easeOut});
    gsap.fromTo("#tab02 .btn-center", {y: 100, opacity: 0}, {delay: 1, duration: 1.5, y: 0, opacity: 1, ease: Power3.easeOut});

    gsap.fromTo("#tab03 .title", {y: 100, opacity: 0}, {delay: 0.4, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
    gsap.fromTo("#tab03 p", {y: 100, opacity: 0}, {delay: 0.6, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
    gsap.fromTo("#tab03 .img-box .img01", {y: 100, opacity: 0}, {delay: 0.8, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
    gsap.fromTo("#tab03 .btn-center", {y: 100, opacity: 0}, {delay: 1, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});

    // section9
    gsap.fromTo("#section9 .title", {y: 100, opacity: 0}, {delay: 0.4, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
    gsap.fromTo("#section9 .tab-nav", {y: 100, opacity: 0}, {delay: 0.6, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
    gsap.fromTo("#section9 .tab-content", {y: 100, opacity: 0}, {delay: 0.8, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});

    const fpNavItem = document.querySelectorAll('#fp-nav li a');
    const setFpNavLiSelect = (anchor) => {
        for (const item of fpNavItem) {
            const itemDataId = item.getAttribute('data-nav-li-id');

            if (`nav_a_${anchor}` === itemDataId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        }
    };

    // main fullpage
    $('#main #fullpage').fullpage({
        sectionsColor : ['#F8F6EC', '#ffffff', '#ffffff', '#ffffff', '#F9F5D2'],
        anchors: ['full0', 'full1', 'full2', 'full3', 'full3'],
        css3: true,
        navigation: false,
        navigationPosition: screenLeft,
        afterLoad: function(anchorLink, index) {
            if(index == 1) {
                $('#fp-nav').hide();
            }
        },
        onLeave: function(index, nextIndex, direction){
            if(nextIndex == 1){
                $('#fp-nav').hide();
                $('#header').addClass('transparent');
                gsap.fromTo("#section1 .img01", {y: 100, opacity: 0}, {delay: 0.4, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section1 .img02", {y: 100, opacity: 0}, {delay: 0.6, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section1 .img03", {y: 100, opacity: 0}, {delay: 0.8, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section1 p", {y: 100, opacity: 0}, {delay: 1, duration: 1.5, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section1 .arrow", {y: 100, opacity: 0}, {delay: 1.2, duration: 1.5, y: 0, opacity: 1, ease: Power3.easeOut});
            } else {
                $('#header').removeClass('transparent');
                $('#fp-nav').show();
            }

            if(nextIndex == 2){
                gsap.fromTo("#section2 .img-area", {y: 100, opacity: 0}, {delay: 0.4, duration: 1.5, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section2 .title", {y: 100, opacity: 0}, {delay: 0.6, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section2 p", {y: 100, opacity: 0}, {delay: 0.8, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section2 .more-btn", {y: 100, opacity: 0}, {delay: 1, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section2 .numbering", {y: 100, opacity: 0}, {delay: 1.2, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section2 .arrow.mo", {y: 100, opacity: 0}, {delay: 1.4, duration: 1.5, y: 0, opacity: 1, ease: Power3.easeOut});
            }

            if(nextIndex == 3){
                gsap.fromTo("#section3 .img-area", {y: 100, opacity: 0}, {delay: 0.4, duration: 1.5, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section3 .title", {y: 100, opacity: 0}, {delay: 0.6, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section3 p", {y: 100, opacity: 0}, {delay: 0.8, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section3 .more-btn", {y: 100, opacity: 0}, {delay: 1, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section2 .numbering", {y: 100, opacity: 0}, {delay: 1.2, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section3 .arrow.mo", {y: 100, opacity: 0}, {delay: 1.4, duration: 1.5, y: 0, opacity: 1, ease: Power3.easeOut});
            }

            if(nextIndex == 4){
                gsap.fromTo("#section4 .img-area", {y: 100, opacity: 0}, {delay: 0.4, duration: 1.5, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section4 .title", {y: 100, opacity: 0}, {delay: 0.6, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section4 p", {y: 100, opacity: 0}, {delay: 0.8, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section4 .more-btn", {y: 100, opacity: 0}, {delay: 1, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section2 .numbering", {y: 100, opacity: 0}, {delay: 1.2, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});

            }
        }
    });

    // introduce fullpage
    $('#introduce #fullpage').fullpage({
        sectionsColor : ['#F8F6EC', '#EFEDE1', '#F9F5D2'],
        css3: true,
        navigation: false,
        onLeave: function(index, nextIndex, direction){
            if(nextIndex == 1){
                gsap.fromTo("#section6 .title", {y: 100, opacity: 0}, {delay: 0.4, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section6 p", {y: 100, opacity: 0}, {delay: 0.6, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section6 .img01", {y: 100, opacity: 0}, {delay: 0.8, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section6 .img02", {y: 100, opacity: 0}, {delay: 1, duration: 1.5, y: 0, opacity: 1, ease: Power3.easeOut});
            }

            if(nextIndex == 2){
                $('#header').addClass('transparent');
                gsap.fromTo("#section7 .circle01", {y: 100, opacity: 0}, {delay: 0.4, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section7 .circle02", {y: 100, opacity: 0}, {delay: 0.6, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section7 .circle03", {y: 100, opacity: 0}, {delay: 0.8, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section7 .title", {y: 100, opacity: 0}, {delay: 1, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section7 .txt01", {y: 100, opacity: 0}, {delay: 1.2, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
                gsap.fromTo("#section7 .txt02", {y: 100, opacity: 0}, {delay: 1.4, duration: 1.2, y: 0, opacity: 1, ease: Power3.easeOut});
            } else {
                $('#header').removeClass('transparent');
            }
        }
    })

    // program fullpage
    $('#program1 #fullpage').fullpage({
        sectionsColor : ['#F8F6EC', '#FFFFFFB2', '#F9F5D2'],
        css3: true,
        navigation: false,
        scrollOverflow: true,
    })

    $('#program2 #fullpage').fullpage({
        sectionsColor : ['#F8F6EC', '#F9F5D2'],
        css3: true,
        navigation: false,
        scrollOverflow: true,
    })

    $('#program3 #fullpage').fullpage({
        sectionsColor : ['#F8F6EC', '#FFFFFFB2', '#F9F5D2'],
        css3: true,
        navigation: false,
        scrollOverflow: true,
    })

    // tab
    $(".tab-content").hide();
    $(".tab-nav li:first").addClass("active").show();
    $(".m-tab-nav li:first").addClass("active").show();
    $(".tab-content:first").show();
    $(".tab-nav li").click(function() {
        $(".tab-nav li").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").hide();

        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
    });

    $(".m-tab-nav li").click(function() {
        $(".m-tab-nav li").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").hide();

        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
    });

    // community fullpage
    $('#community #fullpage').fullpage({
        sectionsColor : ['#F8F6EC', '#F9F5D2'],
        css3: true,
        navigation: false,
        scrollOverflow: true,
    })

    // accordion
    $(".accordion-item .accordion-header").click(function(){
        $(this).toggleClass('on');
        $(this).next(".accordion-body").slideToggle(200);
        $(this).parent(".accordion-item").siblings(".accordion-item").children(".accordion-body").slideUp(200);
        $(this).parent('.accordion-item').siblings('.accordion-item').children('.accordion-header').removeClass('on');
    });

    // 아이폰 vh calc
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
    })

    // 모바일 헤더
    $('.ham-btn').click(function (){
        $('#moMenu').addClass('on');
    });
    $('.close-btn').click(function (){
        $('#moMenu').removeClass('on');
    });
});



$(function() {
    $(".nav-item").on("click", function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active')
    })

})

$(window).scroll(function () {

    // change navbar background when body scroll

    if ($(this).scrollTop() > $('.navbar').innerHeight()) {

        $('.navbar').css({ background: '#3b3f41' })

    } else {

        $('.navbar').css({ background: 'transparent' })

    }

})



// function for select gallary

$(function() {
    $(".btn-menu").on("click", function(e) {
        e.preventDefault();
        $(this).addClass('select').siblings().removeClass('select')
        
        $(".all, .web, .creative, .graphic").fadeOut()

        $($(this).data("filter")).fadeIn()

    })
    


})


//btn scroll
let scrollbtn = document.querySelector(".scroll-to-top");

window.onscroll = () => {
    if(this.scrollY > 300) {
        scrollbtn.style.display = "block";
    }else {
        scrollbtn.style.display = "none";
    }
}

scrollbtn.onclick = () => {
    window.scrollTo(0, 0)
}



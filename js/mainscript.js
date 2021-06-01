// Header Input 
let headerSearch = document.getElementById("header-search");
let searchIcon = document.querySelector("header .top-section .form .fa-search");
let closeIcon = document.querySelector(" header .top-section .form .fa-times");

headerSearch.oninput = function () {
    if (headerSearch.value.trim().length === 0) {
        searchIcon.style.display = "block";
        closeIcon.style.display = "none";
    } else {
        searchIcon.style.display = "none";
        closeIcon.style.display = "block";
    }
}

closeIcon.onclick = function() {
    headerSearch.value = "";
    searchIcon.style.display = "block";
    closeIcon.style.display = "none";
}

// Show List Inside categorise 
let categ = document.getElementById("categorise");
let insideItems = document.getElementById("inside-div");
let columnOne = document.querySelectorAll('.column-one a');
let columnTwo = document.getElementById('column-two');
let columnTwoDivs = document.querySelectorAll('.column-two div');
let columnThree = document.querySelector('.column-three');
let columnThreeDivs = document.querySelectorAll('.column-three div');
let columnTwoLinks = document.querySelectorAll('.column-two div a:not(.title)');

// Hover On Categorise
categ.onmouseover = function() {
    insideItems.style.display = "grid";
}
categ.onmouseleave = function() {
    insideItems.style.display = "none";
    columnTwo.style.display = 'none';
    columnThree.style.display = 'none';
    columnTwoDivs.forEach(div => {
        div.style.display = 'none';
    });
    columnThreeDivs.forEach(div => {
        div.style.display = 'none';
    });
}

// Hover On Column One On Categorise
columnOne.forEach(link => {
    link.addEventListener('mouseover', function() {
        columnTwo.style.display = "block";
        columnTwoDivs.forEach(link => {
            link.style.display = 'none';
        })
        document.querySelector('.' + this.dataset.name).style.display = "block";
    });
});

// Hover On Column Two On Categorise
columnTwoLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        columnThree.style.display = "block";
        columnThreeDivs.forEach(link => {
            link.style.display = 'none';
        })
        document.querySelector('.' + this.dataset.name).style.display = "block";
    });
});

// for Make Business
let business = document.querySelector(".make-business");
let insideBusiness = document.querySelector(".make-business .inside-items");
showItems(business, insideBusiness);

// for Show Coursses
let courses = document.querySelector(".courses");
let coursesItems = document.querySelector(".courses .my-courses-items");
showItems(courses, coursesItems);

let wish = document.querySelector(".whish-list");
let wishList = document.querySelector(".whish-list .my-wish-list");
// for Show Wish List
showItems(wish, wishList);

// for Show Cart List
let cart = document.querySelector(".shopping");
let cartList = document.querySelector(".shopping .my-shopping-list");
showItems(cart, cartList);

// for Show Message
let message = document.querySelector(".notification");
let messageList = document.querySelector(".notification .my-noti-list");
showItems(message, messageList);

// for Show Account
let account = document.querySelector(".account");
let accountList = document.querySelector(".account .account-list");
showItems(account, accountList);


function showItems (ele1,ele2) {
    ele1.addEventListener("mouseover", function() {
        ele2.style.display = 'block';
    });
    ele1.addEventListener("mouseleave", function() {
        ele2.style.display = 'none';
    }); 
}

// Click On Search on Navbar On Small Screen 
let searchIconNav = document.getElementById("searchIcon");
let searchPopup = document.getElementById("search-popup");
let closeButton = document.getElementById("closeIconNavbar")
let topSearch = document.getElementById("top-search");
// console.log(closeButton);

// Stop Propagationn 
let searchTop = document.getElementById("search-top");
searchTop.onclick = function (e) {
    e.stopPropagation();
}

// When Click On Search Icon 
searchIconNav.onclick = function () {
    searchPopup.style.display = "block";
}

// When Click On Close Icon Hide Popup
closeButton.onclick = function (e) {
    searchPopup.style.display = "none";
    console.log("closeButton");
}

// When Click On Popup DIv to Hide Popup
searchPopup.onclick = function () {
    this.style.display = "none";
}

// All Links On Small Navbar On Small Screen on click it add Active And Remove Active from Siblibngs
let  allLinks = document.querySelectorAll(".small-screen .bar-setting .main-div .main-sec .item-1 .sections li");
let mainSetting= document.querySelector(".small-screen .bar-setting .main-div .item-1");

allLinks.forEach(item => {
    item.addEventListener("click", function(e) {
        document.querySelectorAll(".small-screen .main-sec > div").forEach(div => {
            div.classList.remove("active")
        });
        let link =  ("." + this.dataset.section);
        document.querySelector(link).classList.add("active");
        mainSetting.style.display = "none";
    });
});

// When You Click On menu To Remove Active Class
let topMenu = document.querySelectorAll(".small-screen .main-sec .top-menu");
topMenu.forEach(ele => {
    ele.addEventListener("click", function(){
        this.parentElement.classList.remove("active");
        mainSetting.style.display = "block";
    });
});

// When You Click Bars Icon To Open Left Setting

let bars = document.getElementById("bars");
let barsSetting = document.querySelector(".small-screen .bar-setting");
let mainDiv = document.querySelector(".bar-setting .main-div");
let closeParent = document.querySelector(".small-screen .bar-setting .close-parent");

bars.onclick = function() {
    barsSetting.style.display = "block";
    setTimeout(function() {
        mainDiv.classList.add('active');
        closeParent.classList.add('show');
    }, 250)
}

barsSetting.onclick = function() {
    mainDiv.classList.remove('active');
    closeParent.classList.remove('show');
    mainSetting.style.display = "block";
    setTimeout(function() {
        barsSetting.style.display = "none";
    }, 250);
    setTimeout(function() {
        document.querySelectorAll(".small-screen .main-sec > div").forEach(div => {
            div.classList.remove("active")
        });
    }, 500);
}

mainDiv.onclick = function(e) {
    e.stopPropagation();
}

// Algorithms Links
let algorithm = document.querySelectorAll(".algorithms .top-text > .item");
let allCourses = document.querySelectorAll(".algorithms .boxs > div");

algorithm.forEach(link => {
    link.addEventListener("click", function() {
        algorithm.forEach(item => {
            item.classList.remove("active");
        });
        allCourses.forEach(div => {
            div.classList.remove("active");
        });
        let classElement = this.dataset.section;

        let logLink = (this.parentElement.parentElement).querySelector('.boxs >' + '.' + classElement)
        logLink.classList.add("active");

        this.classList.add("active");
        
    });
});

$(document).ready(function() {
    // Start Recommended Trigger Owl-carousel
    $('.recommended .boxs .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            430: {
                items:2,
                nav:false
            },
            700: {
                items:3,
                nav:false
            },
            900:{
                items:4,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });

    // Start Recommended Trigger Owl-carousel
    $('.watch-my-courses .boxs .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:false
            },
            600:{
                items:2,
                nav:false,
                loop:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });
    // Start Topics Trigger Owl-carousel
    $('.topicss .careg .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            450:{
                items:2,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });

    // Start Algorithms Owl-carousel
    $('.algorithms .boxs .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            450:{
                items:2,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })
});






















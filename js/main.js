// window.alert("Hello")    //Test

let maunn = document.querySelector(".maunn");

maunn.addEventListener("click", function () {
  this.classList.toggle("is-active");
});

$(document).ready(function () {
  $(".mun-align").click(function () {
    $(".box-cilsh-nav").toggleClass("active");
    // $(window.alert('lskclfsjk'))

    if ($(".box-cilsh-nav").css("left") == "0px") {
      $(".nav-tab-menu .item1").animate({ opacity: "0", right: "300px" }, 100);
      $(".nav-tab-menu .item2").animate({ opacity: "0", right: "300px" }, 100);
      $(".nav-tab-menu .item3").animate({ opacity: "0", right: "300px" }, 100);
      $(".nav-tab-menu .item4").animate({ opacity: "0", right: "300px" }, 100);
      $(".nav-tab-menu .item5").animate({ opacity: "0", right: "300px" }, 100);

      $(".box-cilsh-nav-icon-sid .icon_bar_1").animate(
        { opacity: "0", top: "400px" },
        100
      );
      $(".box-cilsh-nav-icon-sid .icon_bar_2").animate(
        { opacity: "0", top: "400px" },
        100
      );
      $(".box-cilsh-nav-icon-sid .icon_bar_3").animate(
        { opacity: "0", top: "400px" },
        100
      );
    } else {
      $(".nav-tab-menu .item1").animate({ opacity: "1", right: "0px" }, 1100);
      $(".nav-tab-menu .item2").animate({ opacity: "1", right: "0px" }, 1200);
      $(".nav-tab-menu .item3").animate({ opacity: "1", right: "0px" }, 1300);
      $(".nav-tab-menu .item4").animate({ opacity: "1", right: "0px" }, 1400);
      $(".nav-tab-menu .item5").animate({ opacity: "1", right: "0px" }, 1500);

      $(".box-cilsh-nav-icon-sid .icon_bar_1").animate(
        { opacity: "1", top: "0px" },
        1200
      );
      $(".box-cilsh-nav-icon-sid .icon_bar_2").animate(
        { opacity: "1", top: "0px" },
        1400
      );
      $(".box-cilsh-nav-icon-sid .icon_bar_3").animate(
        { opacity: "1", top: "0px" },
        1600
      );
    }
  });
});

// =====================================================================================================

// date Footer
document.getElementById("dateYear").innerHTML = new Date().getFullYear();

// =====================================================================================================
// button arrow top
let arrowOffsetTop = $(".section_arrow_up").offset().top;

$(window).scroll(function () {
  let wScroll = $(window).scrollTop();

  if (wScroll > arrowOffsetTop - 50) {
    $("#btnUp").css({ "display": "flex" });
    
  } else {
    $("#btnUp").css({ "display": "none" });
  }
});

$("#btnUp").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 1000);
});
// =====================================================================================================

// =====================================================================================================
// Animate
AOS.init();

// =====================================================================================================
window.addEventListener('load', () => {
    registerSW();
  });

  // Register the Service Worker
  async function registerSW() {
    if ('../serviceWorker' in navigator) {
      try {
        await navigator
              .serviceWorker
              .register('../serviceworker.js');
      }
      catch (e) {
        console.log('SW registration failed');
      }
    }
  }
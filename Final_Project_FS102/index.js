/*Index Mainpic slider */
var myIndex = 0;
var interval;

function startSlider() {
  var x = $(".mainpic");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  interval = setTimeout(startSlider, 2000); // Change image every 2 seconds
}
startSlider();

function stopSlider() {
  clearInterval(interval);
}

$(".mainpic").on("mouseenter", stopSlider).on("mouseleave", startSlider);

/*Countdown Timer */
var endDate = new Date("Feb 13, 2022 20:53:00").getTime();

var countDownTimer = setInterval(function () {
  var now = new Date().getTime();

  var remainingTime = endDate - now;

  const second = 1000;

  const minute = second * 60;

  const hour = minute * 60;

  const day = hour * 24;

  daysLeft = Math.trunc(remainingTime / day);

  hoursLeft = Math.trunc((remainingTime % day) / hour);

  minutesLeft = Math.trunc((remainingTime % hour) / minute);

  secondsLeft = Math.trunc((remainingTime % minute) / second);

  $(".countdownTimer").text(
    daysLeft +
      "Days " +
      hoursLeft +
      "Hours " +
      minutesLeft +
      "Mins " +
      secondsLeft +
      "Secs"
  );

  if (remainingTime <= 0) {
    $(".countdownTimer").text("Now Live!");
  }
}, 1000);

function indexTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = $(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = $(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
}
$("#defaultOpen").click();



$("p.test").text("Hello");

/*Sponsor Slide in */

var breakpoint = 840;

// If the screen is smaller then 840px wide remove all classes.
if ($(window).width() < breakpoint) {
  $(".js-slidein").removeClass("js-slidein");
}

// Check which of the elements with this class is visible on the page
$(".js-slidein").each(function (i) {
  var bottomObject = $(this).offset().top;
  var bottomWindow = $(window).scrollTop() + $(window).height();

  if (bottomWindow > bottomObject) {
    $(this).removeClass("js-slidein");
  }
});

// Trigger the slide-in effect on scroll
$(window).scroll(function () {
  $(".js-slidein").each(function (i) {
    var bottomObject = $(this).offset().top + $(this).outerHeight() / 3;
    var bottomWindow = $(window).scrollTop() + $(window).height();

    if (bottomWindow > bottomObject) {
      $(this).addClass("js-slidein-visible");
    }
  });
});


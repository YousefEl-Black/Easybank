let hamburgur = document.querySelector("header .header .megamenu .list-shape");
let menu = document.querySelector("header .header .megamenu .menu");

$(document).ready(() => {
  $("header .header .megamenu .list-shape").click(function () {
    $("header .header .megamenu .menu").toggle(400);
    $("header .header .megamenu .list-shape img:first-child").toggle();
    $("header .header .megamenu .list-shape img:last-child").toggle();
  })
});
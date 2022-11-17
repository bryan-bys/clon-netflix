const d = document,
  $btnMenu = d.getElementById("menu"),
  $btnsNav = d.querySelector(".header-nav"),
  $next1 = d.getElementById("flecha-derecha-1"),
  $next2 = d.getElementById("flecha-derecha-2"),
  $next3 = d.getElementById("flecha-derecha-3"),
  $next4 = d.getElementById("flecha-derecha-4"),
  $prev1 = d.getElementById("flecha-izquierda-1"),
  $prev2 = d.getElementById("flecha-izquierda-2"),
  $prev3 = d.getElementById("flecha-izquierda-3"),
  $prev4 = d.getElementById("flecha-izquierda-4"),
  $container1 = d.getElementById("contenedor-1"),
  $container2 = d.getElementById("contenedor-2"),
  $container3 = d.getElementById("contenedor-3"),
  $container4 = d.getElementById("contenedor-4"),
  $movies = d.querySelectorAll(".movie");

// -----------------BTN MENU------------

$btnMenu.addEventListener("click", () => {
  $btnsNav.classList.toggle("is-active");
});

$next1.addEventListener("click", () => {
  moveRight(1);
});
$next2.addEventListener("click", () => {
  moveRight(2);
});
$next3.addEventListener("click", () => {
  moveRight(3);
});
$next4.addEventListener("click", () => {
  moveRight(4);
});

$prev1.addEventListener("click", () => {
  moveLeft(1);
});
$prev2.addEventListener("click", () => {
  moveLeft(2);
});
$prev3.addEventListener("click", () => {
  moveLeft(3);
});
$prev4.addEventListener("click", () => {
  moveLeft(4);
});

function moveRight(p) {
  if (p == 1) {
    $container1.scrollBy({
      behavior: "smooth",
      left: 1410,
    });
    $prev1.style.visibility = "visible";
  } else if (p == 2) {
    $container2.scrollBy({
      behavior: "smooth",
      left: 1410,
    });
    $prev2.style.visibility = "visible";
  } else if (p == 3) {
    $container3.scrollBy({
      behavior: "smooth",
      left: 1410,
    });
    $prev3.style.visibility = "visible";
  } else if (p == 4) {
    $container4.scrollBy({
      behavior: "smooth",
      left: 1410,
    });
    $prev4.style.visibility = "visible";
  }
}

function moveLeft(p) {
  if (p == 1) {
    $container1.scrollBy({
      behavior: "smooth",
      left: -1410,
    });
  } else if (p == 2) {
    $container2.scrollBy({
      behavior: "smooth",
      left: -1410,
    });
  } else if (p == 3) {
    $container3.scrollBy({
      behavior: "smooth",
      left: -1410,
    });
  } else if (p == 4) {
    $container4.scrollBy({
      behavior: "smooth",
      left: -1410,
    });
  }
}

// hover imagenes

const tabsBox = document.querySelector(".tabs-box"),
  allTabs = tabsBox.querySelectorAll(".tab"),
  arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;

const handleIcons = (scrollVal) => {
  let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;

  arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";

  arrowIcons[1].parentElement.style.display =
    maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add

    let scrollWidth = (tabsBox.scrollLeft += icon.id === "left" ? -340 : 340);

    handleIcons(scrollWidth);
  });
});

allTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabsBox.querySelector(".active").classList.remove("active");

    tab.classList.add("active");
  });
});

const dragging = (e) => {
  if (!isDragging) return;

  tabsBox.classList.add("dragging");

  tabsBox.scrollLeft = e.movementX;

  handleIcons(tabsBox.scrollLeft);
};

const dragStop = () => {
  isDragging = false;

  tabsBox.classList.remove("dragging");
};

tabsBox.addEventListener("mousedown", () => (isDragging = true));

tabsBox.addEventListener("mousemove", dragging);

document.addEventListener("mouseup", dragging);

function auto_grow(element) {
  element.style.height = "5px";

  element.style.height = element.scrollHeight + "px";
}
// home menu scroll end 
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

if (!("boxShadow" in document.body.style)) {
  document.body.setAttribute("class", "noBoxShadow");
}

document.body.addEventListener("click", function (e) {
  var target = e.target;

  if (
    target.tagName === "INPUT" &&
    target.getAttribute("class").indexOf("liga") === -1
  ) {
    target.select();
  }
});

(function () {
  var fontSize = document.getElementById("fontSize"),
    testDrive = document.getElementById("testDrive"),
    testText = document.getElementById("testText");

  function updateTest() {
    testDrive.innerHTML = testText.value || String.fromCharCode(160);

    if (window.icomoonLiga) {
      window.icomoonLiga(testDrive);
    }
  }

  function updateSize() {
    testDrive.style.fontSize = fontSize.value + "px";
  }

  fontSize.addEventListener("change", updateSize, false);

  testText.addEventListener("input", updateTest, false);

  testText.addEventListener("change", updateTest, false);

  updateSize();
})();

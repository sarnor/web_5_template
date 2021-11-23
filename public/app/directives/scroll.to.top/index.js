import app from "../../main-module/index";
import mainPage from "../../../pages/main.wrapper/index.html";

app.directive("scrollToTop", [
  () => {
    return {
      restrict: "C",
      link: (scope, element, attrs) => {
        let scrollingUp,
          timer,
          scrollToTop = document.querySelector(".scroll-to-top");

        document.addEventListener("scroll", () =>
          window.pageYOffset >= 200
            ? scrollToTop.classList.add("visible")
            : scrollToTop.classList.remove("visible")
        );

        const scrollUp = (step) => {
          window.scrollTo(0, scrollingUp);
          scrollingUp -= step;
          timer = requestAnimationFrame(winScrollUp);
        };
        const scrollStop = () => {
          cancelAnimationFrame(timer);
          window.scrollTo(0, 0);
        };

        scrollToTop.addEventListener("click", () => {
          scrollingUp = window.pageYOffset;
          winScrollUp();
        });

        const winScrollUp = () =>
          scrollingUp > 0 ? scrollUp(200) : scrollStop();
      },
    };
  },
]);

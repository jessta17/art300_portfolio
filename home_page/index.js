(() => {
    /* */
    if (document.querySelector(".thumbnail")) {
      document.querySelectorAll(".thumbnail").forEach(function(obj) {
        obj.addEventListener("click", function(e) {
          document.getElementById("img_target").src = e.target.src;
        });
      });
    }
  })();
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        var sectionId = this.getAttribute('href');
        var section = document.querySelector(sectionId);
        section.scrollIntoView({behavior: 'smooth'});
      });
    }
  });
  


function toggleContainer() {
    var container = document.getElementById("achievements");
    if (container.style.display === "none") {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  }
  
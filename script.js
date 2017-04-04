// SCRIPT FOR CARD ANIMATION

        function search_card_expand(id) {
          var div = document.getElementById(id);
          var className = div.getAttribute("class");
          if (div.classList.contains('card-collapse')) {
            div.classList.remove("card-collapse");
            div.classList.add("card-expand");
            // setTimeout(function() {
            //   div.classList.add("displaynone");
            // }, 1700);
          } else {
            div.classList.add("card-expand");
          }
          search_image_big('search-image');
        }

        function search_image_big(id) {
          var div = document.getElementById(id);
          var className = div.getAttribute("class");
          if (div.classList.contains('search-img-small')) {
            div.classList.remove("search-img-small");
            div.classList.add("search-img-big");
            div.classList.add("mdl-cell--4-col");
            // setTimeout(function() {
            //   div.classList.add("displaynone");
            // }, 1700);
          } else {
            div.classList.add("search-img-big");
            div.classList.add("mdl-cell--4-col");
          }
        }

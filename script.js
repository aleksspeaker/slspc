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
            div.classList.add("mdl-cell--order-2");
            // setTimeout(function() {
            //   div.classList.add("displaynone");
            // }, 1700);
          } else {
            div.classList.add("search-img-big");
            div.classList.add("mdl-cell--4-col");
          }
        }
// END OF SCRIPT FOR CARD ANIMATION

// function expand(id) {
// document.getElementById(id).style = 'height: auto;';
// }


// function expand(id) {
//           var div = document.getElementById(id);
//           var className = div.getAttribute("class");
//           if (div.classList.contains('card-description-collapsed')) {
//             div.classList.remove("card-description-collapsed");
//             div.classList.add("card-description-expanded");
//             // setTimeout(function() {
//             //   div.classList.add("displaynone");
//             // }, 1700);
//           } else {
//             div.classList.add("card-description-expanded");
//           }
//         }
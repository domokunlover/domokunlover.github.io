var tooltip = document.querySelectorAll('.hover-info');

document.addEventListener('mousemove', fn, false);

function fn(e) {
    for (var i=tooltip.length; i--;) {
        tooltip[i].style.left = e.pageX + 'px';
        tooltip[i].style.top = e.pageY + 'px';
    }
}




document.addEventListener("DOMContentLoaded", function () {
  var grid = document.querySelector(".backpack-wrapper");

  if (!grid) return;

  var iso = new Isotope(grid, {
    itemSelector: ".item",
    layoutMode: "fitRows",
    transitionDuration: "0.3s",
  });

  var filters = {
    rarity: "",
    type: "",
    age: "",
    ability: "",
  };

  var filterGroups = document.querySelectorAll(
    ".backpack-filters .filter-group",
  );

  filterGroups.forEach(function (group) {
    var buttons = group.querySelectorAll("button");
    var filterGroup = group.getAttribute("data-filter-group");

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        buttons.forEach(function (btn) {
          btn.classList.remove("is-checked");
        });

        button.classList.add("is-checked");

        filters[filterGroup] = button.getAttribute("data-filter");

        var filterValue =
          filters.rarity + filters.type + filters.age + filters.ability;
        iso.arrange({
          filter: filterValue || "*",
        });
      });
    });
  });
  document.querySelector('[onclick*="backpack"]')?.addEventListener("click", function () {
  setTimeout(function () {
    iso.layout();
  }, 0);
});
});





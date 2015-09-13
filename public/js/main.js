$("form").on("submit", function(e) {
  e.preventDefault();
  var $superheroName = $("#superhero-name").val();
  var $superheroAbility = $("#superhero-ability").val();
  var $superheroNemesis = $("#superhero-nemesis").val();

  var payload = {
    name: $superherName,
    ability: $superherAbility,
    nemesis: $superherNemesis
  };

  $.post("/api/superheros", payload, function(data) {
    $("#results").html(data.message);
    $("#all").html("");
    $("form").reset();
    $("input")
    listHeros();
  });
});

//helper function
function listHeros() {
  $.get("/api/superheros", function(data) {
    for (var i = 0; i < data.length; i++) {
      $("#all").prepend("<li>" + data[i].name + "-" + data[i].ability + "-" + data[i].nemesis);
    }
  });
}

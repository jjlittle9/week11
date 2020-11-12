
$('form').submit(function(event) {

  event.preventDefault();

  var form_champion_data = $(this).serializeArray();

  var champion_object = condense_data(form_champion_data);

  save_champion_to_local_storage(champion_object);

  display_champions_in_table();
});

function condense_data(form_champion_data) {
  var object = {};

  $(form_champion_data).each(function() {
    object[this.name] = this.value;
  });

  return object;
}

function save_champion_to_local_storage() {
  var champions_array = JSON.parse(localStorage.getItem("champions"));

  // Making sure that champions_array exists and if it doesn't making it an empty array
  if(!champions_array) {
    champions_array = [];
  }

  champion_array.push(champion_object);

  localStorage.setItem('champions', JSON.stringify(champion_array));
}

// Updating a text box right below the ranges to show what number is selected
function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
}

function display_champions_in_table() {
  var champions = JSON.parse(localStorage.getItem('champions'));

  $(champions).each(function() {
    $("#champions").append(`<p>${this.champion_name} - ${this.games_won} - ${this.games_lost}</p>`);
  });
}

function save_champion_to_local_storage() {
  var champions_array = JSON.parse(localStorage.getItem("champions"));

  // Making sure that champions_array exists and if it doesn't making it an empty array
  if(!champions_array) {
    champions_array = [];
  }

  champion_array.push(champion_object);

  localStorage.setItem('champions', JSON.stringify(champion_array));
}
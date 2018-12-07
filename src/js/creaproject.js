const checkCreaproj = document.getElementById("btncreaproj");
const cancelCreaproj = document.getElementById("btncancelproj");

let name = document.getElementById("InputProjectName");
let thematic = document.getElementById("InputTheme");
let owner = document.getElementById("InputOwner");
let client = document.getElementById("InputClient");
let nb_dev = document.getElementById("InputNbDeveloper");
let estimate_time = document.getElementById("InputDuration");

function addProject() {
  $.ajax({
      type: 'POST',
      url: '/creaproject',
      contentType : 'application/json',
      data : JSON.stringify({
        "name" :name.value,
        "thematic": thematic.value,
        "owner":owner.value,
        "client":client.value,
        "nb_dev":nb_dev.value,
        "estimate_time":estimate_time.value
      }),
      dataType: 'json',
      success: function(data) {
      },
      error:function(error){
        console.log("Error:"+error);
      }
   });
}

function checkAndAdd() {

  if(name.value === "" || thematic.value === ""){
      alert("Tous les champs obligatoires ne sont pas remplis !");
  }
  else {
    console.log("champs remplis !");
    document.location.href="/project";
 }
}

checkCreaproj.addEventListener('click',function() {
  checkAndAdd();
  addProject();
});

cancelCreaproj.addEventListener('click',function() {
  document.location.href="/";
});

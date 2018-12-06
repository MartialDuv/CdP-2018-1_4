const checkCreaproj = document.getElementById("btncreaproj");
const cancelCreaproj = document.getElementById("btncancelproj");
const notif =  document.createElement("p");
const notified = document.querySelector("#notif");

let name = document.getElementById("InputProjectName");
let thematic = document.getElementById("InputTheme");
let owner = document.getElementById("InputOwner");
let client = document.getElementById("InputClient");
let nb_dev = document.getElementById("InputNbDeveloper");
let estimate_time = document.getElementById("InputDuration");

//let url = 'http://localhost:3000/creaproject?format=json&callback=?';

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
       console.log("recupéré! !");
      },
      error:function(error){
        console.log("Error:"+JSON.stringify(error));
      }
   });
}

function checkAndAdd() {

  if(name.value === "" || thematic.value === ""){
      //$('#exampleModal').modal('show');
      alert("Vous n'avez pas rempli tous les champs !");
  }
  else {
    console.log("champ rempli !");
    //document.location.href="/creaproject/project";
 }
}

checkCreaproj.addEventListener('click',function() {
  checkAndAdd();
  addProject();
});

cancelCreaproj.addEventListener('click',function() {
  document.location.href="/";
});

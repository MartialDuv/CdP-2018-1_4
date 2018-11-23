 const checkCreaproj = document.getElementById("btncreaproj");
 const cancelCreaproj = document.getElementById("btncancelproj");


function checkAndAdd() {
  // let name_proj = document.querySelector("#InputProjectName");
  // let theme_proj = document.querySelector("#InputTheme");
  let name = document.getElementById("InputProjectName");
  let thematic = document.getElementById("InputTheme");
  let owner = document.getElementById("InputOwner");
  let client = document.getElementById("InputClient");
  let nb_dev = document.getElementById("InputNbDeveloper");
  let estimate_time = document.getElementById("InputDuration");

  if(name.value === "" || thematic.value === ""){
      //$('#exampleModal').modal('show');
      alert("Vous n'avez pas rempli tous les champs !");
  }
  else {
    console.log("ok !");
    // // document.getElementById("button-create").addEventListener("click", function(){
    //
    document.location.href="/project";
 }

}

checkCreaproj.addEventListener('click',function() {
  checkAndAdd();
});

cancelCreaproj.addEventListener('click',function() {
  document.location.href="/";
});

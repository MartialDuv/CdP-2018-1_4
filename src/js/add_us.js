const checkAddus = document.getElementById("btnaddus");
const cancelAddus = document.getElementById("btncanceladdus")


function checkAndAdd() {
 let id = document.getElementById("InputUSId");
 let difficulty = document.getElementById("InputDifficulty");
 let description = document.getElementById("InputDescription");


 if(id.value === "" || difficulty.value === "" || description.value === ""){
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

// checkCreaproj.addEventListener('click',check);
checkAddus.addEventListener('click',function() {
 checkAndAdd();
});

cancelAddus.addEventListener('click',function() {
  document.location.href="/project";
});

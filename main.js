function changeClass(){
  //grab current class of th eli element
  var showHideElement = document.getElementById("main-nav-ul");
  if(showHideElement.classList.contains("show")){
    document.getElementById("main-nav-ul").classList.remove("show");
    document.getElementById("main-nav-ul").classList.add("hide");
  }else{
    document.getElementById("main-nav-ul").classList.add("show");
    document.getElementById("main-nav-ul").classList.remove("hide");
  };
  console.log("test");
};

function changeClass(){
  //grab current class of th ul element
  var showHideElement = document.getElementById("main-nav-ul");
  if(showHideElement.classList.contains("show")){
    document.getElementById("main-nav-ul").classList.remove("show");
    document.getElementById("main-nav-ul").classList.add("hide");
    document.getElementById("header-info").classList.remove("hide");
    document.getElementById("header-info").classList.add("show");
  }else{
    document.getElementById("main-nav-ul").classList.add("show");
    document.getElementById("main-nav-ul").classList.remove("hide");
    document.getElementById("header-info").classList.remove("show");
    document.getElementById("header-info").classList.add("hide");
  };
  console.log("test");
};

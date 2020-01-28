function changeClass(){
  //grab current class of th eli element
  var showHideElement = document.getElementByClassName("nav_li");
  if(showHideElement.classList.contains("show")){
    document.getElementByClassName("nav_li").classList.remove("show");
    document.getElementByClassName("nav_li").classList.add("hide");
  }else{
    document.getElementByClassName("nav_li").classList.add("show");
    document.getElementByClassName("nav_li").classList.remove("hide");
  };
  console.log("test");
};

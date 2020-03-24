// alert("hello")

function navigation() {
  let icon = document.getElementById("icon");
  let nav = document.getElementById("myTopNav");
  let lessonList = document.getElementById("lesson-nav");
  let articleList = document.getElementById("article-nav");
  let hiddenItems = document.querySelectorAll(".hidden-items")

  icon.addEventListener("click",() =>{
    if (!nav.classList.contains("responsive")){
      nav.classList.add("responsive");
    } else{
      nav.classList.remove("responsive")
    }

  });

  lessonList.addEventListener("click",()=>{
    if (!hiddenItems[0].classList.contains("lesson-items")){
      hiddenItems[0].style.display = "none";
      hiddenItems[0].classList.add("lesson-items");
    } else{
      hiddenItems[0].style.display = "block";
      hiddenItems[0].classList.remove("lesson-items");
    }
  });

  articleList.addEventListener("click",()=>{
    if (!hiddenItems[1].classList.contains("article-items")){
      hiddenItems[1].style.display = "none";
      hiddenItems[1].classList.add("article-items");
    } else{
      hiddenItems[1].style.display = "block";
      hiddenItems[1].classList.remove("article-items");
    }
  });
}

function run() {
  navigation()
}
run()

const shareBtn = document.getElementById("share-btn")
const smedia = document.getElementById("smedia")

shareBtn.addEventListener("click", function() {
  smedia.classList.toggle("smedia--show")
  if (smedia.classList.contains("smedia--show")) {
    shareBtn.style.color = "#fff"
    shareBtn.style.backgroundColor = "hsl(214, 17%, 51%)"
  } else {
    shareBtn.style.color = "hsl(214, 17%, 51%)"
    shareBtn.style.backgroundColor = "hsl(210, 46%, 95%)"
  }
}) 

shareBtn.addEventListener("mouseover", function() {
  shareBtn.style.color = "#fff"
  shareBtn.style.backgroundColor = "hsl(214, 17%, 51%)"
})
shareBtn.addEventListener("mouseout", function() {
  shareBtn.style.backgroundColor = "hsl(210, 46%, 95%)"
  shareBtn.style.color = "hsl(214, 17%, 51%)"
})
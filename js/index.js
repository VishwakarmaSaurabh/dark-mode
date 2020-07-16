document.getElementById("night").addEventListener("click", (event) => {
  document.getElementById("bg").classList.toggle("dark");
  if (document.getElementById("bg").classList.contains("dark")) {
    document.getElementById("night").style.borderColor = "white";
    document.getElementById("night").style.color = "white";
  } else {
    document.getElementById("night").style.borderColor = "black";
    document.getElementById("night").style.color = "black";
  }
});

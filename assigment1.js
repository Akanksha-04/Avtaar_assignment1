function Clickme() {
    let t = document.getElementById("input").value;
    const d = new Date();
    let text = d.toLocaleString();
    var id = Math.floor(Math.random() * 100);
    if (t == 0) {
      window.alert("enter a name first");
      return;
    }
    document.getElementById("name").innerHTML = t;
    document.getElementById("box").style.display = "none";
    document.getElementById("id").innerHTML = id;
    document.getElementById("date").innerHTML = text;
  }
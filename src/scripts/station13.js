function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  var s = document.getElementById("check").checked
  // console.log(s)
  if (s) {
    document.getElementById("text").style.backgroundColor = "red"
  } else {
    document.getElementById("text").style.backgroundColor = "transparent"
  }
}

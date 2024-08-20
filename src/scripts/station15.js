function displayList() {
  const fruits = document.getElementById("fruits")

  fruits.innerHTML = `<ul>`+fruits.innerHTML.replace(/p/g, "li")+`</ul>`
  // console.log(fruits.innerHTML)
}

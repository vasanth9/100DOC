const addImages = () => {
const imageDiv = document.getElementById("imgdiv");

let image = '<img src="../../assets/slidersimage.jfif" />';

let innerDiv =""
for (let i = 0; i <= 16; i++) {
  innerDiv += image;
}
imageDiv.innerHTML = "<div>" + innerDiv + "</div>";

}

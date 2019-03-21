$(document).ready(main);
contador = true;
function main() {
$(".menu_bar").click(function () {
if (contador) {
$("nav").animate({
left: "0"
});
contador=false;
}
else{
contador=true;
$("nav").animate({
left:"-100%"
});
}
});
}
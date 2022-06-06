$(document).ready(function(){
$('.list-header').click(function(event){
$(this).toggleClass('active').next().slideToggle(300);
});
});
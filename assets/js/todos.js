// //Check of ToDos by clicking
// $('li').click(function(){
// 	// $(this).css("color", "grey")
// 	// $(this).css("text-decoration","line-through");

// 	//if li is grey
// 	if ($(this).css("color") === "rgb(128, 128, 128)") {
// 		$(this).css({
// 		color: "black",
// 		textDecoration: "none"
// 	});
// 	}else {
// 	$(this).css({
// 		color: "grey",
// 		textDecoration: "line-through"
// 	});}
// });
$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete 
$("ul").on("click", "span",function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// //Adding new ToDos
// $("input[type='text'").keypress(function(event){ 
// it should actually be: $("input[type='text']").keypress(function(event){
$("input[type = 'text']").keypress(function(event){
	if (event.which ===13) {
		//taking new input from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to UL
		$("ul").append("<li><span><i></i></span> " + todoText+ "</li>")
	};	
});
$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
});
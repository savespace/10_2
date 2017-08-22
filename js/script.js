$(function() {
	var span = $('span');
	$("span:even").css('color', 'red');

	var paragraf = $('p');
	paragraf.each(function(index, element) {
		
		var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
		$(element).append(button);
	});

	$("button").click(function() {
		alert($(this).attr("data-tmp"));
	});

	$(".ramka-js").css("border","1px dotted red");
	$("article").css("font-size", "12px");
	$(".strong-js").css("font-weight", "bold");
});
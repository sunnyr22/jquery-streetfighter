$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	})
	.mousedown(function() {
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").show();
		//hadouken sound
		//show hadouken and animate it right
	})
	.mouseup(function() {
		console.log("mouseup");
		//ryu goes bakc to ready position
	})
});


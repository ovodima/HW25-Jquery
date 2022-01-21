$(".test").css("color", "red");
$("h2, .test").css("color", "red");
$("p + p").css("color", "red");
$("li.www ~ li").css("color", "red");
$("h2  i").css("color", "red");
$("h2 > i").css("color", "orange");

 $("h2:not(.test)").css("color", "red");
 $(":header:not(.test)").css("color", "green");
 $(":header").next(":header").css("color", "yellow");
 $(":header.test").next(":header.test").css("color", "blue");


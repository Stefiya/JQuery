/*
$("#btn1").click(
function fn1(){
	$("#firstdiv").fadeToggle(3000);
}
);
*/

/*
$(document).ready(function()
{
	$("#btn1").click(fn1);
	function fn1()
	{
	$("#firstdiv").fadeToggle();
}
});
*/
/*

$(document).ready(function()
{
	//$("#btn1").click(fn1);  //simple click
	//$("#btn1").dblclick(fn1);  //double click
	//$("#firstdiv").mouseenter(fn1); //mouse enter
	//$("#firstdiv").mouseleave(fn2); //mouse leave
	 // $("firstdiv").hover(fn1,fn2); 
	function fn1()
	{
	$("#firstpara").fadeOut();	
}
function fn2()
{
	$("#firstpara").fadeIn();
}
});
*/

$(document).ready(function()
{
/*
$("#btn2").click(fn1);
$("#btn3").click(fn2);
function fn1()
	{
		$("#firstdiv").hide();
	}
function fn2()
	{
		$("#firstdiv").show();
	}
*/

/* effects
	$("#btn2").click(function(){
		$("#firstdiv").hide();
	});
	
	$("#btn3").click(function(){
		$("#firstdiv").show();
	});
	$("#btn4").click(function(){
		$("#firstdiv").toggle();
	});
	$("#btn5").click(function(){
		$("#firstdiv").slideUp();
	});
	$("#btn6").click(function(){
		$("#firstdiv").slideDown();
	});
	$("#btn7").click(function(){
		$("#firstdiv").slideToggle();
	});
	*/
	/*$("#btn8").click(function(){
		$("#squre").animate({
		left:'150px',opacity:'.4'
		},2000);
	});*/
	
	/*$("#btn9").click(function(){
		$("#firstdiv").fadeToggle(2000,function(){
		alert('checking');
		});
	});*/
	
	$("#btnt").click(function(){
		
		//$("#firstdiv").slideUp(2000);
		//$("#firstdiv").slideDown(2000);
		//$("#firstdiv").fadeOut(2000);
		//$("#firstdiv").fadeIn(2000);
		$("#firstdiv").slideUp(2000).slideDown(2000).fadeOut(2000).fadeIn(2000);
	});	
	
	
	
});



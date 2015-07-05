var iDrew=false;
window.onload=function(){
		var color=['#1BBC9D','#E74D3D','#2ACB6E','#F1C410'];
					addColor(color);
		}
window.onscroll=function(){
	scrollFix();
	showCirle();
}
function addCircle(id,number,iColor){
	var circle = new ProgressBar.Circle("#"+id, {
		color: iColor,
		strokeWidth: 4,
		trailWidth: 1,
		duration: 1500*number*0.01,
		text: {
		value: '0'
		},
	step: function(state, bar) {
		bar.setText((bar.value() * 100).toFixed(0));
	}
	});

		circle.animate(number*0.01)
}
function addColor(color){
	var circle=document.getElementById("cirle");
	var p=circle.getElementsByTagName("p");
	for(var i=0,j=0;i<p.length;i++){
		if(p[i].className=="text"){
			p[i].style.color=color[j];
			j++;
		}
	}
}
function scrollFix(){
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var menu=document.getElementById("menu");
	if(scrollTop>=700){
		menu.style.position="fixed";
		menu.style.top=0;
	}else{
		menu.style.position="absolute";
		menu.style.top=700+"px";
	}
}
function addPage(){
	var page=document.getElementById("page4");
}
function showCirle(){
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	if(scrollTop>=1400&&!iDrew){
			
			addCircle("js",60,'#1BBC9D');
			addCircle("html",90,'#2ACB6E');
			addCircle("css",80,'#E74D3D');
			addCircle("photoshop",80,'#F1C410');

			iDrew=true;
	}
}
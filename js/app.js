$(function(){
	$('#dowebok').fullpage({
		sectionsColor: ['#1bbc9b', '#9C58B6', '#7BAABE', '#ED6461'],
		anchors: ['page1', 'page2', 'page3', 'page4'],
		menu: '#menu',
		afterLoad: function(anchorLink, index){
			if(index == 2){
				$('.section2').find('h4').delay(100).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				$('.section2 .ability').delay(100).animate({
					right: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == '3'){
				$('.timebox').delay(100).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				$('.school').delay(100).animate({
					right: '0'
				}, 1500, 'easeOutExpo');
			}
		},
		onLeave: function(index, direction){
			if(index == '2'){
				$('.section2').find('h4').delay(100).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
				$('.section2 .ability').delay(100).animate({
					right: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '3'){
				$('.timebox').delay(100).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
				$('.school').delay(100).animate({
					right: '-120%'
				}, 1500, 'easeOutExpo');
			}
		}
	});
});
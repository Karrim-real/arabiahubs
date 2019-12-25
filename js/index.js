$(document).ready(function() {
	// $('button').addClass('btn btn-success');
	// $('.btn-default').addClass('btn btn-danger');
	// $('#target1').addClass('Shake')
	// $('#target2').remove();
	// //$('#target4').css({ color: 'yellow', backgroundColor: 'pink'});
	// $('#target6').css({margin: '20px', border: '8px dotted black'});
	// $('#target3').prop('disabled', true)
	// $('.jumbotron').css({color: 'white', backgroundColor: '#546976', border: '3px groove green'})
	// $('h1').html('Welcome To Learning Community , Where Every Africa Learn Coding free').addClass('animated flip');
	// // $('#target3').remove();
	// $('#target3').appendTo('.right')
	// // $('#target6').appendTo('.left')
	// $('.right').clone().appendTo('.left')
	// $('#target8').addClass('bounceIn')
	// $('#target7').addClass('bounceOut')
	// $('h2').addClass('animated zoomInUp')
	// $('.target:nth-child(3)').addClass('animated shake');
	// $('.target:odd').addClass('animated swing')
	// $('#target2').on('mouseover', function() {
	// 	$('.answer').html('<b> This is Your Answer</b>')
	// })
	
	// var url= 'http://hn.algolia.com/api/v1/search?query=javascript';
	// $.getJSON(url, function(data) {
	// 	var allNews = data.hits;
	// 	console.log(allNews);
	// 	var eachNews = '';

	// 	allNews.map(function (item, index, array) {
			
	// 		$('.question').on('click', function (){
	// 			eachNews += "<div>";
	// 			eachNews += item.title;
	// 			eachNews +="<div>";
	// 			$('.answer').html(eachNews);
	// 		});
			
	// 	});
	// })

	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position) {
			$('.answer').html('longitude ' + position.coords.longitude + '<br>' +
				'latitude ' + position.coords.latitude
				);

			
		});
	};
});

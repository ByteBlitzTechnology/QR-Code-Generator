function htmlEncode(value) 
{
	return $('<div/>').text(value).html();
	}

	$(function () 
	{

		$('#generate').click(function () 
		{
		let finalURL = 'https://chart.googleapis.com/chart?cht=qr&chl=' + htmlEncode($('#content').val()) + '&chs=160x160&chld=L|0'
		$('.qr-code').attr('src', finalURL);
	});	
});
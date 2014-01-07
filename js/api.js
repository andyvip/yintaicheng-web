var BASE_URL = 'http://enginepri.se:8000/path/';

function getPath(start, end, callback)
{
	var requestUrl = BASE_URL + start + "=" + end;
	$.getJSON(requestUrl, function(data){
		callback(data)
	});	
}
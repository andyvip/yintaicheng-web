var BASE_URL = 'http://localhost:8000/path/';

function getPath(start, end, callback)
{
	var requestUrl = BASE_URL + start + "/" + end;
	console.log(requestUrl)
	$.getJSON(requestUrl, function(data){
		callback(data)
	});	
}
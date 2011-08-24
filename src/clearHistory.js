chrome.windows.onRemoved.addListener(function(){
	chrome.history.deleteAll(function (){});
});
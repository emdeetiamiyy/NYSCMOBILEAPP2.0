

	function getNews(){
		var result = document.getElementById("newsContent");
		
	var hr = new XMLHttpRequest();
	$.mobile.allowCrossDomainPages = true;
	$.support.cors = true;
	$.mobile.phonegapNavigationEnabled = true;
	
	hr.open("GET","http://admin.nyscmobile.org/login/newsOutput.php",true);
	// alert('ok');
	hr.setRequestHeader("Content-type","application/json",true);
	hr.onreadystatechange = function(){
		// alert('yes');
		if(hr.readyState ==4 && hr.status == 200){
			// alert('vary');
			var data =    JSON.parse(hr.responseText); //hr.responseText;
			// alert(data[0]['title']);
			
			
			var output =  '<div data-role="listview" data-filter="true" >';
			for(var obj in data){
		output +='<div data-role="collapsible" data-theme="e"><h3><b style="color:#156E19">'+ data[obj].title+'</b></h3>';
		output+='<div><ul><li><b style="color:#156E19">'+ data[obj].title +'</b></li><br>';
		output += '  <b>'+data[obj].description + '</li>';
				
				output +='</ul></div></div>';
		}
			output += '</div>';
			// alert(output);
			
			document.getElementById('newsContent').innerHTML = output;
			}
		
		}
	hr.send(null);
	var res = "MAKE SURE YOU CONNECT TO THE INTERNET AND THEN REFRESH THIS PAGE";
	result.innerHTML = res.fontcolor("#156E19");
	}
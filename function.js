// App Step 9: company
'use strict';
var global_url='https://datablok.id/v0/';

function loadXHR(url,obj,callback){
	var request = new XMLHttpRequest();
	var dbParam = JSON.stringify(obj);

	request.onload=function(){		
		if (request.readyState===4){
			var paket = JSON.parse(request.responseText);
			// alert(paket.msg);
			callback(paket);
		}
		else {
			console.log('Network request failed with response ' + request.status + ': ' + request.statusText)
		}
	};
	request.open('POST', url);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.send(dbParam);
}

function blokID (blok){
	var blokend = blok;
	var blokend3 = blokend.split("-");
	return blokend3[2];
}

function tglIna(tgl){
	var bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nop", "Des"];
	return tgl.substr(8,2)+'-'+bulan[parseInt(tgl.substr(5,2))]+'-'+tgl.substr(2,2) +' ' +tgl.substr(11,5);
}

function timeID(blok){
	var blokend = blok;
	var blokend3 = blokend.split("-");
	return blokend3[0];
}	

function pleaseWait(){
	return "Please wait ...";
}


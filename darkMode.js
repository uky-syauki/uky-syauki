function darkMode(){
	document.getElementById('documentation').style.background = 'black';
	document.getElementById('main').style.background = 'black';
	for (let isi in a.valueOf()){
		a[isi].style.color = 'white';
		if (isi == 767) break;
	}
}

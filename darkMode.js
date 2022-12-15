// for website git-scm.com
function darkMode(){
	let putih = 'rgb(160,160,160)';
	document.getElementById('documentation').style.background = 'black';
	document.getElementById('main').style.background = 'black';
	document.getElementsByTagName('h1')[0].style.color = "rgb(180,180,180)";
	let a = document.getElementsByTagName('p'); // font
	for (let isi = 0; isi < a.length; isi++){
		a[isi].style.color = putih;
	}
	let p = document.getElementsByClassName('paragraph');
	for (let isi = 0; isi < p.length; isi++){
		p[isi].style.color = putih;
	}
	let ligh = document.getElementsByClassName('highlight');
	for (let isi = 0; isi < ligh.length; isi++){
		ligh[isi].style.background = 'rgb(55,55,55)';
	}
	let kunci = document.getElementsByTagName('code');
	for (let isi = 0; isi < kunci.length; isi++){
		kunci[isi].style.background = 'rgb(55,55,55)';
		kunci[isi].style.color = putih;
	}
	let h3 = document.getElementsByTagName('h3');
	for (let i = 0; i < h3.length; i++){
		h3[i].style.color = 'red';
	}
}
darkMode();

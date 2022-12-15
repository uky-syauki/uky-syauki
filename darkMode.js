// for website git-scm.com
function darkMode(){
	let putih = 'rgb(160,160,160)';
	let border = 'rgb(130,130,130)';
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
	let pre = document.getElementsByTagName('pre');
	let ligh = document.getElementsByClassName('highlight');
	for (let isi = 0; isi < ligh.length; isi++){
		ligh[isi].style.background = 'rgb(55,55,55)';
		pre[isi].style.border = border;
	}
	let kunci = document.getElementsByTagName('code');
	for (let isi = 0; isi < kunci.length; isi++){
		kunci[isi].style.background = 'rgb(55,55,55)';
		kunci[isi].style.color = putih;
		kunci[isi].style.border = border;
	}
	let h3 = document.getElementsByTagName('h3');
	for (let i = 0; i < h3.length; i++){
		h3[i].style.color = 'red';
	}
}
darkMode();

// with code ninja
if(true){let pth='rgb(160,160,160)';let bdr='rgb(130,130,130)';document.getElementById('documentation').style.background ='black';document.getElementById('main').style.background='black';document.getElementsByTagName('h1')[0].style.color="rgb(180,180,180)";let a=document.getElementsByTagName('p');for(let i=0;i<a.length;i++){a[i].style.color=pth;}let b=document.getElementsByClassName('paragraph');for(let i=0;i<b.length;i++){b[i].style.color=pth;}let c=document.getElementsByTagName('pre');let d=document.getElementsByClassName('highlight');for(let i=0;i<d.length;i++){d[i].style.background='rgb(55,55,55)';c[i].style.border=bdr;}let e=document.getElementsByTagName('code');for(let i=0;i<e.length;i++){e[i].style.background='rgb(55,55,55)';e[i].style.color=pth;e[i].style.border=bdr;}let f=document.getElementsByTagName('h3');for(let i=0;i<f.length;i++){f[i].style.color='red';}}

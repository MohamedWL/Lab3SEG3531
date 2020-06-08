function movetosecondpage(){
	window.open("page2.html", "_top");
}

function movetohomepage(){
	window.open("index.html", "_top");
}

function movetopanier(){
	window.open("panier.html", "_top");
	localStorage.setItem("fir",qttTofu);
	localStorage.setItem("sec",qttPain);
	localStorage.setItem("thi",qttCereale);
	localStorage.setItem("fou",qttKiwi);
	localStorage.setItem("fif",qttCajou);
	localStorage.setItem("six",qttLaitue);
	localStorage.setItem("sev",qttMoza);
	localStorage.setItem("eig",qttFilet);
	localStorage.setItem("nin",qttBoeuf);
	localStorage.setItem("ten",qttOrange);
	localStorage.setItem("ele",qttHuile);
	localStorage.setItem("twe",qttCarotte);
	
	var prxTofu = document.getElementById('qttTof').value * 1;
	var prxPain = qttPain * 1.3;
	var prxCereale = qttCereale * 1.5;
	var prxKiwi = qttKiwi * 3;
	var prxCajou = qttCajou * 2.1;
	var prxLaitue = qttLaitue * 2.4;
	var prxMoza = qttMoza * 2.5;
	var prxFilet= qttFilet * 3.4;
	var prxBoeuf = qttBoeuf * 23;
	var prxOrange = qttOrange * 8;
	var prxHuile = qttHuile * 9;
	var prxCarotte = qttCarotte * 7;
	var prxTotal = prxTofu+prxPain+prxCereale+prxKiwi+prxCajou+prxLaitue+prxMoza+prxFilet+prxBoeuf+prxOrange+prxHuile+prxCarotte;
	
	localStorage.setItem("aaa",prxTofu.toString());
	localStorage.setItem("bbb",prxPain);
	localStorage.setItem("ccc",prxCereale);
	localStorage.setItem("ddd",prxKiwi);
	localStorage.setItem("eee",prxCajou);
	localStorage.setItem("fff",prxLaitue);
	localStorage.setItem("ggg",prxMoza);
	localStorage.setItem("hhh",prxFilet);
	localStorage.setItem("iii",prxBoeuf);
	localStorage.setItem("jjj",prxOrange);
	localStorage.setItem("kkk",prxHuile);
	localStorage.setItem("lll",prxCarotte);
	localStorage.setItem("mmm",prxTotal);
}

function fillRows(){
	document.getElementById("table").style.visibility = "visible";
	document.getElementById("tofu").innerHTML=localStorage.getItem("fir");
	document.getElementById("pain").innerHTML=localStorage.getItem("sec");
	document.getElementById("cereales").innerHTML=localStorage.getItem("thi");
	document.getElementById("kiwi").innerHTML=localStorage.getItem("fou");
	document.getElementById("cajou").innerHTML=localStorage.getItem("fif");
	document.getElementById("laitue").innerHTML=localStorage.getItem("six");
	document.getElementById("moza").innerHTML=localStorage.getItem("sev");
	document.getElementById("filet").innerHTML=localStorage.getItem("eig");
	document.getElementById("boeuf").innerHTML=localStorage.getItem("nin");
	document.getElementById("orange").innerHTML=localStorage.getItem("ten");
	document.getElementById("huile").innerHTML=localStorage.getItem("ele");
	document.getElementById("carotte").innerHTML=localStorage.getItem("twe");
	
	document.getElementById("prtofu").innerHTML=localStorage.getItem("aaa");
	document.getElementById("prpain").innerHTML=localStorage.getItem("bbb");
	document.getElementById("prcereales").innerHTML=localStorage.getItem("ccc");
	document.getElementById("prkiwi").innerHTML=localStorage.getItem("ddd");
	document.getElementById("prcajou").innerHTML=localStorage.getItem("eee");
	document.getElementById("prlaitue").innerHTML=localStorage.getItem("fff");
	document.getElementById("prmoza").innerHTML=localStorage.getItem("ggg");
	document.getElementById("prfilet").innerHTML=localStorage.getItem("hhh");
	document.getElementById("prboeuf").innerHTML=localStorage.getItem("iii");
	document.getElementById("prorange").innerHTML=localStorage.getItem("jjj");
	document.getElementById("prhuile").innerHTML=localStorage.getItem("kkk");
	document.getElementById("prcarotte").innerHTML=localStorage.getItem("lll");
	document.getElementById("prtotal").innerHTML=localStorage.getItem("mmm");
}


var qttTofu;
function setTofu(){
  qttTofu = document.getElementById('qttTof').value;
}
var qttPain;
function setPain(){
  qttPain = document.getElementById('qttPai').value;
}
var qttCereale;
function setCereale(){
  qttCereale = document.getElementById('qttCer').value;
}
var qttKiwi;
function setKiwi(){
  qttKiwi = document.getElementById('qttKiw').value;
}
var qttCajou;
function setCajou(){
  qttCajou = document.getElementById('qttCaj').value;
}
var qttLaitue;
function setLaitue(){
  qttLaitue = document.getElementById('qttLai').value;
}
var qttMoza;
function setMoza(){
  qttMoza = document.getElementById('qttMoz').value;
}
var qttFilet;
function setFilet(){
  qttFilet = document.getElementById('qttFil').value;
}
var qttBoeuf;
function setBoeuf(){
  qttBoeuf = document.getElementById('qttBoe').value;
}
var qttOrange;
function setOrange(){
  qttOrange = document.getElementById('qttOra').value;
}
var qttHuile;
function setHuile(){
  qttHuile = document.getElementById('qttHui').value;
}
var qttCarotte;
function setCarotte(){
  qttCarotte = document.getElementById('qttCar').value;
}

function DltPain(){
	var selection=document.getElementById("span").innerHTML;
	if(selection=="Sans Gluten"){
		var a = document.getElementById("pain");
		a.style.display='none';
		var b = document.getElementById("qttPai");
		b.style.display='none';
		var c = document.getElementById("CPain");
		c.style.display='none';
		var aa = document.getElementById("lblppp");
		aa.style.display='none';
	}	
}

function DltCer(){
	var selection=document.getElementById("span").innerHTML;
	if(selection=="Sans Gluten"){
		var bb = document.getElementById("cereal");
		bb.style.display='none';
		var cc = document.getElementById("lblCer");
		cc.style.display='none';
		var dd = document.getElementById("qttCer");
		dd.style.display='none';
		var ee = document.getElementById("CCereale");
		ee.style.display='none';
	}	
}

function DltFil(){
	var selection=document.getElementById("span").innerHTML;
	if(selection=="Vegetarien"){
		var bb = document.getElementById("imgFil");
		bb.style.display='none';
		var cc = document.getElementById("lblFil");
		cc.style.display='none';
		var dd = document.getElementById("qttFil");
		dd.style.display='none';
		var ee = document.getElementById("CFilet");
		ee.style.display='none';
	}	
}

function DltBoe(){
	var selection=document.getElementById("span").innerHTML;
	if(selection=="Vegetarien"){
		var bb = document.getElementById("imgBoe");
		bb.style.display='none';
		var cc = document.getElementById("lblBoe");
		cc.style.display='none';
		var dd = document.getElementById("qttBoe");
		dd.style.display='none';
		var ee = document.getElementById("CBoeuf");
		ee.style.display='none';
	}	
}
















window.onload=function(){

		var num1=document.getElementById("num1");
		var num2=document.getElementById("num2");
		var num3=document.getElementById("num3");
		var num4=document.getElementById("num4");
		var num5=document.getElementById("num5");
		var broadimg=document.getElementById("broad_img");

		num1.onmouseover=function test(){

			broadimg.src="img/597e8963N356df1c3.jpg"
		}
		num2.onmouseover=function test(){
			broadimg.src="img/5962ddb0N09483971.jpg"
		}
		num3.onmouseover=function test(){
			broadimg.src="img/597e8a21Nef53885e.png"
		}
		num4.onmouseover=function test(){
			broadimg.src="img/597e89d6Nc64732c0.png"
		}
		num5.onmouseover=function test(){
			broadimg.src="img/597e899aN11bd0a5f.png"
		}
		num6.onmouseover=function test(){
			broadimg.src="img/597e8915Nf8cd8ee1.jpg"
		}






var show=document.getElementById("show");
	var leftfix=document.getElementById("leftfix");
	var guag=document.getElementById("guag");
	var guaginp=document.getElementById("guaginp");
	
	show.onmouseover=function(){
		leftfix.style.display="block";
	}
	show.onmouseout=function(){
		leftfix.style.display="none";
	}
	guaginp.onclick=function(){
		guag.style.display="none";
	}










	broadimg.onmouseover=function(){
		document.getElementById("banner_img_left").style.display="block";

		document.getElementById("banner_img_right").style.display="block";
		
		

	}
	broadimg.onmouseout=function(){
		document.getElementById("banner_img_left").style.display="none";

		document.getElementById("banner_img_right").style.display="none";
		
		

	}

	
var nz=document.getElementById("nz");


   nz.onmouseout=function(){
   		nz.style.border="none";
}
//      nz.onmouseover=function(){
//     		nz.style.border-left="1px solid red";
//     		nz.style.border-right="1px solid red";
//     		nz.style.border-top="3px solid red";
//     		nz.style.border-bottom="3px solid #fff";

// }


}








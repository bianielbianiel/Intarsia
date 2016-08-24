var slideIndex = 0;
showDivs(slideIndex);
 

function plusDivs(n) {
  showDivs(slideIndex += n);

}

function showDivs(n) {
	
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
  refreshDot(slideIndex-1);//set dot backgroun color
}


function showDirect(n) {
slideIndex = n;
	
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {n = 1}    
  if (n < 1) {n = x.length}
  for (i = 0; i <= x.length-1; i++) {
     x[i].style.display = "none";  
  }
 x[n-1].style.display = "block";
refreshDot(n-1);//set dot backgroun color

}



//function  refershing slider indicators dots
//sets dot background color to curently displayed image number
function refreshDot(n){

	
	var dot = document.getElementsByClassName("dot");
	//console.log(dot);//for drbug only
	for(var i=0; i<=dot.length; i++){
		if(i==n){
			dot[n].style.backgroundColor = "#AAAAAA";

		}else dot[i].style.backgroundColor = 'transparent';
	}
}



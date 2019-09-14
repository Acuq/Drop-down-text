var pointerList = document.querySelectorAll(".service-2__drop-block")
var dropDownText = document.querySelectorAll(".service-2__drop-text-block")
var dropDownImg = document.querySelectorAll(".service-2__drop-img-arrow")
var shapeOne = 0
var shapeTwo = 0
var shapeThree = 0


   
pointerList[0].onclick = function(){
	
	if(shapeOne == 0){
	dropDownText[0].style.display = "block";
	dropDownImg[0].style.src = "img/ArrowDown.png";
	shapeOne++
		if(dropDownText[1].style.display == "block" || dropDownText[2].style.display == "block"){
			shapeTwo = 0
			shapeThree = 0
			dropDownText[1].style.display = "none";
			dropDownText[2].style.display = "none";
		}
	}
	
	else{
		dropDownText[0].style.display = "none";
		dropDownImg[0].style.src = "img/ArrowUp.png";
		shapeOne--
	}

}

pointerList[1].onclick = function(){
	
	if(shapeTwo == 0){
	dropDownText[1].style.display = "block";
	shapeTwo++
		if(dropDownText[0].style.display == "block" || dropDownText[2].style.display == "block"){
			shapeOne = 0
			shapeThree = 0
			dropDownText[0].style.display = "none";
			dropDownText[2].style.display = "none";
		}
	}
	
	else{
		dropDownText[1].style.display = "none";
		shapeTwo--
	}

}

pointerList[2].onclick = function(){
	
	if(shapeThree == 0){
	dropDownText[2].style.display = "block";
	shapeThree++
		if(dropDownText[0].style.display == "block" || dropDownText[1].style.display == "block"){
			shapeOne = 0
			shapeTwo = 0
			dropDownText[0].style.display = "none";
			dropDownText[1].style.display = "none";
		}
	}
	
	else{
		dropDownText[2].style.display = "none";
		shapeThree--
	}

}
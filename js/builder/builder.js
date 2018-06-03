//////////////// VARIABLES///////////
//NavigationBar
	//webName
var webName ="Byan Brone";
	//BarList
var navList =["Animal","People","Portrait","Vechicle","Wedding","Birthday"];
var subNavList1 = ["Events","Wedding","Birthday","Engagment","Ceremony"];
//Carousel
var imgNames = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg"];
//PhotoBook
var imgCount=[8,8,8,8,8,8];
//Footer

//////////////// INSERTION //////////////
// NAVIGATION_BAR
insertNavList("nav_list",navList);
insertText("titleName",webName);
insertText("webName",webName);
// insertIMG
insertImage(navList,imgCount);
//CAROUSEL
insertCarImages("carouselExampleIndicators",imgNames);
//////////////// FUNCTION//////////////
function insertNavList(eID, list){
	var navText ="";
	var navElement = document.getElementById(eID);
	for(var i = 0;i<list.length;i++){
		navText = navText + "<li id='navID"+(i)+"' class='nav-item'><a class='nav-link' href='#pSection-" +list[i] +"'>"+ list[i] +"</a></li>";
		navElement.innerHTML = navText;
		console.log(navText);
	}
}
function insertText(eID, text){
	document.getElementById(eID).innerHTML=text;
}
function insertSubNav(list){
	var subNavText ="";
	var navID = "navID"+(findI(list[0],navList));
	var navElement =document.getElementById(navID);
	var subNavElement = "";
	
	navElement.innerHTML="<li class='nav-item dropdown'><a class='nav-link dropdown-toggle' href='' id='navbarDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>"+list[0]+"</a><div class='dropdown-menu' ID='subNav"+navID+"' aria-labelledby='navbarDropdownMenuLink'></div>";

	subNavElement = document.getElementById("subNav"+navID);
	console.log(subNavElement);
	for (var i = 1; i < list.length; i++) {
		var liElement = document.createElement("A");
    	liElement.setAttribute("class","dropdown-item");
    	liElement.setAttribute("href","#"+list[i]);
	    var item = document.createTextNode(list[i]);
	    liElement.appendChild(item);
	    subNavElement.appendChild(liElement);
	}
}
function findI(str,list){
	var index = 0;
	for (var i = 0; i < list.length; i++) {
		if(str ==list[i]){
			index=i;
		}
	}
	console.log(index);
	return index;
}
function insertCarImages(ID,list){
	document.getElementById(ID).innerHTML="";
	var cIndicationContainer = document.createElement("OL");
	cIndicationContainer.setAttribute("id","cIndication");
	cIndicationContainer.setAttribute("class","carousel-indicators");
	document.getElementById(ID).appendChild(cIndicationContainer);

	for (var i = 0; i < list.length; i++) {
		var indicatorElement = document.createElement("LI");
		if(i==0){
			indicatorElement.setAttribute("class","active");
		}
		indicatorElement.setAttribute("data-target","#carouselExampleIndicators");
		indicatorElement.setAttribute("data-slide-to",i);
		document.getElementById("cIndication").appendChild(indicatorElement);
	}
	// cContainer &Images
	var carouselContainer = document.createElement("DIV");
	carouselContainer.setAttribute("id","cContainer");
	carouselContainer.setAttribute("class","carousel-inner");
	document.getElementById(ID).appendChild(carouselContainer);
	for (var i = 0; i < list.length; i++) {
		var carouselItem = document.createElement("DIV");
		carouselItem.setAttribute("class","carousel-item");
		
		var content = document.createElement("img");
		content.setAttribute("class","d-block w-100");
		content.setAttribute("src","images/carousel/"+list[i]);

		carouselItem.appendChild(content);
		if(i==0){
			carouselItem.setAttribute("class","carousel-item active");
		}
		document.getElementById("cContainer").appendChild(carouselItem);
	}
	// Controller
		//Back
	var backController = document.createElement("A");
	backController.setAttribute("id","backID");
	backController.setAttribute("class","carousel-control-prev");
	backController.setAttribute("href","#carouselExampleIndicators");
	backController.setAttribute("role","button");
	backController.setAttribute("data-slide","prev");
	document.getElementById(ID).appendChild(backController);
		
		//Forward
	var forwardController = document.createElement("A");
	forwardController.setAttribute("id","forwardID");
	forwardController.setAttribute("class","carousel-control-next");
	forwardController.setAttribute("href","#carouselExampleIndicators");
	forwardController.setAttribute("role","button");
	forwardController.setAttribute("data-slide","next");
	document.getElementById(ID).appendChild(forwardController);
}
//IN PROGRESS
function insertImage(list,list2){
	var galleryElement = document.getElementById("gallery");
	galleryElement.innerHTML=""; //Just to empty the container
	for (var i = 0; i < list.length; i++) {
		var pSection = document.createElement("DIV");
		pSection.setAttribute("class","section parallax "+list[i]);
		pSection.setAttribute("id","pSection-"+list[i]);
		galleryElement.appendChild(pSection);

		var section = document.createElement("DIV");
		section.setAttribute("class","row");
		section.setAttribute("id",list[i]);
		galleryElement.appendChild(section);	
	}
	for (var i = 0; i < list.length; i++) {
		var caption = document.createElement("H1");
		var text = document.createTextNode(list[i]);
		caption.appendChild(text);
		document.getElementById("pSection-"+list[i]).appendChild(caption);
	}

	for (var i = 0; i < list.length; i++) {
		var target= document.getElementById("sectionImg");
		var text = document.createTextNode("."+list[i]+"::after{background-image: url('images/"+list[i]+"/img (1).jpg')}");
		target.appendChild(text);
	}

	for (var i = 0; i < list.length; i++) {
		var col12 = document.createElement("DIV");
		col12.setAttribute("class","col-md-12");
		col12.setAttribute("id","col"+list[i]);
		document.getElementById(list[i]).appendChild(col12);
	}
	for (var i = 0; i < list.length; i++) {
		var grid = document.createElement("DIV");
		grid.setAttribute("class","grid");
		grid.setAttribute("id","grid"+list[i])
		document.getElementById("col"+list[i]).appendChild(grid);
	}
	for (var i = 0; i < list.length; i++) {
		for (var k = 0; k < list2[i]; k++) {
			var imgBlock = document.createElement("DIV");
			imgBlock.setAttribute("class","hovereffect");
			imgBlock.setAttribute("id","imgBlock"+i+k); 
			document.getElementById("grid"+list[i]).appendChild(imgBlock);
		}
		for (var m = 0; m < list2[i]; m++) {
			var target = document.getElementById("imgBlock"+i+m);
			var imgLink = document.createElement("A");
			imgLink.setAttribute("href","images/"+list[i]+"/img ("+(m+1)+").jpg");
			imgLink.setAttribute("data-lightbox",list[i]);
			imgLink.setAttribute("data-title",list[i]);
			imgLink.setAttribute("id","imgLink"+i+m);
			target.appendChild(imgLink);
		}
			for (var t = 0; t < list2[i]; t++) {
				var target = document.getElementById("imgLink"+i+t);
				var imgContent = document.createElement("IMG");
				imgContent.setAttribute("class","img-thumbnail img-responsive imgThumb");
				imgContent.setAttribute("alt",list[i]);
				imgContent.setAttribute("src","images/"+list[i]+"/img ("+(t+1)+")_t.jpg");
				target.appendChild(imgContent);
			}

		for (var p = 0; p < list2[i]; p++) {
			var target = document.getElementById("imgBlock"+i+p);
			var overlayText = document.createElement("DIV");
			overlayText.setAttribute("class","overlay");
			overlayText.setAttribute("id","overlayText"+i+p);
			target.appendChild(overlayText);
		}
		for (var r = 0; r < list2[i]; r++) {
			var target = document.getElementById("overlayText"+i+r);
			var text = document.createElement("P");
			var content = document.createTextNode(list[i]);
			text.appendChild(content);
			target.appendChild(text);
		}
	}
}

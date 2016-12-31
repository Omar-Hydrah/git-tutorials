(function(){

var headerTags = document.getElementsByTagName("h1");

for(var i = 0; i < headerTags.length; i++){
	headerTags[i].onmouseover = function(){
		var colorsArray = ["#2a4d60", "#388e08", "#3a5cba", "#ba3a54", "#7edf3a", "#ab516e", "#eebc7d"];

		var randomNumber = Math.floor((Math.random() * 6) + 1 );
		console.log(randomNumber);

		this.style.color = colorsArray[randomNumber];
		console.log(colorsArray[randomNumber]);
		// this.style.backgroundColor = "#eee";
	};	
}


})();
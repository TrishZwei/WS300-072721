//start with JS detection
$('html').removeClass('no-js').addClass('js');

//vanilla alternative: 
//document.querySelector('html').classList = 'js';

const nav = $('.main-nav'); //stores our navigation element
let topOfNav = nav.position().top;
let heightOfNav = nav.height();
const theBod = $('body'); //stores the body element

//highlight nav element found here: https://codepen.io/joxmar/pen/NqqMEg
//converted to jQ3

let lastId,
	menuItems = nav.find('a'),
	scrollItems = menuItems.map( function(){
		let item = $($(this).attr('href'));
		//one line if statement
		if(item.length){ return item}
	})




//stickyNav function

function fixNav(){
	if($(window).scrollTop() >= topOfNav){
		theBod.addClass('fixed-nav');
		//takes nav out of flow since it becomes fixed
	}else{
		theBod.removeClass('fixed-nav');
		//puts the nav back into the flow since it is no longer fixed
	}

//highlight sticky elements
 var fromTop = $(this).scrollTop()+heightOfNav;

 	//get id of current scroll item
 	var cur = scrollItems.map( function(){
 		if( $(this).offset().top < fromTop+1) {
 			return this;

 		}
 	});

 	cur = cur[cur.length-1];
 	console.log(cur); //shows me what the current value of cur is

 	//ternary operator: shorthand if statement
 	//up to question mark: condition
 	//between question mark and colon is what the value of id should be set to if true
 	//after the colon set the value of id if the answer is false

// 	var id = cur && cur.length ? cur[0].id : '';
	if(cur && cur.length){
		id = cur[0].id;
	}else{
		id = '';
	}

	if (lastId !== id) {
       lastId = id;
       // Set/remove active class from li elements
       $('.main-nav .active').removeClass('active');
       $('[href="#'+id+'"]').addClass('active');
   }               


} //end fixNav

//listener for sticky nav

$(window).on('scroll', fixNav);


//when clicking on nav lis.....
let clicked = 0;
//checks for if the nav is still in the flow
$('.main-nav li a').on('click', function(e){
console.log('test');

//e captures the event object
clicked++; //adds 1 to our clicked



	if(this.hash !== ''){
		 //prevents a tag from jumping
		 e.preventDefault();
		//store the hash
		let hash = this.hash; //gets the value of the hash that was clicked

		let winTop = $(window).scrollTop();
		//scrollTop tells us where the window is before scrolling to the item clicked

		let hashPageY = $(hash).offset().top; 
		//finds where the anchor tag that was clicked - is on the page.
		let menuOffset = $('.main-nav').height(); //gets height of nav element

		if(winTop < hashPageY){
			//scrolling down
			if(hashPageY > topOfNav){
				//we should see the sticky nav
				hashPageY -= menuOffset;
				//remove menu value

				if(clicked == 1 && $('body.fixed-nav').length == 0){
				hashPageY -= menuOffset;
				//adding the offset again when it comes from the top of the page from the menu-- that menu that got taken out of the flow and affected the position of all the elemenents that followed after	
				}

			}else{
				console.log('we should see the nav go away');
			}

		}else{
			//scrolling up

			if(hashPageY > topOfNav){
				//sticky nav should be present
				hashPageY -= menuOffset;
			}else{
				clicked = 0
			}

		} //end if going up or down

		//jq animate method to add smooth page scroll

		let bodAnimate = 0; //has animation been activated?

		$('html, body').animate({
			scrollTop:(hashPageY)
		}, 800, function(){
			//this is getting called twice due to being put on two different elements
			if(bodAnimate == 0){
				//run animation
				bodAnimate++;
				//do history api stuff next
				let winStripHash = (window.location.href).split('#')[0];
				console.log(winStripHash);
				//changes URL without referesh and marks it in the browser history
				history.pushState((winStripHash), $('title').text(),winStripHash+hash);

			}

		})

	}//end if hash != '' 

}) //end of click on lis


$(window).on('load', function(){
//this gets when the images have ALSO been loaded
//so the page knows where the actual position of items are

	clicked = 0;
	//gets ulr of the window and splits it at the hash tag
	let url = (window.location.href).split('#'); 
	//the above splits into two items if there is a #

	if(url[1] != ''){
		//if the second value in the array is not empty
		$('.main-nav li a').each( function(){
			//find which item in the links match
			let href = $(this).attr('href').split('#')[1];

			if(url[1] == href){
				//for example 'images' == 'images'
				//trigger the anchor tag that matches after the #
				$(this).trigger('click');

			}
		})
	} 
})
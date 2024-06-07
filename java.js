

// for when contact form gets sent. Send dummy page, for now...
function popUp(){

    let popUp = window.open();
    popUp.document.write("Your message has been sent!");

}


// dropdown menu when 
function dropDown(){


    let dropped = document.getElementById('dropdown');

    if(dropped.style.display == 'flex'){
        dropped.style.display = 'none';
    }
    else{
        dropped.style.display = 'flex';
    }
    

}

// change anchor on click, for 150ms. Basically on click duration.
function divChange(menuItem){

    if(menuItem == 0){
        menuArray[0].style.color = 'white';
    }
    else if(menuItem == 1){
        menuArray[1].style.color = 'white';
    }
    else if(menuItem == 2){
        menuArray[2].style.color = 'white';
    }
    else{
        menuArray[3].style.color = 'white';
    }

    //anchorDiv.style.color = 'white';

    setTimeout(() => divRevert(menuArray[menuItem]),150);
    // anchorDiv.style.color = 'black';
}

// basic color revert function to get called after 150ms ^.
function divRevert(menuItem){
    menuItem.style.color = 'black';
}


//add logoanimation class to classlogo
let logos = document.getElementsByClassName('logoclass');

for(let i =0; i < 6; i++){
    
    this.setTimeout(function(){
        //do nothing but wait 2 seconds
        //console.log(i);
        logos[i].classList.add('logoanimation');


    },500 * i);

    
}





//array to hold nav menu items
let menuArray = [];
//grab menu nav elements with ID
let homeID = document.getElementById('homeid');
let skillsID = document.getElementById('skillsid');
let projectsID = document.getElementById('projectsid');
let contactID = document.getElementById('contactid');
// push elements into array.
menuArray.push(homeID);
menuArray.push(skillsID);
menuArray.push(projectsID);
menuArray.push(contactID);

// getelementsbyclassname returns array like object...
let menuButton = document.getElementsByClassName('menuicon')[0];
// Dropdown menu when user clicks "Menu"
menuButton.addEventListener("click", () => dropDown());

homeID.addEventListener("mousedown", () => divChange(0));
skillsID.addEventListener("mousedown", () => divChange(1));
projectsID.addEventListener("mousedown", () => divChange(2));
contactID.addEventListener("mousedown", () => divChange(3));

console.log(menuArray.length);

// anchorDiv.addEventListener("mouseup", () => divChange(1));



//measure screen distance and start animation once reaches section

let projectHeader = document.getElementsByClassName('projectanimation');
//let projectSmallHeader = document.getElementsByClassName('projectanimation02')[0];
//projectHeader.innerHTML = " ";


window.addEventListener('scroll',function(event){
    let screenLocation = window.scrollY;
    //console.log(`Screen location is ${screenLocation} now...`)
    //projectHeader.style.display = 'block';



    if(screenLocation > 1300){
        console.log("Longer than 1000 now...");
        projectHeader[0].innerHTML = 'Projects';

        projectHeader[1].classList.add("animationcall02");
        projectHeader[0].classList.add("animationcall");

        this.setTimeout(function(){
            projectHeader[1].innerHTML = 'Because experience matters';

        }, 2150);


    }

    if(screenLocation > 1301){
        console.log("Longer than 1000 now...");


    }




});














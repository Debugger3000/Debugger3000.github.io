

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
        menuArray[0].style.color = '#16797c';
    }
    else if(menuItem == 1){
        menuArray[1].style.color = '#16797c';
    }
    else if(menuItem == 2){
        menuArray[2].style.color = '#16797c';
    }
    else{
        menuArray[3].style.color = '#16797c';
    }

    //anchorDiv.style.color = 'white';

    setTimeout(() => divRevert(menuArray[menuItem]),150);
    // anchorDiv.style.color = 'black';
}

// basic color revert function to get called after 150ms ^.
function divRevert(menuItem){
    menuItem.style.color = '#fffffe';
}

// LOGO ANIMATION
//add logoanimation class to classlogo
// 2 1 0 - 5 4 3 - 8 7 6
let logos = document.getElementsByClassName('logoclass');
let logosOrder = [2,1,0,5,4,3,8,7,6,11,10,9];

let languageDiv = document.getElementById('language-section');
console.log(languageDiv.getBoundingClientRect.length);

function displayLanguages(){


    for(let i =0; i < logos.length; i++){
        
        this.setTimeout(function(){
            //do nothing but wait 2 seconds
            //console.log(i);
            logos[logosOrder[i]].classList.add('logoanimation');
            //console.log("logoS:"+i);

        },500 * i);
    }
}


function displayProjectHeader(){

    projectHeader[0].innerHTML = 'Projects';

    projectHeader[1].classList.add("animationcall02");
    projectHeader[0].classList.add("animationcall");

    this.setTimeout(function(){
        projectHeader[1].innerHTML = 'Because experience matters';

    }, 2150);



}



//----------------------------------
//NAV dropdowns..

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
//-----------------------------------------------


///--------------------------------------------------------------------
//measure screen distance and start animation once reaches section

let projectHeader = document.getElementsByClassName('projectanimation');
//let projectSmallHeader = document.getElementsByClassName('projectanimation02')[0];
//projectHeader.innerHTML = " ";

let body = document.body;
let winHeight = window.innerHeight;
let projectsDiv = document.getElementById('projects01');


window.addEventListener('scroll',function(event){

    let positionToStart = Math.floor(winHeight/2);
    let divDiff = languageDiv.getBoundingClientRect().top;
    if(divDiff < winHeight - languageDiv.getBoundingClientRect().height){
        displayLanguages();
    }

    let projectsTop = projectsDiv.getBoundingClientRect().top;
    let projectsHeight = projectsDiv.getBoundingClientRect().height;

    if(projectsTop < winHeight/2){

        displayProjectHeader();
    }

    let screenLocation = window.scrollY;
    //let height = body.scrollHeight;
    //console.log("body height;"+height);
    //console.log(`Screen location is ${screenLocation} now...`)
    //projectHeader.style.display = 'block';
    console.log(languageDiv.getBoundingClientRect().top);
    console.log("HEIGHT: "+languageDiv.getBoundingClientRect().height);
    console.log("WINDOW H: "+winHeight);



    // if(screenLocation > 1300){
    //     //console.log("Longer than 1000 now...");
    //     projectHeader[0].innerHTML = 'Projects';

    //     projectHeader[1].classList.add("animationcall02");
    //     projectHeader[0].classList.add("animationcall");

    //     this.setTimeout(function(){
    //         projectHeader[1].innerHTML = 'Because experience matters';

    //     }, 2150);


    // }

    // if(screenLocation > 1301){
    //     console.log("Longer than 1000 now...");
    // }

});

//---------------------------------------------------------



var innerDiv = document.querySelector('.introinnerdiv');

document.addEventListener("DOMContentLoaded", function(){

    innerDiv.classList.add("intro-animation");
    console.log("intro animation added.");

});


// ------------------------------------------------
//circle breathing animations...
let circleList = document.querySelectorAll('.circle-shapes');
let bubbleList = document.querySelectorAll('.float-circles');

//console.log(circleList.length);

document.addEventListener("DOMContentLoaded", function(){

    //circleList[0].classList.add('breathing-animation');
    breathing();
    //bubbleUp(0);

    console.log("after first................");
    setInterval(function(){
        removeBreathe();
        breathing();
        console.log("breathing ended....");

        //rising bubbles animation.
        //let rand = Math.floor(Math.random() * 2);
        // console.log("RANDOM AS: "+rand);
        //removeBubble();
        //bubbleUp(rand);

    },50000);
});

setInterval(function(){
    let rand = Math.floor(Math.random() * 2);
    console.log("RANDOM AS: "+rand);
    removeBubble();
    bubbleUp(rand);
},50000);


function breathing(){
    console.log("circle breath function triggered.")
    //for(let i = 0; i < 10; i++){

        //remove class from circle objects at animation restart
        //removeBreathe();
        

        for(let j = 0; j<7; j++){

            this.setTimeout(function(){
                //do nothing but wait 2 seconds
                //console.log(i);
                //circleList[j].classList.remove('.breathing-animation');
                // console.log("Added class: "+j);
                // console.log(circleList[j]);
                // console.log(circleList[7]);

                if(j == 1){
                    circleList[j].classList.add('breathing-animation-2');

                }
                else if(j == 4){
                    circleList[j].classList.add('breathing-animation-3');
                }
                else{
                    circleList[j].classList.add('breathing-animation');
                }

                
                //circleList[j].classList.add('breathing-animation');
        
            },(j * 6000) + 4000);

        }

    //}

}

//remove breathe class so it can restart again...
function removeBreathe(){

    for(let i = 0; i < circleList.length; i++){
        if(i == 1){
        circleList[i].classList.remove('breathing-animation-2');
        }
        else if(i ==4){
            circleList[i].classList.remove('breathing-animation-3');
        }
        else{
            circleList[i].classList.remove('breathing-animation');
        }
    }
    
}

// bubble floating animations

function bubbleUp(stream){

    console.log("BUBBLE RAN...");

     for(let i = 0; i<bubbleList.length; i++){

            if(stream == 0 && i < 3){
                this.setTimeout(function(){
                    bubbleList[i].classList.add('bubble-animation');
                    
                    
                    },(i * 6000) + 4000);

            }
            else if(stream == 1){
                this.setTimeout(function(){
                    bubbleList[i].classList.add('bubble-animation');
        
        
                },(i * 1000) + 2000);
            }

       
    }
}

function removeBubble(){

    for(let i = 0; i < bubbleList.length; i++){
        
        bubbleList[i].classList.remove('bubble-animation');
        
    }

}

// --------------------------------------------------------------------------















// let logos = document.getElementsByClassName('logoclass');

// for(let i =0; i < 6; i++){
    
//     this.setTimeout(function(){
//         //do nothing but wait 2 seconds
//         //console.log(i);
//         logos[i].classList.add('logoanimation');
//         console.log("logoS:"+i);

//     },500 * i);

    
// }












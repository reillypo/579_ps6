import * as moment from 'moment';


// code below is for removing Reilly's headshot
const pic = document.getElementById("reilly-photo");
const clicker1 = document.getElementById("remove-reilly-photo");

clicker1.addEventListener("click", deletePic)

function deletePic(){
    if(clicker1.innerHTML === "Remove Reilly's Picture"){
        pic.style.display = "none";

        clicker1.innerHTML = "Picture removed. Click again to bring it back.";
    }
    else{
        pic.style.display = "block";
        clicker1.innerHTML = "Remove Reilly's Picture";
    }
};

// code below is for deleting DOM element
const ya = document.querySelector("li:last-child");
const clicker2 = document.getElementById("delete_list_item");

clicker2.addEventListener("click", deleteDOM)

function deleteDOM(){
    ya.parentElement.removeChild(ya);
};

// code below is for changing about me color with button click
const clicker = document.getElementById("title_change_button");
const x = document.getElementById("about-me");


clicker.addEventListener("click", changeColor);


function changeColor(){
    //Write a condition determine what color it should be changed to
    if(clicker.innerHTML === "Change About Me Title Color"){
        // console.log(x.style.color)

        //change the background color using JS
        x.style.color = "#FF0000";
        //Change the text of the color using the span id color-name
        clicker.innerHTML = "Color changed! Click again to change back.";

    }
    else{
        //change the background color using JS
        x.style.color = "#ffffff";
        //Change the text of the color using the span id color-name
        clicker.innerHTML = "Change About Me Title Color";
    }
};

// Code below is for rotating pictures
setTimeout(() => {
    const images = [{
        url: 'https://fsl.umich.edu/files/fsl/triangle_2017.jpg',
        alt: 'Exterior shot of the University of Michigan Chapter of Triangle Fraternity.',
        description: 'I was an active member of the University of Michigan Triangle Fraternity chapter from 2016-2020.'
    }, {
        url: 'https://static1.squarespace.com/static/5a5ad2ca8a02c70357f3f50a/t/5a5aea0c0d9297b4ef514246/1611006722081/?format=1500w',
        alt: 'University of Michigan Sailing Team Burgee.',
        description: 'I also was a member of the UM sailing team during my undergrad, but became less involved in my junior and senior years.'
    }, {
        url: 'https://sites.google.com/a/umich.edu/mes/_/rsrc/1419802330316/home/university-of-michigan-logo.png',
        alt: 'University of Michigan Economics Department.',
        description: "I received a Bachelor's degree in Economics from the University of Michigan."
    }, {
        url: 'https://pbs.twimg.com/profile_images/1014201659927429120/mPz4f0D_.jpg',
        alt: 'University of Michigan Center for Entrepreneurship.',
        description: 'I received a minor in Entrepreneurship from the University of Michigan.'
    }];
      
    const featuredImage = document.getElementById("featured");
    const thumbnails = document.getElementById("thumbnails");
    const current_description = document.getElementById("current_description");
    
    function setFeaturedImageIndex(idx) {
        const img_details = images[idx];
        const imgElement = img_details.element;
        featuredImage.setAttribute("src", img_details.url);
        featuredImage.setAttribute("alt", img_details.alt);
        current_description.textContent = img_details.description;
    
        const previouslyHighlightedImage = images[highlightedImgIndex]
        previouslyHighlightedImage.element.removeAttribute('class');
    
        imgElement.setAttribute('class', 'highlighted');
    
        highlightedImgIndex = idx;
    
        clearTimeout(advanceTimeout);
    
        advanceTimeout = setTimeout(() => {
          setFeaturedImageIndex((idx+1)%images.length);
        }, 5000);
    }
    
    let advanceTimeout;
    let highlightedImgIndex = 0;
    
    for(let i = 0; i<images.length; i++) {
      const img_details = images[i];
      const imgElement = document.createElement("img");
      imgElement.setAttribute("src", img_details.url);
      imgElement.setAttribute("alt", img_details.alt);
    
      img_details.element = imgElement;
    // this is an event listener that waits for the user to hover over the thumbnail pictures
      imgElement.addEventListener("mouseover", () => {
        setFeaturedImageIndex(i);
      });
    
      thumbnails.append(imgElement);
    }
    
    setFeaturedImageIndex(highlightedImgIndex);
    }, 1000)

    // I am using Moment.js for my third party library to have a clock on my homepage
    const NowMoment = moment();

    var update = function() {
        document.getElementById("displayMoment")
        .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
    }
    setInterval(update, 1000);


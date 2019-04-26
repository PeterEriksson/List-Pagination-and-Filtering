/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

/* eslint-env es6 */
/* eslint-disable no-console */

/* eslint-env browser */

//GLOBAL VARIABLES:
//Select all the students
const listOfStudents = document.querySelector('.student-list').children;
//max nr of students per page
const studentsPerPage = 10;

let pageGlobal = 1;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
 

const showPage = (listOfStudents, page) => {
    let startIndex = (page * studentsPerPage) - studentsPerPage;
    let endIndex = page * studentsPerPage;
        
    for(let i =0; i<listOfStudents.length; i++) {
        listOfStudents[i].style.display = 'none';
            //works
        if(i >= startIndex && i < endIndex){
             listOfStudents[i].style.display = 'block';
                //works
        }
        
    }
}

//Call showPage
showPage(listOfStudents, pageGlobal); 


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/



//Determine how many pages are needed for the list by dividing the total number of list items by the max number of items per page
    let pagesNeeded = Math.ceil(listOfStudents.length / studentsPerPage); //Math.ceil takes away the decimals and rounds upwards. For example: 6.1 -> 7

//Create a div, give it the “pagination” class, and append it to the .page div
    const page = document.querySelector('.page');
    const div = document.createElement('div');
    div.setAttribute("class", 'pagination');
    page.append(div); //seems to work

//Add a ul to the “pagination” div to store the pagination links
    let ul = document.createElement('ul');
   // pagediv.appendChild(ul);
    div.appendChild(ul);


//for every page, add li and a tags with the page number text 
    for(let i = 1; i <= pagesNeeded; i++){
        let li = document.createElement('li');
        let a = document.createElement('a');
        
        ul.appendChild(li);
        li.appendChild(a);
        
        a.textContent = i;  
        a.href = '#';
        
        
    }
    


//Add an event listener to each a tag. When they are clicked call the showPage function to display the appropriate page

//select the a tags
let aTags = document.querySelectorAll('a');

//Add the active class name to the first pagination link initially.
aTags[0].className = 'active';

/*
Add a “click” event listener to each A element. A loop can be helpful here.
When a pagination link is clicked:
The active class name should be removed from all pagination links. A loop can be helpful for this step.
The active class name should be added to the link that was just clicked. The target property of the event object should be useful here.
The function to show a page should be called, passing in as arguments, the global variable for the list items, and the page number that should be shown. The text content of the A element that was just clicked can be helpful here.
*/

for(let i=0; i<aTags.length; i++){
    
    aTags[i].addEventListener('click', (e) => {
        
        //The active class name should be removed from all pagination links.   ??
        for(let i=0; i<aTags.length; i++){
            aTags[i].classList.remove('active'); //works
        }
        
        //get the nr of the button clicked
        const clickedA = e.target.textContent
        
        //test works
        console.log(clickedA);
    
            
       
        //The active class name should be added to the link that was just clicked.
        e.target.className = 'active'; //works
        
        //The function to show a page should be called
        
        
           
});

 
}



// Remember to delete the comments that came with this file, and replace them with your own code comments.
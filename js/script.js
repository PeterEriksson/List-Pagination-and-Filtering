/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



/* eslint-env es6 */
/* eslint-disable no-console */

/* eslint-env browser */



//GLOBAL VARIABLES:
//Select all the students
const listOfStudents = document.querySelector('.student-list').children;
//max nr of students per page
const studentsPerPage = 10;

//page 1 should be shown initially
let pageGlobal = 1;


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



//  Create the `appendPageLinks function` to generate, append, and add 
//  functionality to the pagination buttons.
const appendPageLinks = (listOfStudents) => {

//Determine how many pages are needed for the list by dividing the total number of list items by the max number of items per page
    let pagesNeeded = Math.ceil(listOfStudents.length / studentsPerPage); //Math.ceil takes away the decimals and rounds upwards. For example: 6.1 -> 7

//Create a div, give it the “pagination” class, and append it to the .page div
    const page = document.querySelector('.page');
    const div = document.createElement('div');
    div.setAttribute("class", 'pagination');
    page.append(div); //seems to work

//Add a ul to the “pagination” div to store the pagination links
    let ul = document.createElement('ul');
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


//Add a “click” event listener to each A element. A loop is used. 
for(let i=0; i<aTags.length; i++){
    
    //“click” event listener
    aTags[i].addEventListener('click', (e) => {
        
        //The active class name should be removed from all pagination links.
        for(let i=0; i<aTags.length; i++){
            aTags[i].classList.remove('active'); 
        }
        
        //get the nr of the button clicked
        const clickedA = e.target.textContent
        //change the value of the global variable pageGlobal. We will use pageGLobal when we call showPage
        pageGlobal = clickedA;

        //The active class name should be added to the link that was just clicked.
        e.target.className = 'active'; //works
        
        //The function to show a page should be called
        showPage(listOfStudents, pageGlobal); //seems to work. 
        
           
});

 }
 
} //end of appendPageLinks function

//call appendPageLinks function
appendPageLinks(listOfStudents);

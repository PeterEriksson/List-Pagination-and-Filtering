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

//Global variables:
//Select all the students
const listOfStudents = document.querySelector('.student-list').children;
//max nr of students per page
const studentsPerPage = 10;

const page = 1;

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
 
//PAGE PARAMETER?

//function showPage(list, page) {
//    let startIndex = (page * studentsPerPage) - studentsPerPage;
//    let endIndex = page * studentsPerPage;
//    
//    
//    for(let i=0; i<=list.length ; i++){
//        if(i >= startIndex && i <= endIndex){
//            list[i].style.display = 'block';
//        }
//        
//    }
//    
//    
//}

function showPage(listOfStudents) {
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

//list[0].style.display = 'none';
//list[1].style.display = 'none';
//works
showPage(listOfStudents); 


 
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.
let clickButton = document.querySelector("button");
let parat = document.querySelector("p");
let solve = document.querySelector(".solve");
let form2 = document.querySelector(".form2");
let courseNUmber;
let CGPA;
let dis = document.querySelector(".dis");


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


let name;
function collectName(){
    courseNUmber = (Number(document.querySelector("#courseNum").value))*2;
    
    name = document.querySelector("#Name").value;
    let d = document.querySelector(".d");
    let divider = 1;
 
    
    parat.append(name);
    for (let i =1; i <= courseNUmber; i++){
        let courseUnit = (i+1)/2;
        let courseGrade = (i/2);
        let courseInput = document.createElement("input");
        let courseLabel=document.createElement("label");
       
        solve.append(courseLabel);
        
        if (i%2==0){
            
            courseLabel.remove();
        }
        else{
            if ( i >1){
                courseLabel.append("Course " + ((i+1)/2));
            }
            else{
                courseLabel.append("Course " + i);
            }
        }
        solve.append(courseInput);
        if( i %2 == 0){
            courseInput.classList += (`courseGrade${courseGrade}`);
            courseInput.setAttribute("placeholder"," Course Grade");
        }
        else{
            courseInput.classList += (`courseUnit${courseUnit}`);
            courseInput.setAttribute("placeholder"," Course Unit");
            courseInput.setAttribute("type","number");
        }
        
        courseInput.classList.add("d");
        let breaker = document.createElement("br");
        if (i %2 == 0){
            solve.append(breaker);
        }
    }
    
    
    
    
   form2.style.visibility="visible";
   document.querySelector(".form").classList.add("help");

}

function pot(){
    let real= courseNUmber/2;
    
    let course = [];
    let courseGrade = [];
    for(let i=0; i < real; i++){
        let eema = (i+1);
        course[i]=Number(document.querySelector(`.courseUnit${eema}`).value);
    }

    for (let i = 0; i < real; i++){
        let ema = (i+1);
        courseGrade[i] = document.querySelector(`.courseGrade${ema}`).value;
        courseGrade[i] = convertGrade(courseGrade[i]);
    }
    let total = calculateTotal(course, courseGrade);
    let totalScore = addUpArrayItems(total);
    let courseUnitTotal = addUpArrayItems(course);

    CGPA = (totalScore / courseUnitTotal).toFixed(2);

    let recei = cgpaToClass(CGPA);


    let declare = `Congratulations ${name}!!!!! Your current CGPA is ${CGPA}, ${recei}`;
    dis.innerHTML = declare;
    modal.style.display = "block";
}

function convertGrade (grade){
    grade = grade.toUpperCase()
    if (grade === "A"){
        grade = 5;
    }
    else if (grade == "B"){
        grade = 4;
    }
    else if (grade == "C"){
        grade = 3;
    }
    else if (grade == "D"){
        grade = 2
    }
    else if (grade == "E"){
        grade = 1;
    }
    else{
        grade = 0
    }
    return grade;
}


// The function to get the total for each course
function calculateTotal(firstArray,secondArray){
    let total = [];
    for (let i =0; i<firstArray.length; i++){
        total[i]= firstArray[i] * secondArray[i];
    }
    return total
}

function cgpaToClass(currentCGPA){
    let some;
    if (currentCGPA >= 4.5){
        some = "You are currently in first class";
    }
    else if(currentCGPA >= 3.5 && currentCGPA <=4.49){
        some = "Your are currently in Second Class Upper";
    }
    else if(currentCGPA >= 2.5 && currentCGPA <=3.49){
        some = "You are currently in Second Class Lower";
    }
    else if(currentCGPA >= 1.5 && currentCGPA <=2.49){
        some = "You are currently in Third Class";
    }
    else{
        some = "You are in Pass Division"
    }
    return some;
}


// Function to add up all the item in an array into a single value
function addUpArrayItems (arrayToBeChanged){
    let b =0;
    for (let v in arrayToBeChanged){
        b += arrayToBeChanged[v];
    }
    return b;
    // return total;
}
clickButton.addEventListener("click", collectName);








// When the user clicks on the button, open the modal
btn.addEventListener("click",pot);
// btn.onclick = function() {
  
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
let answers = document.querySelectorAll('.question'); //sets variable answer to all class="question"
answers.forEach((event) => { //for each node in list answers => function
event.addEventListener('click', () => { //add on click
   if (event.classList.contains("active")) { //if in classes from above node is class active remove it, else add it
      event.classList.remove("active");
   } else {
      event.classList.add("active");
   }
})
})

    function showAlert(){
    alert("Thank You for sharing your opinion.This will go a long way in improving members experiece and also general betterment of the party.");
   }

   function alertUser(){
    alert("Thank You for showing interest.You will be notified through e-mail or SMS");
   }

   function fillForm(){
    alert("Kindly fill the form accurately with all the required details!");
   }

   function coreValues(){
    alert("Find attached core values of the Great Minds Party.");
   }

   function showAchievements(){
    alert("Find attached Achievements of the Great Minds Party.");
   }

   function showMilestones(){
    alert("Find attached Milestones of the Great Minds Party.");
   }

   function selectedOption(gender){
        alert("You selected:" + gender.value);
    }

    function thisOne(nationality){
        alert("You selected:" + nationality.value);
    }

    function voterRegistered(registered){
        alert("You selected:" + registered.value);
    }

    function membershipType(member){
        alert("You selected:" + member.value);
    }

     function multiParty(party) {
        alert("You selected:" + party.value);
    }

     function participationLevel(level){
        alert("You selected:" + level.value);

    }

    const burger =document.querrySelector('.burger');
     const navLinks =document.querrySelector('.navlinks');

     burger.addEventListener('click', ()=> {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
     });
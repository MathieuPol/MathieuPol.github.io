Article = {

    form: document.querySelector(".formElt"),

    





    init: function(event) {
        event.preventDefault();
        const btnSubmit = document.querySelector(".btnSubmit");
        btnSubmit.addEventListener("click",Article.handleSubmit);
           
    },

    handleSubmit: function(){
        event.preventDefault();
        inputTitle= document.querySelector(".inputTitle").value;
        inputContent= document.querySelector(".inputContent").value;
        NewH = document.createElement('h5');
        NewP = document.createElement('p')
        NewH.textcontent = inputTitle;
        NewP.textcontent = inputContent;
        console.log(NewP);

       // cardsContainer = document.querySelector('.cardsContainer');
      //  cardContainer = document.createElement('div').classList.add("card", "mb-3", "col-md-6", "col-lg-6");
  

        test = document.querySelector(".test");
        reTest = test.cloneNode(true);

        document.querySelector(".testContent").innerHTML = NewP.textcontent;

        document.querySelector('.cardsContainer').appendChild(reTest);




        console.log(reTest);






    },

    createNewCard: function(){
        let cardsContainer = document.querySelector('.cardsContainer');
        let cardContainer = document.createElement('div');
        cardContainer.classList.add("card");



    },

}

document.addEventListener("DOMContentLoaded", Article.init);
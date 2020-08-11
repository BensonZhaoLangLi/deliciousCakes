window.onload = function(){
    var questionBtn = document.getElementById("formTopic-1");
    var commentBtn = document.getElementById("formTopic-2");
    var orderBtn = document.getElementById("formTopic-3");
    var orderNumberInput = document.getElementById("orderNumber");

    /*Removing and adding hidden attribute to order number input, depending on radio input*/
    questionBtn.onclick = function(){
        console.log("clicked");
        orderNumberInput.classList.add("hidden");
    }

    commentBtn.onclick = function(){
        console.log("clicked");
        orderNumberInput.classList.add("hidden");
    }

    orderBtn.onclick = function(){
        console.log("clicked");
        orderNumberInput.classList.remove("hidden");
    }
}
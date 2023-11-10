const buttons= document.querySelectorAll(".orderButton");
buttons.forEach(function(button){
    button.addEventListener("click", function(){
        alert("Sorry, we are out of stock!"); 
    })
})


document.getElementById("feedButton").addEventListener("click", function(){
    document.getElementById("firstname").value = ""
    document.getElementById("lastname").value = ""
    document.getElementById("feedBox").value = ""
    alert("Thanks for your feedback!")
})

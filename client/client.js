let apiButton = document.getElementById("apiButton");
apiButton.addEventListener("click", function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           alert(xhttp.responseText)
        }
    };
    xhttp.open("GET", "http://localhost:5000", true);
    xhttp.send();
});
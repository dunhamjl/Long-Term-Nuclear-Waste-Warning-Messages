function myFunction() {
    setTimeout(function () {
        var x = document.getElementsByClassName("preload");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].className = "dropdown";
        }
        console.log(x);
    }, 500);
}
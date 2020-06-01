var cursor = document.getElementById('cursor');

document.addEventListener('mousemove', myFunction);

function myFunction(e) {
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
    }
    // ^^^^What does "px" exactly do when I add it to x and y? ^^^^  
    // I tried using random inputs instead of using "px" and nothing worked.
    
    
    // For the extended challenge would I change transition: to a higher per second number? ///
window.onload = function () {
    var seconds = 0;
    var miliseconds = 0; 
    var appendmiliseconds = document.getElementById("miliseconds"); // Fixed id name
    var appendSeconds = document.getElementById("seconds");
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var reset = document.getElementById("reset");
    var Interval;

    start.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10); // Corrected function name
    }

    stop.onclick = function() {
        clearInterval(Interval); // Fixed typo here
    }

    reset.onclick = function() {
        clearInterval(Interval);
        miliseconds = 0; // Use correct variable
        seconds = 0; // Use correct variable
        appendmiliseconds.innerHTML = "00"; // Fixed here
        appendSeconds.innerHTML = "00"; // Fixed here
    }

    function startTimer() { // Corrected function name
        miliseconds++; // Fixed typo
        
        if (miliseconds <= 9) {
            appendmiliseconds.innerHTML = "0" + miliseconds; // Fixed variable name
        } else if (miliseconds > 9 && miliseconds < 100) {
            appendmiliseconds.innerHTML = miliseconds; // Fixed variable name
        }

        if (miliseconds >= 100) { // Changed condition to >=
            seconds++;
            miliseconds = 0; // Reset miliseconds
            appendmiliseconds.innerHTML = "0" + miliseconds; // Display 00
        }
        
        if (seconds <= 9) {
            appendSeconds.innerHTML = "0" + seconds; // Fixed variable name
        } else {
            appendSeconds.innerHTML = seconds;
        }
    }
}

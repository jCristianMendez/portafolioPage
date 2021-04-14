document.addEventListener('DOMContentLoaded', function (event) {
    // array with texts to type in typewriter
    var dataText = ["Front-end Developer.", "Back-end Developer.", "Full-Stack Web Developer."];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback, deleting, wait) {
        // chekc if text isn't finished yet
        if (i == text.length) {
            deleting = true;
            wait = !wait;
        }
        //Write text
        if (i < (text.length) && !deleting) {
            // add next character to h1
            document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span class="blink" aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback, deleting, wait)
            }, 100);
        }
        //Delete text
        else if (deleting) {
            if (i > 0) {
                //When write is done. wait for erase
                if (wait) {
                    setTimeout(function () {
                        typeWriter(text, i, fnCallback, deleting, wait)
                    }, 2000);
                } else {
                    // erase next character to h1
                    document.querySelector("h1").innerHTML = text.substring(0, i - 1) + '<span class="blink" aria-hidden="true"></span>';

                    // wait for a while and call this function again for delete next character
                    setTimeout(function () {
                        typeWriter(text, i - 1, fnCallback, deleting, wait)
                    }, 100);
                }
            }

            // text finished, call callback if there is a callback function
            else if (typeof fnCallback == 'function') {
                // call callback after timeout
                setTimeout(fnCallback, 700);
            }
        }
    }

    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 1000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            }, false, false);
        }
    }
    // start the text animation
    StartTextAnimation(0);
});
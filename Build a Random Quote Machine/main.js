
/**
 * fetches random quote from below URL
 */
fetchQuote = () => {

    fetch('https://type.fit/api/quotes')
        .then(response => {
            return response.json();
        }).then(data => {
            let arrLoc = Math.floor(Math.random() * (data.length - 1 - 0)) + 0;
            let quote = data[arrLoc];
            console.log(quote.author);
            let author = (quote.author == null) ? 'Anonymous' : quote.author;
            document.getElementById("text").textContent = '\"' + quote.text + '\"';
            document.getElementById("author").textContent = '~' + author;
            document.getElementById("tweet-quote").setAttribute
                        ("href", 'http://www.twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=\"'
                        + quote.text + '\"' + author);
        });
}

https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22If%20you%20want%20your%20children%20to%20turn%20out%20well%2C%20spend%20twice%20as%20much%20time%20with%20them%2C%20and%20half%20as%20much%20money.%22%20Abigail%20Van%20Buren

/**
 * Timer to load next random quote after 10 seconds
 */
startTimer = () => {

    if (document.getElementById("autoLoad").checked && document.getElementById("text").textContent == "")
        fetchQuote();
    let countDownDate = new Date().getTime() + 11000;

    if (document.getElementById("autoLoad").checked) {
        let x = setInterval(() => {

            if (!document.getElementById("autoLoad").checked) {
                document.getElementById("timer").textContent = "";
                clearInterval(x);
                return;
            }
           
            // Get today's date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let distance = countDownDate - now;

            let seconds = Math.floor((distance % (1000 * 60)) / 1000);


            // Output the result in an element with id="demo"
            if (seconds > 0)
                document.getElementById("timer").textContent = seconds + " seconds ";
            else
                document.getElementById("timer").textContent = "";

            // If the count down is over, write some text 
            if (distance <= 0) {
                fetchQuote();
                countDownDate = new Date().getTime() + 11000;
            }   
        }, 1000);
    }
}


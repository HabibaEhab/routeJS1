var quotesArray = [
    {authorName:"Oscar Wilde" ,quote:"To live is the rarest thing in the world. Most people exist, that is all."},
    {authorName:" Ralph Waldo Emerson" ,quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."},
    {authorName:"Andre Gide, Autumn Leaves" ,quote:"It is better to be hated for what you are than to be loved for what you are not"},
    {authorName:"Robert Frost" ,quote:"In three words I can sum up everything I've learned about life: it goes on."},
    {authorName:"Frank Sinatra" ,quote:"The best revenge is massive success."},
    {authorName:"Bernard M. Baruch" ,quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."},
];

function generateRandomQuote(){
    var q = Math.floor( Math.random() * quotesArray.length);

    document.getElementById("quote").innerHTML=quotesArray[q].quote;
    document.getElementById("author").innerHTML=quotesArray[q].authorName;
}

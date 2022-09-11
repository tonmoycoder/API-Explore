const blockquote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => quote(data))
}

const quote = quote => {
    const show = document.getElementById('quote');
    console.log(quote)
    show.innerText = quote.quote;
}
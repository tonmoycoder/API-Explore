const loadUserAsync = async () => {
    const url = `https://randomuser.me/api/?gender=female`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.results[0]);
    } catch (error) {
        console.log("Uh oh, something has gone wrong. Please tweet us @randomapi about the issue. Thank you.")
    }
}


const loadUserFetch = () => {
    const url = `https://randomuser.me/api/?gender=female`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))
        .catch(error => console.log(error))
}


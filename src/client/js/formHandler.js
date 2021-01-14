// Eventlistener needs to go here for the requests to the meaning cloud api

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('articleURL').value // url entered by client
    if(Client.checkArticleURL(formText)) {
    console.log("::: Form Submitted :::")

    postData('http://localhost:8081/api', {url:formTest})
        .then(res => {
        document.getElementById('polarity').innerHTML = res.score_tag;
        document.getElementById("agreement").innerHTML = res.agreement;
        document.getElementById("subjectivity").innerHTML = res.subjectivity;
        document.getElementById("confidence").innerHTML = res.confidence;
        document.getElementById("irony").innerHTML = res.irony;
        })
        } else {
            alert('Please enter a valid URL');
        }
}

const postData = async (url = "", data = {}) => {
    console.log('Analyzing:', data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log('Data received:', newData)
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

export { handleSubmit }

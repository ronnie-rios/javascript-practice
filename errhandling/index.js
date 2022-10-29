const fetchContainer = document.getElementById('err3-fetch');
const fetchBtn = document.getElementById('fetch-btn');

async function getData() {
    try {
        let response = await fetch('url');
        let useData = await response.json()
        const dataTitle = document.createElement('h2');
        dataTitle.innerText = useData.title
    } catch (error) {
        const errMsg = document.createElement('h2');
        errMsg.setAttribute('id', 'err');
        errMsg.innerText = error;
        fetchContainer.append(errMsg);
        setTimeout(() => {
            errMsg.innerText = '';
        }, 2000)
    }
}

fetchBtn.addEventListener('click', getData)
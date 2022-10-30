const fetchContainer = document.getElementById('err3-fetch');
const fetchBtn = document.getElementById('fetch-btn');
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const form = document.getElementById('form');
const formErr = document.getElementById('err2');

async function getData(e) {
    try {
        let response = await fetch('http://localhost:9009s/data/');
        let useData = await response.json();
        useData.forEach(item => {
            createDomData(item)
        })
    } catch (error) {
        errHandler(e, error)
    }
};

const createDomData = (data) => {
    const dataTitle = document.createElement('h2');
    dataTitle.innerText = 'name: ' + data.name;
    fetchContainer.append(dataTitle);
    fetchBtn.setAttribute('hidden', true)
}

function errHandler(e, error) {
    e.preventDefault();
    let errMessages = [];
    if(password.length <5) {
        errMessages.push('pw must be at least 6 chars')
    }
    if (errMessages.length > 0) {
        e.preventDefault();
        formErr.innerText = errMessages.join(', ')
        setTimeout(errTimeout(formErr), 2000)
    }
    if (error) {
        const errMsg = document.createElement('h2');
        errMsg.setAttribute('id', 'err');
        errMsg.innerText = 'err!';
        fetchContainer.append(errMsg);
        setTimeout(errTimeout(errMsg), 2000)
    }
};

function errTimeout(ele) {
    ele.innertext=''
}

form.addEventListener('submit', errHandler)
fetchBtn.addEventListener('click', getData)
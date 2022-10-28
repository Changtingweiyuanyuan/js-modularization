import cyberpunkImg from '../img/cyberpunk.jpeg';

export const getTitle = ()=> {
    const array = ['2022', '2077', '2050'];
    const el = document.createElement('h2');
    const text = document.createTextNode(`cyberpunk${array.findIndex((item) => item === '2077')}`)
    el.appendChild(text);
    return el;

}

export const getImg = ()=> {
    const el = document.createElement('img');
    el.src = cyberpunkImg;
    return el;
}
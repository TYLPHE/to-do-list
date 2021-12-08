import storage from "./storage.js";

let options = {
    addListener: () => {
        let listLength = document.getElementsByClassName(`list`).length;
        for(let i = 1; i <= listLength; i++){
            let row = document.getElementById(i);
            row.addEventListener(`mouseover`, (e) => {
                let options = document.createElement(`div`);
                options.id = `options`
                options.textContent = `Buttons`;
                if(e.target.parentNode.childNodes[1].childElementCount == 0 && e.target.id !== `options`){
                    e.target.parentNode.childNodes[1].appendChild(options);
                }
                document.querySelector(`due-${i}`);
                console.log(e);
            })
        }
    },

}

export default options;
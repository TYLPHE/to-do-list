let options = {
    init: () => {
        let listLength = document.getElementsByClassName(`list`).length;
        for(let i = 0; i < listLength; i++){
            let optionsDiv = document.querySelector(`.options-${i+1}`);

            let completeButton = document.createElement(`button`);
            let editButton = document.createElement(`button`);
            let deleteButton = document.createElement(`button`);

            completeButton.className = `complete`;
            editButton.className = `edit`;
            deleteButton.className = `delete`;

            completeButton.textContent = `Complete`;
            editButton.textContent = `Edit`;
            deleteButton.textContent = `Delete`;


            optionsDiv.append(completeButton, editButton, deleteButton);
        }
    },
}

export default options.init;
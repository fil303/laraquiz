document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    let options = document.querySelectorAll(".option-item");
    console.log(options);

    // content loading function
    async function getNewContent(){
        try {
            let apiCall = await fetch('http://laraquiz.filxtech.tech/api/random-quiz');

            if(!apiCall.ok){
                console.log("apiCall not ok");
                getNewContent(); return;
            }

            let data = await apiCall.json();
            console.log("data", data);
            if(!data.status){
                console.log("apiCall data status not ok");
                getNewContent(); return;
            }

            document.querySelector('#content').innerHTML = data.html;

            loader.style.display = "none";
            content.style.display = "block";
            document.querySelector("#skipBtn").style.display = "block";
            document.querySelector("#nextBtn").style.display = "none";
            options = document.querySelectorAll(".option-item");
            optionsInit(options);
        } catch (error) {
            console.log("apiCall error", error);
            getNewContent(); return;
        }
    }   getNewContent();

    document.querySelector("#skipBtn").addEventListener("click", () => getNewContent() );
    document.querySelector("#nextBtn").addEventListener("click", () => getNewContent() );

    // Handle option click
    function optionsInit(option){
        options.forEach((option) => {
          option.addEventListener("click", () => {
            // Disable all options after selection
            options.forEach((opt) => opt.classList.add("disabled"));
    
            // Show correct/incorrect feedback
            const icon = option.querySelector(".icon");
            icon.style.display = "inline-block";
    
            // Highlight correct/incorrect answers
            if(option.dataset.correct === "true"){
                option.classList.add("correct");
                showCorrectDialog();
            }else{
                option.classList.add("incorrect");
                showIncorrectDialog();
                options.forEach((opt) =>{
                    if(opt.dataset.correct === "true"){
                        opt.classList.remove("disabled")
                        const correctIcon = opt.querySelector(".icon");
                        correctIcon.style.display = "inline-block";
                    }
                });
            }
    
            document.querySelector("#skipBtn").style.display = "none";
            document.querySelector("#nextBtn").style.display = "block";
          });
        });
    }

    // Function to show the correct dialog
    function showCorrectDialog() {
        document.querySelector('.overlay').style.display = 'block';
        document.getElementById('correctDialog').style.display = 'block';
        setTimeout(()=> closeDialog(), 1000);
    }

    // Function to show the incorrect dialog
    function showIncorrectDialog() {
        document.querySelector('.overlay').style.display = 'block';
        document.getElementById('incorrectDialog').style.display = 'block';
        setTimeout(()=> closeDialog(), 1000);
    }

    // Function to close any open dialog
    function closeDialog() {
        document.querySelector('.overlay').style.display = 'none';
        document.querySelectorAll('.dialog').forEach(dialog => {
            dialog.style.display = 'none';
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    let options = document.querySelectorAll(".option-item");

    // content loading function
    async function getNewContent(){
        try {
            startLoader();
            let apiCall = await fetch('http://laraquiz.filxtech.tech/api/random-quiz');

            if(!apiCall.ok){
                console.log("apiCall not ok");
                return;
            }

            let data = await apiCall.json();
            if(!data.status){
                console.log("apiCall data status not ok");
                return;
            }

            if(!data.data){
                console.log("apiCall data not found");
                return;
            }
            setData(data.data);
            stopLoader();
            document.querySelector("#skipBtn").style.display = "block";
            document.querySelector("#nextBtn").style.display = "none";
            options = document.querySelectorAll(".option-item");
            optionsInit(options);
        } catch (error) {
            console.log("apiCall error", error);
            return;
        }
    }   getNewContent();

    document.querySelector("#skipBtn").addEventListener("click", () => getNewContent() );
    document.querySelector("#nextBtn").addEventListener("click", () => getNewContent() );

    // Handle option click
    function optionsInit(options){
        options.forEach((option) => {

          option.querySelector(".green-tick").style.display = "none";
          option.querySelector(".red-cross").style.display = "none";
          option.querySelector(".red-cross").style.display = "none";
          option.classList.remove("disabled");
          option.classList.remove("correct");
          option.classList.remove("incorrect");

          option.addEventListener("click", () => {
            // Disable all options after selection
            options.forEach((opt) => opt.classList.add("disabled"));
    
            // Show correct/incorrect feedback
            const icon = option.querySelector(".red-cross");
            icon.style.display = "inline-block";
    
            // Highlight correct/incorrect answers
            if(option.dataset.correct === "true"){
                const correctIcon = option.querySelector(".green-tick");
                correctIcon.style.display = "inline-block";
                icon.style.display = "none";
                option.classList.add("correct");
                showCorrectDialog();
            }else{
                option.classList.add("incorrect");
                showIncorrectDialog();
                options.forEach((opt) =>{
                    if(opt.dataset.correct === "true"){
                        opt.classList.remove("disabled")
                        const correctIcon = opt.querySelector(".green-tick");
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

    function startLoader()
    {
        // loader.style.display = "block";
        //content.style.display = "none";
    }

    function stopLoader()
    {
        loader.style.display = "none";
        content.style.display = "block";
    }

    function setData(quiz){
        let question = document.querySelector('#question');
        let option1 = document.querySelector('#option_one');
        let option2 = document.querySelector('#option_two');
        let option3 = document.querySelector('#option_three');
        let option4 = document.querySelector('#option_four');
        let option1_list = document.querySelector('#option_one_list');
        let option2_list = document.querySelector('#option_two_list');
        let option3_list = document.querySelector('#option_three_list');
        let option4_list = document.querySelector('#option_four_list');

        question.textContent = quiz.question;
        option1.textContent = quiz.option_one;
        option2.textContent = quiz.option_two;
        option3.textContent = quiz.option_three;
        option4.textContent = quiz.option_four;

        option1_list.dataset.correct = quiz.option_answer == 1 ? 'true' : 'false';
        option2_list.dataset.correct = quiz.option_answer == 2 ? 'true' : 'false';
        option3_list.dataset.correct = quiz.option_answer == 3 ? 'true' : 'false';
        option4_list.dataset.correct = quiz.option_answer == 4 ? 'true' : 'false';
    }
});
function set_answer_heights() {

    document.querySelectorAll(".faq_container .question").forEach(question => {
        var header = question.querySelector(".q_header");
        var answer_container = question.querySelector(".answer_container");
        header.onclick = function (event) {

            question.classList.toggle("open");
        };


        var height = answer_container.scrollHeight;
        console.log(height);
        answer_container.style.height = `${height}px`;

    });

}

window.addEventListener('load', ev => {
    set_answer_heights();
})
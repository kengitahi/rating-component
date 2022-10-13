const ratingButtons = document.querySelectorAll('.rating-button');
const rating = document.getElementById('rating');

const ratingState = document.getElementById('ratingState');
const thanksState = document.getElementById('thanksState');

const submitButton = document.getElementById('submit')
const smallWarning = document.getElementById('smallWarning')

let singleButtonValue = ""

ratingButtons.forEach(singleButton => {
    singleButton.addEventListener('click', function () {
        ratingButtons.forEach(button => {
            if (button.classList.contains("selected")) {
                button.classList.remove("selected");
            }
        })
        singleButton.classList.toggle("selected");
        smallWarning.classList.add("display-none");

        singleButtonValue = singleButton.value
        rating.innerHTML = singleButtonValue
    })
})

submitButton.addEventListener("click", function () {
    if (Number(singleButtonValue) < 1) {
        smallWarning.classList.remove("display-none");
        return
    }
    ratingState.classList.toggle("display-none");
    thanksState.classList.toggle("display-none");
})


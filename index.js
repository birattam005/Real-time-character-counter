const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");

const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup",() =>{          // jab key up karege means value add hote rahe ga text area me.
    updateCounter()
});

updateCounter();

function updateCounter(){
   totalCounterEl.innerText = textareaEl.value.length               // ye text area ki input value leti hai
   remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;           // or yaha minus hote rahe ga
}
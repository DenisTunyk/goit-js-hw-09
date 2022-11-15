import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";
import "notiflix/dist/notiflix-3.2.5.min.css";


// init block
const ref = {
    inpElem: document.querySelector("input#datetime-picker"),
    buttonElem: document.querySelector("button[data-start]"),
    daysEl: document.querySelector("span[data-days]"),
    hoursEl: document.querySelector("span[data-hours]"),
    minEl: document.querySelector("span[data-minutes]"),
    secEl: document.querySelector("span[data-seconds]"),
}

let timerFinish = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: closePicker,
};

ref.buttonElem.disabled = true;

flatpickr(ref.inpElem, options);

const timer = {
    isActive: false,
    inId: null,
    start() {
        if (this.isActive) {
            return;
        }

        this.inId = setInterval(() => {
            const date = new Date();
            //let deltaTime = timerFinish - date.getTime();
            this.isActive = timerFinish - date.getTime() > 0 ? true : false;

            if (!this.isActive) {
                clearInterval(this.inId);
                return;
            } else {
                let enableTime = convertMs(timerFinish - date.getTime());
                ref.buttonElem.disabled = true;
                if (String(enableTime.days).length <= 2) {
                    ref.daysEl.innerHTML = addLeadingZero(enableTime.days);
                } else {
                    ref.daysEl.innerHTML = enableTime.days;
                }
                ref.hoursEl.innerHTML = addLeadingZero(enableTime.hours);
                ref.minEl.innerHTML = addLeadingZero(enableTime.minutes);
                ref.secEl.innerHTML = addLeadingZero(enableTime.seconds);
            }       
        }, 1000);
    },

}

ref.buttonElem.addEventListener("click", timer.start);




//function block
function closePicker(selectedDates) {
    const date = new Date();
    if (selectedDates[0].getTime() < date.getTime()) {
        //window.alert("Please choose a date in the future");
        Notiflix.Notify.failure("Please choose a date in the future");
        ref.buttonElem.disabled = true;
    } else {
        ref.buttonElem.disabled = false;
        timerFinish = selectedDates[0].getTime();
    }
}


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
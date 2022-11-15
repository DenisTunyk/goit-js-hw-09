import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

const ref = {
  formEl: document.querySelector("form"),
  delayEl: document.querySelector("input[name='delay']"),
  stepEl: document.querySelector("input[name='step']"),
  amountEl: document.querySelector("input[name='amount']"),
}

ref.formEl.addEventListener("submit", sendSubmitForm);


console.log(ref.amountEl);




function sendSubmitForm(e) {
  e.preventDefault();
  const count = ref.amountEl.value;
  for (let i = 1; i <= count; i += 1){
    createPromise(i, Number(ref.delayEl.value) + Number(ref.stepEl.value * (i-1)));
    //console.log(Number(ref.delayEl.value) + Number(ref.stepEl.value * (i-1)));
    
  }




  // ref.delayEl.value;
  // console.log(ref.delayEl.value);
}




function createPromise(position, delay) {
  const promise = new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        //console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        res(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        rej(`❌ Rejected promise ${position} in ${delay}ms`);
        //console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  })

    promise.then((str) => {
        Notiflix.Notify.success(str);
      }).catch((str) => {
        Notiflix.Notify.failure(str);
      });
  //console.log(promise);

}
    
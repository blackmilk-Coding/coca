export const useValidation = () => {
  const form = document.querySelector('.get-started__form')
  const input = document.querySelectorAll('.get-started__form-input')
  const phoneNumber = document.querySelector('.phone-number')
  const button = document.querySelector('.get-started__form-btn')


  button.addEventListener('click' , ()=>{
    input.forEach(el => {
      let TextInput = el.value
      if(TextInput == ""){
        el.style.border = "3px solid #FF7373"
      }
    });
  })

}
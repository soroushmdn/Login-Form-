/*===== FOCUS =====*/
const inputs = document.querySelectorAll('.form__input');

/*=== To call function===*/
inputs.forEach((input) => {
  input.addEventListener('focus', addfocus);
  input.addEventListener('blur', removefocus);
});

/*=== Add focus ===*/
function addfocus() {
  let parent = this.parentNode.parentNode;
  parent.classList.add('focus');
}

/*=== Remove focus ===*/
function removefocus() {
  let parent = this.parentNode.parentNode;
  if (this.value === '') {
    parent.classList.remove('focus');
  }
}

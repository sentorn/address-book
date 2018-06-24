document.addEventListener('DOMContentLoaded', () => {

  const dots = document.querySelectorAll('.js-dropdown-btn');
  const dropDowns = document.querySelectorAll('.js-dropdown');
  const inputDropdown = document.querySelector('.js-input-dropdown');

  const clearClass = (arr, cls) => {
    arr.forEach((el) => {
      el.classList.remove(cls);
    })
  };

  // click for drop-downs
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('js-dropdown-btn')) {
      const dropDown = target.parentElement.querySelector('.dropdown');
      if (target.classList.contains('active')) {
        target.classList.remove('active');
        dropDown.classList.remove('show');
      } else {
        clearClass(dots, 'active');
        clearClass(dropDowns, 'show');
        target.classList.add('active');
        dropDown.classList.add('show');
      }
      if (inputDropdown.classList.contains('show')) {
        inputDropdown.classList.remove('show');
      }
    }
    // click button for input dropdown
    if (target.classList.contains('js-input-dropdown-btn')) {
      clearClass(dots, 'active');
      clearClass(dropDowns, 'show');
      if (!inputDropdown.classList.contains('show')) {
        inputDropdown.classList.add('show');
      }
    }
  });

  // click on other place of document and close drop-downs
  document.addEventListener('click', (event) => {
    const target = event.target;
    if(!target.classList.contains('js-dropdown-btn') && !target.closest('div.dropdown')) {
      clearClass(dots, 'active');
      clearClass(dropDowns, 'show');
      if (inputDropdown.classList.contains('show')) {
        inputDropdown.classList.remove('show');
      }
    }
  });

});
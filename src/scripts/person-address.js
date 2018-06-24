document.addEventListener('DOMContentLoaded', () => {

  // select and count persons

  const persons = document.querySelectorAll('.js-person-info');
  const result = document.querySelector('.js-checked-count');

  if (persons.length) {

    let checkedCount = 0;

    const changeCheckedCount = (num) => {
      result.querySelector('span').innerText = num;
    };

    persons.forEach((el) => {
      el.querySelector('.check-item input').addEventListener('click', () => {
        if (el.classList.contains('active')) {
          el.classList.remove('active');
          checkedCount--;
          changeCheckedCount(checkedCount);
        } else {
          el.classList.add('active');
          checkedCount++;
          changeCheckedCount(checkedCount);
        }
      });
    })
  }

});
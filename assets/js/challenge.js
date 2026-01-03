const tracker = document.getElementById('challenge-tracker');

if (tracker) {
  const saved = JSON.parse(localStorage.getItem('orm-tracker') || '{}');

  const renderDay = (day) => {
    const wrapper = document.createElement('label');
    wrapper.className = 'tracker-day';

    const text = document.createElement('span');
    text.textContent = `Day ${day}`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = Boolean(saved[day]);
    checkbox.addEventListener('change', () => {
      saved[day] = checkbox.checked;
      localStorage.setItem('orm-tracker', JSON.stringify(saved));
    });

    wrapper.appendChild(text);
    wrapper.appendChild(checkbox);
    return wrapper;
  };

  for (let day = 1; day <= 30; day += 1) {
    tracker.appendChild(renderDay(day));
  }
}

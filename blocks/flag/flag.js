export default function decorate(block) {
  // Create <ul> and <li> elements
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.className = 'flag-item';

    const columns = [...row.children];
    const img = columns[0].querySelector('img')?.cloneNode(true);

    if (img) {
      const imageWrapper = document.createElement('div');
      imageWrapper.className = 'flag-image';
      imageWrapper.append(img);
      li.append(imageWrapper);
    }

    const countryWrapper = document.createElement('div');
    countryWrapper.className = 'flag-country';
    countryWrapper.textContent = columns[1]?.textContent.trim() || '';
    li.append(countryWrapper);

    const localesWrapper = document.createElement('div');
    localesWrapper.className = 'flag-locales';
    localesWrapper.textContent = columns[2]?.textContent.trim() || '';
    li.append(localesWrapper);

    ul.append(li);
  });

  // Prepare dropdown container
  const items = ul.querySelectorAll('.flag-item');
  if (!items.length) return;

  const dropdown = document.createElement('div');
  dropdown.className = 'flag-dropdown';

  // Selected flag display
  const selected = document.createElement('div');
  selected.className = 'flag-selected';
  selected.setAttribute('tabindex', '0');
  selected.innerHTML = items[0].innerHTML; // First flag is default

  // Options list
  const options = document.createElement('div');
  options.className = 'flag-options';
  options.style.display = 'none';

  items.forEach((item) => {
    const option = item.cloneNode(true);
    option.classList.add('flag-option');
    option.addEventListener('click', () => {
      selected.innerHTML = option.innerHTML;
      options.style.display = 'none';
    });
    options.appendChild(option);
  });

  // Toggle dropdown on click
  selected.addEventListener('click', () => {
    options.style.display = options.style.display === 'none' ? 'block' : 'none';
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      options.style.display = 'none';
    }
  });

  // Assemble dropdown
  dropdown.appendChild(selected);
  dropdown.appendChild(options);

  // Clear block content and insert dropdown
  block.textContent = '';
  block.appendChild(dropdown);
}

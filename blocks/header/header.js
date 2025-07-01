// // // import { getMetadata } from '../../scripts/aem.js';
// // // import { loadFragment } from '../fragment/fragment.js';

// // // // media query match that indicates mobile/tablet width
// // // const isDesktop = window.matchMedia('(min-width: 900px)');

// // // function closeOnEscape(e) {
// // //   if (e.code === 'Escape') {
// // //     const nav = document.getElementById('nav');
// // //     const navSections = nav.querySelector('.nav-sections');
// // //     const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
// // //     if (navSectionExpanded && isDesktop.matches) {
// // //       // eslint-disable-next-line no-use-before-define
// // //       toggleAllNavSections(navSections);
// // //       navSectionExpanded.focus();
// // //     } else if (!isDesktop.matches) {
// // //       // eslint-disable-next-line no-use-before-define
// // //       toggleMenu(nav, navSections);
// // //       nav.querySelector('button').focus();
// // //     }
// // //   }
// // // }

// // // function closeOnFocusLost(e) {
// // //   const nav = e.currentTarget;
// // //   if (!nav.contains(e.relatedTarget)) {
// // //     const navSections = nav.querySelector('.nav-sections');
// // //     const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
// // //     if (navSectionExpanded && isDesktop.matches) {
// // //       // eslint-disable-next-line no-use-before-define
// // //       toggleAllNavSections(navSections, false);
// // //     } else if (!isDesktop.matches) {
// // //       // eslint-disable-next-line no-use-before-define
// // //       toggleMenu(nav, navSections, false);
// // //     }
// // //   }
// // // }

// // // function openOnKeydown(e) {
// // //   const focused = document.activeElement;
// // //   const isNavDrop = focused.className === 'nav-drop';
// // //   if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
// // //     const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
// // //     // eslint-disable-next-line no-use-before-define
// // //     toggleAllNavSections(focused.closest('.nav-sections'));
// // //     focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
// // //   }
// // // }

// // // function focusNavSection() {
// // //   document.activeElement.addEventListener('keydown', openOnKeydown);
// // // }

// // // /**
// // //  * Toggles all nav sections
// // //  * @param {Element} sections The container element
// // //  * @param {Boolean} expanded Whether the element should be expanded or collapsed
// // //  */
// // // function toggleAllNavSections(sections, expanded = false) {
// // //   sections.querySelectorAll('.nav-sections .default-content-wrapper > ul > li').forEach((section) => {
// // //     section.setAttribute('aria-expanded', expanded);
// // //   });
// // // }

// // // /**
// // //  * Toggles the entire nav
// // //  * @param {Element} nav The container element
// // //  * @param {Element} navSections The nav sections within the container element
// // //  * @param {*} forceExpanded Optional param to force nav expand behavior when not null
// // //  */
// // // function toggleMenu(nav, navSections, forceExpanded = null) {
// // //   const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
// // //   const button = nav.querySelector('.nav-hamburger button');
// // //   document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
// // //   nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
// // //   toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
// // //   button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
// // //   // enable nav dropdown keyboard accessibility
// // //   const navDrops = navSections.querySelectorAll('.nav-drop');
// // //   if (isDesktop.matches) {
// // //     navDrops.forEach((drop) => {
// // //       if (!drop.hasAttribute('tabindex')) {
// // //         drop.setAttribute('tabindex', 0);
// // //         drop.addEventListener('focus', focusNavSection);
// // //       }
// // //     });
// // //   } else {
// // //     navDrops.forEach((drop) => {
// // //       drop.removeAttribute('tabindex');
// // //       drop.removeEventListener('focus', focusNavSection);
// // //     });
// // //   }

// // //   // enable menu collapse on escape keypress
// // //   if (!expanded || isDesktop.matches) {
// // //     // collapse menu on escape press
// // //     window.addEventListener('keydown', closeOnEscape);
// // //     // collapse menu on focus lost
// // //     nav.addEventListener('focusout', closeOnFocusLost);
// // //   } else {
// // //     window.removeEventListener('keydown', closeOnEscape);
// // //     nav.removeEventListener('focusout', closeOnFocusLost);
// // //   }
// // // }

// // // /**
// // //  * loads and decorates the header, mainly the nav
// // //  * @param {Element} block The header block element
// // //  */
// // // export default async function decorate(block) {
// // //   // load nav as fragment
// // //   const navMeta = getMetadata('nav');
// // //   const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
// // //   const fragment = await loadFragment(navPath);

// // //   // decorate nav DOM
// // //   block.textContent = '';
// // //   const nav = document.createElement('nav');
// // //   nav.id = 'nav';
// // //   while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

// // //   const classes = ['brand', 'sections', 'tools'];
// // //   classes.forEach((c, i) => {
// // //     const section = nav.children[i];
// // //     if (section) section.classList.add(`nav-${c}`);
// // //   });

// // //   const navBrand = nav.querySelector('.nav-brand');
// // //   const brandLink = navBrand.querySelector('.button');
// // //   if (brandLink) {
// // //     brandLink.className = '';
// // //     brandLink.closest('.button-container').className = '';
// // //   }

// // //   const navSections = nav.querySelector('.nav-sections');
// // //   if (navSections) {
// // //     navSections.querySelectorAll(':scope .default-content-wrapper > ul > li').forEach((navSection) => {
// // //       if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
// // //       navSection.addEventListener('click', () => {
// // //         if (isDesktop.matches) {
// // //           const expanded = navSection.getAttribute('aria-expanded') === 'true';
// // //           toggleAllNavSections(navSections);
// // //           navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
// // //         }
// // //       });
// // //     });
// // //   }

// // //   // hamburger for mobile
// // //   const hamburger = document.createElement('div');
// // //   hamburger.classList.add('nav-hamburger');
// // //   hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
// // //       <span class="nav-hamburger-icon"></span>
// // //     </button>`;
// // //   hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
// // //   nav.prepend(hamburger);
// // //   nav.setAttribute('aria-expanded', 'false');
// // //   // prevent mobile nav behavior on window resize
// // //   toggleMenu(nav, navSections, isDesktop.matches);
// // //   isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

// // //   const navWrapper = document.createElement('div');
// // //   navWrapper.className = 'nav-wrapper';
// // //   navWrapper.append(nav);
// // //   block.append(navWrapper);
// // // }
// // import { getMetadata } from '../../scripts/aem.js';
// // import { loadFragment } from '../fragment/fragment.js';

// // // media query match that indicates mobile/tablet width
// // const isDesktop = window.matchMedia('(min-width: 900px)');

// // function closeOnEscape(e) {
// //   if (e.code === 'Escape') {
// //     const nav = document.getElementById('nav');
// //     const navSections = nav.querySelector('.nav-sections');
// //     const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
// //     if (navSectionExpanded && isDesktop.matches) {
// //       toggleAllNavSections(navSections);
// //       navSectionExpanded.focus();
// //     } else if (!isDesktop.matches) {
// //       toggleMenu(nav, navSections);
// //       nav.querySelector('button').focus();
// //     }
// //   }
// // }

// // function closeOnFocusLost(e) {
// //   const nav = e.currentTarget;
// //   if (!nav.contains(e.relatedTarget)) {
// //     const navSections = nav.querySelector('.nav-sections');
// //     const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
// //     if (navSectionExpanded && isDesktop.matches) {
// //       toggleAllNavSections(navSections, false);
// //     } else if (!isDesktop.matches) {
// //       toggleMenu(nav, navSections, false);
// //     }
// //   }
// // }

// // function openOnKeydown(e) {
// //   const focused = document.activeElement;
// //   const isNavDrop = focused.className === 'nav-drop';
// //   if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
// //     const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
// //     toggleAllNavSections(focused.closest('.nav-sections'));
// //     focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
// //   }
// // }

// // function focusNavSection() {
// //   document.activeElement.addEventListener('keydown', openOnKeydown);
// // }

// // /**
// //  * Toggles all nav sections
// //  * @param {Element} sections The container element
// //  * @param {Boolean} expanded Whether the element should be expanded or collapsed
// //  */
// // function toggleAllNavSections(sections, expanded = false) {
// //   sections.querySelectorAll('.nav-sections .default-content-wrapper > ul > li').forEach((section) => {
// //     section.setAttribute('aria-expanded', expanded);
// //   });
// // }

// // /**
// //  * Toggles the entire nav
// //  * @param {Element} nav The container element
// //  * @param {Element} navSections The nav sections within the container element
// //  * @param {*} forceExpanded Optional param to force nav expand behavior when not null
// //  */
// // function toggleMenu(nav, navSections, forceExpanded = null) {
// //   const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
// //   const button = nav.querySelector('.nav-hamburger button');
// //   document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
// //   nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
// //   toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
// //   button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
// //   // enable nav dropdown keyboard accessibility
// //   const navDrops = navSections.querySelectorAll('.nav-drop');
// //   if (isDesktop.matches) {
// //     navDrops.forEach((drop) => {
// //       if (!drop.hasAttribute('tabindex')) {
// //         drop.setAttribute('tabindex', 0);
// //         drop.addEventListener('focus', focusNavSection);
// //       }
// //     });
// //   } else {
// //     navDrops.forEach((drop) => {
// //       drop.removeAttribute('tabindex');
// //       drop.removeEventListener('focus', focusNavSection);
// //     });
// //   }

// //   if (!expanded || isDesktop.matches) {
// //     window.addEventListener('keydown', closeOnEscape);
// //     nav.addEventListener('focusout', closeOnFocusLost);
// //   } else {
// //     window.removeEventListener('keydown', closeOnEscape);
// //     nav.removeEventListener('focusout', closeOnFocusLost);
// //   }
// // }

// // /**
// //  * Loads and decorates the header
// //  * @param {Element} block The header block element
// //  */
// // export default async function decorate(block) {
// //   // Load nav as fragment
// //   const navMeta = getMetadata('nav');
// //   const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
// //   const fragment = await loadFragment(navPath);

// //   // Clear block and create wrapper
// //   block.textContent = '';

// //   const navWrapper = document.createElement('div');
// //   navWrapper.className = 'nav-wrapper';

// //   /* Top black strip */
// //   const topStrip = document.createElement('div');
// //   topStrip.className = 'top-strip';

// //   // Sign In link
// //   const signIn = document.createElement('a');
// //   signIn.href = '#';
// //   signIn.textContent = 'Sign In';
// //   signIn.addEventListener('click', (e) => {
// //     e.preventDefault();
// //     window.open('', '_blank');
// //   });

// //   // Country dropdown
// //   const countryDropdown = document.createElement('select');
// //   countryDropdown.className = 'country-dropdown';

// //   const countries = [
// //     { name: 'United States', code: 'en-US', flag: '🇺🇸' },
// //     { name: 'Canada', code: 'en-CA', flag: '🇨🇦' },
// //     { name: 'Switzerland (German)', code: 'de-CH', flag: '🇨🇭' },
// //     { name: 'Switzerland (French)', code: 'fr-CH', flag: '🇨🇭' },
// //     { name: 'Switzerland (Italian)', code: 'it-CH', flag: '🇨🇭' },
// //     { name: 'Germany', code: 'de-DE', flag: '🇩🇪' },
// //     { name: 'France', code: 'fr-FR', flag: '🇫🇷' },
// //     { name: 'Spain', code: 'es-ES', flag: '🇪🇸' },
// //     { name: 'Italy', code: 'it-IT', flag: '🇮🇹' },
// //   ];

// //   countries.forEach((country) => {
// //     const option = document.createElement('option');
// //     option.value = country.code;
// //     option.textContent = `${country.flag} ${country.name}`;
// //     countryDropdown.appendChild(option);
// //   });

// //   topStrip.appendChild(signIn);
// //   topStrip.appendChild(countryDropdown);

// //   /* Existing nav (white strip) */
// //   const nav = document.createElement('nav');
// //   nav.id = 'nav';
// //   while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

// //   const classes = ['brand', 'sections', 'tools'];
// //   classes.forEach((c, i) => {
// //     const section = nav.children[i];
// //     if (section) section.classList.add(`nav-${c}`);
// //   });

// //   const navBrand = nav.querySelector('.nav-brand');
// //   const brandLink = navBrand?.querySelector('.button');
// //   if (brandLink) {
// //     brandLink.className = '';
// //     brandLink.closest('.button-container').className = '';
// //   }

// //   const navSections = nav.querySelector('.nav-sections');
// //   if (navSections) {
// //     navSections.querySelectorAll(':scope .default-content-wrapper > ul > li').forEach((navSection) => {
// //       if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
// //       navSection.addEventListener('click', () => {
// //         if (isDesktop.matches) {
// //           const expanded = navSection.getAttribute('aria-expanded') === 'true';
// //           toggleAllNavSections(navSections);
// //           navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
// //         }
// //       });
// //     });
// //   }

// //   // Hamburger for mobile
// //   const hamburger = document.createElement('div');
// //   hamburger.classList.add('nav-hamburger');
// //   hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
// //       <span class="nav-hamburger-icon"></span>
// //     </button>`;
// //   hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
// //   nav.prepend(hamburger);
// //   nav.setAttribute('aria-expanded', 'false');
// //   toggleMenu(nav, navSections, isDesktop.matches);
// //   isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

// //   // Append strips in order
// //   navWrapper.append(topStrip);
// //   navWrapper.append(nav);
// //   block.append(navWrapper);
// // }
// import { getMetadata } from '../../scripts/aem.js';
// import { loadFragment } from '../fragment/fragment.js';

// // media query match that indicates mobile/tablet width
// const isDesktop = window.matchMedia('(min-width: 900px)');

// function closeOnEscape(e) {
//   if (e.code === 'Escape') {
//     const nav = document.getElementById('nav');
//     const navSections = nav.querySelector('.nav-sections');
//     const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
//     if (navSectionExpanded && isDesktop.matches) {
//       toggleAllNavSections(navSections);
//       navSectionExpanded.focus();
//     } else if (!isDesktop.matches) {
//       toggleMenu(nav, navSections);
//       nav.querySelector('button').focus();
//     }
//   }
// }

// function closeOnFocusLost(e) {
//   const nav = e.currentTarget;
//   if (!nav.contains(e.relatedTarget)) {
//     const navSections = nav.querySelector('.nav-sections');
//     const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
//     if (navSectionExpanded && isDesktop.matches) {
//       toggleAllNavSections(navSections, false);
//     } else if (!isDesktop.matches) {
//       toggleMenu(nav, navSections, false);
//     }
//   }
// }

// function openOnKeydown(e) {
//   const focused = document.activeElement;
//   const isNavDrop = focused.className === 'nav-drop';
//   if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
//     const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
//     toggleAllNavSections(focused.closest('.nav-sections'));
//     focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
//   }
// }

// function focusNavSection() {
//   document.activeElement.addEventListener('keydown', openOnKeydown);
// }

// /**
//  * Toggles all nav sections
//  * @param {Element} sections The container element
//  * @param {Boolean} expanded Whether the element should be expanded or collapsed
//  */
// function toggleAllNavSections(sections, expanded = false) {
//   sections.querySelectorAll('.nav-sections .default-content-wrapper > ul > li').forEach((section) => {
//     section.setAttribute('aria-expanded', expanded);
//   });
// }

// /**
//  * Toggles the entire nav
//  * @param {Element} nav The container element
//  * @param {Element} navSections The nav sections within the container element
//  * @param {*} forceExpanded Optional param to force nav expand behavior when not null
//  */
// function toggleMenu(nav, navSections, forceExpanded = null) {
//   const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
//   const button = nav.querySelector('.nav-hamburger button');
//   document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
//   nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
//   toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
//   button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
//   // enable nav dropdown keyboard accessibility
//   const navDrops = navSections.querySelectorAll('.nav-drop');
//   if (isDesktop.matches) {
//     navDrops.forEach((drop) => {
//       if (!drop.hasAttribute('tabindex')) {
//         drop.setAttribute('tabindex', 0);
//         drop.addEventListener('focus', focusNavSection);
//       }
//     });
//   } else {
//     navDrops.forEach((drop) => {
//       drop.removeAttribute('tabindex');
//       drop.removeEventListener('focus', focusNavSection);
//     });
//   }

//   if (!expanded || isDesktop.matches) {
//     window.addEventListener('keydown', closeOnEscape);
//     nav.addEventListener('focusout', closeOnFocusLost);
//   } else {
//     window.removeEventListener('keydown', closeOnEscape);
//     nav.removeEventListener('focusout', closeOnFocusLost);
//   }
// }

// /**
//  * Loads and decorates the header
//  * @param {Element} block The header block element
//  */
// export default async function decorate(block) {
//   // Load nav as fragment
//   const navMeta = getMetadata('nav');
//   const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
//   const fragment = await loadFragment(navPath);

//   // Clear block and create wrapper
//   block.textContent = '';

//   const navWrapper = document.createElement('div');
//   navWrapper.className = 'nav-wrapper';

//   /* Top black strip */
//   const topStrip = document.createElement('div');
//   topStrip.className = 'top-strip';

//   // Sign In link
//   const signIn = document.createElement('a');
//   signIn.href = '#';
//   signIn.textContent = 'Sign In';
//   signIn.addEventListener('click', (e) => {
//     e.preventDefault();
//     window.open('', '_blank');
//   });

//   // Country selector dropdown (custom)
//   const countrySelector = document.createElement('div');
//   countrySelector.className = 'country-selector';
//   countrySelector.innerHTML = `
//     <button type="button" class="country-toggle">
//       <img src="/flags/us.png" alt="United States flag">
//       <div class="country-text">
//         <div>United States</div>
//         <div class="country-codes">EN-US | ES-US</div>
//       </div>
//     </button>
//     <ul class="country-list">
//       <li>
//         <img src="/flags/us.png" alt="United States flag">
//         <div class="country-text">
//           <div>United States</div>
//           <div class="country-codes">EN-US | ES-US</div>
//         </div>
//       </li>
//       <li>
//         <img src="/flags/ca.png" alt="Canada flag">
//         <div class="country-text">
//           <div>Canada</div>
//           <div class="country-codes">EN-CA | FR-CA</div>
//         </div>
//       </li>
//       <li>
//         <img src="/flags/ch.png" alt="Switzerland flag">
//         <div class="country-text">
//           <div>Switzerland</div>
//           <div class="country-codes">DE-CH | FR-CH | IT-CH</div>
//         </div>
//       </li>
//       <li>
//         <img src="/flags/de.png" alt="Germany flag">
//         <div class="country-text">
//           <div>Germany</div>
//           <div class="country-codes">DE-DE</div>
//         </div>
//       </li>
//       <li>
//         <img src="/flags/fr.png" alt="France flag">
//         <div class="country-text">
//           <div>France</div>
//           <div class="country-codes">FR-FR</div>
//         </div>
//       </li>
//       <li>
//         <img src="/flags/es.png" alt="Spain flag">
//         <div class="country-text">
//           <div>Spain</div>
//           <div class="country-codes">ES-ES</div>
//         </div>
//       </li>
//       <li>
//         <img src="/flags/it.png" alt="Italy flag">
//         <div class="country-text">
//           <div>Italy</div>
//           <div class="country-codes">IT-IT</div>
//         </div>
//       </li>
//     </ul>
//   `;

//   // Toggle dropdown on click
//   const toggleButton = countrySelector.querySelector('.country-toggle');
//   toggleButton.addEventListener('click', () => {
//     countrySelector.classList.toggle('open');
//   });

//   // Append Sign In and Country Selector
//   topStrip.appendChild(signIn);
//   topStrip.appendChild(countrySelector);

//   /* Existing nav (white strip) */
//   const nav = document.createElement('nav');
//   nav.id = 'nav';
//   while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

//   const classes = ['brand', 'sections', 'tools'];
//   classes.forEach((c, i) => {
//     const section = nav.children[i];
//     if (section) section.classList.add(`nav-${c}`);
//   });

//   const navBrand = nav.querySelector('.nav-brand');
//   const brandLink = navBrand?.querySelector('.button');
//   if (brandLink) {
//     brandLink.className = '';
//     brandLink.closest('.button-container').className = '';
//   }

//   const navSections = nav.querySelector('.nav-sections');
//   if (navSections) {
//     navSections.querySelectorAll(':scope .default-content-wrapper > ul > li').forEach((navSection) => {
//       if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
//       navSection.addEventListener('click', () => {
//         if (isDesktop.matches) {
//           const expanded = navSection.getAttribute('aria-expanded') === 'true';
//           toggleAllNavSections(navSections);
//           navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
//         }
//       });
//     });
//   }

//   // Hamburger for mobile
//   const hamburger = document.createElement('div');
//   hamburger.classList.add('nav-hamburger');
//   hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
//       <span class="nav-hamburger-icon"></span>
//     </button>`;
//   hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
//   nav.prepend(hamburger);
//   nav.setAttribute('aria-expanded', 'false');
//   toggleMenu(nav, navSections, isDesktop.matches);
//   isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

//   // Append strips in order
//   navWrapper.append(topStrip);
//   navWrapper.append(nav);
//   block.append(navWrapper);
// }
import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

// media query for desktop
const isDesktop = window.matchMedia('(min-width: 900px)');

function closeOnEscape(e) {
  if (e.code === 'Escape') {
    const nav = document.getElementById('nav');
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      toggleAllNavSections(navSections);
      navSectionExpanded.focus();
    } else if (!isDesktop.matches) {
      toggleMenu(nav, navSections);
      nav.querySelector('button').focus();
    }
  }
}

function closeOnFocusLost(e) {
  const nav = e.currentTarget;
  if (!nav.contains(e.relatedTarget)) {
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      toggleAllNavSections(navSections, false);
    } else if (!isDesktop.matches) {
      toggleMenu(nav, navSections, false);
    }
  }
}

function openOnKeydown(e) {
  const focused = document.activeElement;
  const isNavDrop = focused.className === 'nav-drop';
  if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
    const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
    toggleAllNavSections(focused.closest('.nav-sections'));
    focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
  }
}

function focusNavSection() {
  document.activeElement.addEventListener('keydown', openOnKeydown);
}

function toggleAllNavSections(sections, expanded = false) {
  sections.querySelectorAll('.nav-sections .default-content-wrapper > ul > li').forEach((section) => {
    section.setAttribute('aria-expanded', expanded);
  });
}

function toggleMenu(nav, navSections, forceExpanded = null) {
  const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
  const button = nav.querySelector('.nav-hamburger button');
  document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
  nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
  button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  const navDrops = navSections.querySelectorAll('.nav-drop');
  if (isDesktop.matches) {
    navDrops.forEach((drop) => {
      if (!drop.hasAttribute('tabindex')) {
        drop.setAttribute('tabindex', 0);
        drop.addEventListener('focus', focusNavSection);
      }
    });
  } else {
    navDrops.forEach((drop) => {
      drop.removeAttribute('tabindex');
      drop.removeEventListener('focus', focusNavSection);
    });
  }

  if (!expanded || isDesktop.matches) {
    window.addEventListener('keydown', closeOnEscape);
    nav.addEventListener('focusout', closeOnFocusLost);
  } else {
    window.removeEventListener('keydown', closeOnEscape);
    nav.removeEventListener('focusout', closeOnFocusLost);
  }
}

export default async function decorate(block) {
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);

  // clear block
  block.textContent = '';

  const navWrapper = document.createElement('div');
  navWrapper.className = 'nav-wrapper';

  /* Top black strip */
  const topStrip = document.createElement('div');
  topStrip.className = 'top-strip';

  // Sign In link
  const signIn = document.createElement('a');
  signIn.href = '#';
  signIn.textContent = 'Sign In';
  signIn.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('', '_blank');
  });

  // Extract country dropdown entries from the HTML
  const countrySource = fragment.querySelector('.flag-wrapper');
  const countries = Array.from(countrySource?.querySelectorAll(':scope > div') || []);

  const countrySelector = document.createElement('div');
  countrySelector.className = 'country-selector';

  // Use the first item as default
  const first = countries[0];
  const firstFlag = first?.querySelector('img')?.src;
  const firstName = first?.querySelectorAll('p')[1]?.textContent;
  const firstCodes = first?.querySelectorAll('p')[2]?.textContent;

  countrySelector.innerHTML = `
    <button type="button" class="country-toggle">
      <img src="${firstFlag}" alt="${firstName}">
      <div class="country-text">
        <div>${firstName}</div>
        <div class="country-codes">${firstCodes}</div>
      </div>
    </button>
    <ul class="country-list">
      ${countries
        .map((el) => {
          const flag = el.querySelector('img')?.src;
          const name = el.querySelectorAll('p')[1]?.textContent;
          const codes = el.querySelectorAll('p')[2]?.textContent;
          return `
            <li>
              <img src="${flag}" alt="${name}">
              <div class="country-text">
                <div>${name}</div>
                <div class="country-codes">${codes}</div>
              </div>
            </li>`;
        })
        .join('')}
    </ul>
  `;

  // Toggle dropdown
  const toggleButton = countrySelector.querySelector('.country-toggle');
  toggleButton.addEventListener('click', () => {
    countrySelector.classList.toggle('open');
  });

  // Select a country
  countrySelector.querySelectorAll('.country-list li').forEach((item) => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img').src;
      const name = item.querySelector('.country-text div:first-child').textContent;
      const codes = item.querySelector('.country-codes').textContent;
      toggleButton.querySelector('img').src = img;
      toggleButton.querySelector('.country-text div:first-child').textContent = name;
      toggleButton.querySelector('.country-codes').textContent = codes;
      countrySelector.classList.remove('open');
    });
  });

  // Append Sign In and Country Selector
  topStrip.appendChild(signIn);
  topStrip.appendChild(countrySelector);

  /* Nav */
  const nav = document.createElement('nav');
  nav.id = 'nav';
  while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

  const classes = ['brand', 'sections', 'tools'];
  classes.forEach((c, i) => {
    const section = nav.children[i];
    if (section) section.classList.add(`nav-${c}`);
  });

  const navSections = nav.querySelector('.nav-sections');
  if (navSections) {
    navSections.querySelectorAll(':scope .default-content-wrapper > ul > li').forEach((navSection) => {
      if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
      navSection.addEventListener('click', () => {
        if (isDesktop.matches) {
          const expanded = navSection.getAttribute('aria-expanded') === 'true';
          toggleAllNavSections(navSections);
          navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        }
      });
    });
  }

  // Hamburger
  const hamburger = document.createElement('div');
  hamburger.classList.add('nav-hamburger');
  hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
    <span class="nav-hamburger-icon"></span>
  </button>`;
  hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
  nav.prepend(hamburger);
  nav.setAttribute('aria-expanded', 'false');
  toggleMenu(nav, navSections, isDesktop.matches);
  isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

  navWrapper.append(topStrip);
  navWrapper.append(nav);
  block.append(navWrapper);
}

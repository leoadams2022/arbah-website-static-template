function handleNavBarFunctionality() {
  // header scroll effect
  document.addEventListener('scroll', () => {
    const header = document.querySelector('.theme-header-graper');
    const progress = document.querySelector('#progress');

    if (window.scrollY > 0) {
      header.classList.add('shadow-theme');
      header.classList.add('bg-slate-50');
      header.classList.remove('pt-[40px]');
      if (progress) progress.classList.remove('hidden');
    } else {
      header.classList.remove('shadow-theme');
      header.classList.remove('bg-slate-50');
      header.classList.add('pt-[40px]');
      if (progress) progress.classList.add('hidden');
    }
  });

  // handle submenus
  const navUl = document.getElementById('navigation-ul');

  // Helper function to hide an element
  const hideElement = (element) => {
    element.classList.add('hidden');
  };

  // Helper function to hide an element if clicked outside
  const hideElementOnClickOutside = (element, event) => {
    if (!element.contains(event.target)) {
      hideElement(element);
      document.removeEventListener('click', element._outsideClickHandler); // Clean up listener
    }
  };

  // Function to hide all submenus
  const hideAllSubMenus = () => {
    const subMenus = document.querySelectorAll('.sub-menu');
    subMenus.forEach((menu) => hideElement(menu));
  };

  if (navUl) {
    // Loop over all <li> children of the navigation-ul
    const liChildren = navUl.children;
    for (let i = 0; i < liChildren.length; i++) {
      const li = liChildren[i];

      // Check if <li> has the class 'contain-sub-menu'
      if (li.classList.contains('contain-sub-menu')) {
        const subMenu = li.querySelector('.sub-menu');

        li.addEventListener('click', (event) => {
          event.stopPropagation(); // Prevent click from bubbling up

          // Toggle submenu visibility
          if (subMenu.classList.contains('hidden')) {
            hideAllSubMenus(); // Close all other submenus
            subMenu.classList.remove('hidden');

            // Add a one-time event listener for clicks outside the submenu
            const outsideClickHandler = (e) =>
              hideElementOnClickOutside(subMenu, e);
            document.addEventListener('click', outsideClickHandler);

            // Store the reference to the handler so it can be removed later
            subMenu._outsideClickHandler = outsideClickHandler;
          }
        });
      }
    }

    // Add scroll event to hide submenus
    window.addEventListener('scroll', () => {
      hideAllSubMenus();
    });
  } else {
    console.error('The ul element with the specified ID was not found.');
  }
}
handleNavBarFunctionality();
// mobile menu
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const mobileUlParent = document.getElementById('mobile-menu-ul-parent');
const mobileCloseBtn = document.getElementById('mobile-menu-close-button');
menuBtn.addEventListener('click', () => {
  menu.classList.add('left-0');
  menu.classList.remove('-left-full');
});
menu.addEventListener('click', () => {
  menu.classList.remove('left-0');
  menu.classList.add('-left-full');
});
mobileCloseBtn.addEventListener('click', () => {
  menu.classList.remove('left-0');
  menu.classList.add('-left-full');
});
mobileUlParent.addEventListener('click', (e) => {
  e.stopPropagation();
});

//handle buttons
function styleThemeButtons() {
  const buttons = document.querySelectorAll('.theme-button');
  buttons.forEach((button) => {
    // Add button classes
    button.classList.add(
      'whitespace-nowrap',
      'relative',
      'px-4',
      'py-2',
      // 'font-bold',
      'p-normal',
      'text-themeBlue',
      'rounded-lg',
      'group'
    );

    // Create the first span
    const span1 = document.createElement('span');
    span1.classList.add(
      'block',
      '-z-10',
      'rounded-lg',
      'size-full',
      'absolute',
      'inset-0',
      'opacity-100',
      'group-hover:opacity-0',
      'bg-gradient-to-r',
      'from-themeGreen',
      'via-themeGreen/60',
      'to-themeGreen',
      'transition', // Individual class
      'duration-300' // Individual class
    );

    // Create the second span
    const span2 = document.createElement('span');
    span2.classList.add(
      'block',
      '-z-10',
      'rounded-lg',
      'size-full',
      'absolute',
      'inset-0',
      'opacity-0',
      'group-hover:opacity-100',
      'bg-gradient-to-r',
      'from-themeGreen/60',
      'via-themeGreen',
      'to-themeGreen/60',
      'transition', // Individual class
      'duration-300' // Individual class
    );

    // Append spans to button
    button.appendChild(span1);
    button.appendChild(span2);
  });
}
styleThemeButtons();

// slider
import KeenSlider from './keen-slider@6.8.6.js';
function initKeenSlider() {
  const keenSlider = new KeenSlider(
    '#keen-slider',
    {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 1.5,
            spacing: 32,
          },
        },
      },
      created(slider) {
        setTimeout(() => setActiveClass(slider), 0); // Ensures DOM is fully rendered
        setTimeout(() => stratAutoScroll(), 0); // auto scroll
        setTimeout(() => addHoverEventToSlides(), 0); // add hover event
      },
      slideChanged(s) {
        setActiveClass(s);
      },
    },
    []
  );

  const keenSliderPrevious = document.getElementById('keen-slider-previous');
  const keenSliderNext = document.getElementById('keen-slider-next');

  const keenSliderPreviousDesktop = document.getElementById(
    'keen-slider-previous-desktop'
  );
  const keenSliderNextDesktop = document.getElementById(
    'keen-slider-next-desktop'
  );

  keenSliderPrevious.addEventListener('click', () => {
    keenSlider.prev();
    pauseAutoScroll(3000);
  });
  keenSliderNext.addEventListener('click', () => {
    keenSlider.next();
    pauseAutoScroll(3000);
  });

  keenSliderPreviousDesktop.addEventListener('click', () => {
    keenSlider.prev();
    pauseAutoScroll(3000);
  });
  keenSliderNextDesktop.addEventListener('click', () => {
    keenSlider.next();
    pauseAutoScroll(3000);
  });

  // Function to add 'active-slide' class to the active slide
  function setActiveClass(slider) {
    const slides = slider.track.details.slides;

    // Ensure slides exist
    if (!slides) {
      console.error('Slides are undefined. Check slider initialization.');
      return;
    }

    // Determine the active slide index
    const activeSlideIndex = slider.track.details?.rel;
    if (activeSlideIndex === undefined) {
      console.error(
        'Active slide index is undefined. Check KeenSlider details.'
      );
      return;
    }

    // Add the 'active-slide' class to the active slide
    // const activeSlideElement = slides[activeSlideIndex]?.el;
    const slidesParent = document.getElementById('keen-slider');
    Array.from(slidesParent.children).forEach((child) =>
      child.classList.remove('active')
    );
    const activeSlideElement = slidesParent.children[activeSlideIndex];
    if (activeSlideElement) {
      activeSlideElement.classList.add('active');
    } else {
      console.error(
        `Slide element for index ${activeSlideIndex} is undefined.`
      );
    }
  }
  // auto scroll
  let autoScrollInterval;
  let autoScrollStatus = true;
  function stratAutoScroll() {
    // Check if the screen width is greater than 1024px before starting auto-scroll
    if (window.innerWidth < 1024) {
      autoScrollStatus = false;
      return;
    }
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
    }
    autoScrollStatus = true;
    autoScrollInterval = setInterval(() => {
      keenSlider.next();
    }, 3000);
  }
  function pauseAutoScroll(timeout) {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      if (autoScrollStatus) {
        setTimeout(() => {
          stratAutoScroll();
        }, timeout);
      }
    }
  }
  function stopAutoScroll() {
    autoScrollStatus = false;
    clearInterval(autoScrollInterval);
  }
  function addHoverEventToSlides() {
    const slider = document.getElementById('keen-slider');
    slider.addEventListener('mouseenter', () => {
      stopAutoScroll();
    });
    slider.addEventListener('mouseleave', () => {
      stratAutoScroll();
    });
  }
}
initKeenSlider();

function initKeenSlider2() {
  const keenSlider = new KeenSlider('#keen-slider-2', {
    loop: true,
    slides: {
      origin: 'center',
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 5,
        },
      },
      '(min-width: 768px) and (max-width: 1024px)': {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
    },
    created(slider) {
      setTimeout(() => stratAutoScroll(), 0); // auto scroll
      setTimeout(() => addHoverEventToSlides(), 0); // add hover event
    },
  });
  // auto scroll
  let autoScrollInterval;
  let autoScrollStatus = true;
  function stratAutoScroll() {
    // Check if the screen width is greater than 1024px before starting auto-scroll
    if (window.innerWidth < 1024) {
      autoScrollStatus = false;
      return;
    }
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
    }
    if (autoScrollStatus) {
      autoScrollInterval = setInterval(() => {
        keenSlider.next();
      }, 3000);
    }
  }
  function stopAutoScroll() {
    autoScrollStatus = false;
    clearInterval(autoScrollInterval);
  }
  function addHoverEventToSlides() {
    const slider = document.getElementById('keen-slider-2');
    slider.addEventListener('mouseenter', () => {
      stopAutoScroll();
    });
    slider.addEventListener('mouseleave', () => {
      autoScrollStatus = true;
      stratAutoScroll();
    });
  }
}
initKeenSlider2();

function initKeenSlider3() {
  const keenSlider = new KeenSlider('#keen-slider-3', {
    loop: true,
    slides: {
      origin: 'center',
      perView: 3,
      spacing: 10,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 5,
        },
      },
      '(min-width: 768px) and (max-width: 1024px)': {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
    },
    created(slider) {
      setTimeout(() => stratAutoScroll(), 0); // auto scroll
      setTimeout(() => addHoverEventToSlides(), 0); // add hover event
    },
  });
  // auto scroll
  let autoScrollInterval;
  let autoScrollStatus = true;
  function stratAutoScroll() {
    // Check if the screen width is greater than 1024px before starting auto-scroll
    if (window.innerWidth < 1024) {
      autoScrollStatus = false;
      return;
    }
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
    }
    if (autoScrollStatus) {
      autoScrollInterval = setInterval(() => {
        keenSlider.next();
      }, 3000);
    }
  }
  function stopAutoScroll() {
    autoScrollStatus = false;
    clearInterval(autoScrollInterval);
  }
  function addHoverEventToSlides() {
    const slider = document.getElementById('keen-slider-2');
    slider.addEventListener('mouseenter', () => {
      stopAutoScroll();
    });
    slider.addEventListener('mouseleave', () => {
      autoScrollStatus = true;
      stratAutoScroll();
    });
  }
}
initKeenSlider3();
function initContactUsForm() {
  // Select the form by its ID
  const form = document.getElementById('contact-us-form');

  // Get all input fields inside the form
  const inputs = form.querySelectorAll('input, textarea'); // Includes both input and textarea elements

  // Loop over each input field
  inputs.forEach((input) => {
    // Add an event listener for the 'input' event
    input.addEventListener('input', (e) => {
      if (e.target.value.trim() !== '') {
        // If input has a value, add the data-te-input-state-active attribute
        e.target.setAttribute('data-te-input-state-active', '');
      } else {
        // If input is empty, remove the attribute
        e.target.removeAttribute('data-te-input-state-active');
      }
    });

    // Handle state on page load (e.g., prefilled values)
    if (input.value.trim() !== '') {
      input.setAttribute('data-te-input-state-active', '');
    } else {
      input.removeAttribute('data-te-input-state-active');
    }
  });
}

initContactUsForm();

function requestOurServicesNowButton() {
  const requestServicesBtn = document.getElementById(
    'request-our-services-now-button'
  );
  requestServicesBtn.addEventListener('click', () => {
    // Scroll the page by 100vh
    // Select the section you want to scroll to
    const section = document.querySelector('#contact-us-section');
    scrollToElementWithOffset(section);
  });

  function scrollToElementWithOffset(element, offset = 0) {
    // Get the element's bounding rectangle
    const elementRect = element.getBoundingClientRect();
    // Calculate the position to scroll to
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const offsetPosition = absoluteElementTop + offset;

    // Smoothly scroll to the calculated position
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}
requestOurServicesNowButton();

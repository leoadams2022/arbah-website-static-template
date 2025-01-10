const discoverMoreBtn = document.getElementById('discover-more-btn');
discoverMoreBtn.addEventListener('click', () => {
  // Scroll the page by 100vh
  // Select the section you want to scroll to
  const section = document.querySelector('#what-we-offer-section');
  scrollToElementWithOffset(section, -90);
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

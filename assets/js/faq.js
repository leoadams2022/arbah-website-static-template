console.log('faq loaded');

function toggleAnswer(quastionElement) {
  const svgElement = quastionElement.querySelector('svg');
  const answerElement = quastionElement.nextElementSibling;
  const isOpen = !answerElement.classList.contains('h-0');
  svgElement.classList.toggle('-rotate-90');

  if (isOpen) {
    answerElement.classList.toggle('pt-6');
    answerElement.classList.toggle('scale-y-0');
    setTimeout(() => {
      answerElement.classList.toggle('h-0');
    }, 155);
  } else {
    answerElement.classList.toggle('h-0');
    setTimeout(() => {
      answerElement.classList.toggle('pt-6');
      answerElement.classList.toggle('scale-y-0');
    }, 10);
  }
}

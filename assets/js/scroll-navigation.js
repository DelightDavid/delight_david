document.addEventListener('DOMContentLoaded', function () {
  // Define the list of page URLs
  const pages = [
    'Home.html',
    'About.html',
    'Counter.html',
    'Skill.html',
    'Contact.html',
    'Resume.html',
  ];

  // Function to navigate to the next page
  function navigateNext() {
    const currentPage = window.location.href;
    const currentPageIndex = pages.indexOf(currentPage);
    if (currentPageIndex < pages.length - 1) {
      window.location.href = pages[currentPageIndex + 1];
    }
  }

  // Function to navigate to the previous page
  function navigatePrevious() {
    const currentPage = window.location.href;
    const currentPageIndex = pages.indexOf(currentPage);
    if (currentPageIndex > 0) {
      window.location.href = pages[currentPageIndex - 1];
    }
  }

  // Listen for the mouse wheel event
  window.addEventListener('wheel', function (event) {
    if (event.deltaX > 0) {
      // Scrolling right, navigate to the next page
      navigateNext();
    } else if (event.deltaX < 0) {
      // Scrolling left, navigate to the previous page
      navigatePrevious();
    }
  });
});

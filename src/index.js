const wrapper = document.querySelector('[data-wrapper]');
const form = document.querySelector('[data-form]');
const template = document.querySelector('template');

function handleSubmit(e) {
  e.preventDefault();

  // Get the selected rating using FormData
  const formData = new FormData(e.target);
  const rating = formData.get('rating');
  
  // Create a new element from the template content
  const newContent = document.importNode(template.content, true);

  // Replace the placeholder with the selected rating
  const ratingTemp = newContent.querySelector('[data-rating]');
  ratingTemp.textContent = rating;
  
  // Replace the existing content with the new content
  wrapper.innerHTML = '';
  wrapper.appendChild(newContent);
}

form.addEventListener('submit', handleSubmit);
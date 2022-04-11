async function workoutFormHandler(event) {
    event.preventDefault();
  
    // const tag_name = document
    // .querySelector('.checkbox')
    // .value.trim();

    const name = document
    .querySelector('#workout-name')
    .value.trim();

    const description = document
      .querySelector('#workout-description')
      .value.trim();
    
    const duration = document
    .querySelector('#workout-duration')
    .value.trim();
  
    if (name && description && duration) {
      const response = await fetch('/dashboard/new', {
        method: 'POST',
        body: JSON.stringify({
          name,
          description,
          duration,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  console.log(response);
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
        document.querySelector('#workout-form').style.display = 'block';
      }
    }
  }
  
  document
    .querySelector('.workout-form')
    .addEventListener('submit', workoutFormHandler);
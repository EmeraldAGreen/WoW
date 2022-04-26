async function workoutFormHandler(event) {
    event.preventDefault();
  
    // do one for each option like;  const core = document.querySelector('#core'). check for boolean, and update w a post
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
      const response = await fetch('/api/workouts/new', {

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
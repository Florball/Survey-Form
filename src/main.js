  const data = new FormData(form);
  console.log(data);
  console.log(data.get('user'));
  fetch('form.php', {
    method: 'POST',
    body: data
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })


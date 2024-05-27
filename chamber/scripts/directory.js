fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('directory-container');
    data.members.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('member-card');
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership Level: ${member.membershipLevel}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading members:', error));

document.getElementById('toggle-view').addEventListener('click', () => {
  const container = document.getElementById('directory-container');
  container.classList.toggle('grid-view');
  container.classList.toggle('list-view');
});

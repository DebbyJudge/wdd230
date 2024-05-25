fetch('data/links.json')
  .then(response => response.json())
  .then(data => {
    const nav = document.querySelector('nav');
    data.weeks.forEach(week => {
      const weekSection = document.createElement('div');
      weekSection.classList.add('week');
      const weekHeader = document.createElement('h2');
      weekHeader.textContent = week.week;
      weekSection.appendChild(weekHeader);
      const linkList = document.createElement('ul');
      week.links.forEach(link => {
        const listItem = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.title;
        listItem.appendChild(a);
        linkList.appendChild(listItem);
      });
      weekSection.appendChild(linkList);
      nav.appendChild(weekSection);
    });
  })
  .catch(error => console.error('Error loading links:', error));

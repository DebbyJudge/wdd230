const baseURL = "https://debbyjudge.github.io/wdd230/";
const linksURL = "https://debbyjudge.github.io/wdd230/data/links.json";


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const linksContainer = document.getElementById('links-container');
    linksContainer.innerHTML = ''; // Clear existing content

    weeks.forEach(week => {
        const weekElement = document.createElement('div');
        weekElement.className = 'week';
        
        const weekTitle = document.createElement('h3');
        weekTitle.textContent = week.week;
        weekElement.appendChild(weekTitle);
        
        const linkList = document.createElement('ul');
        week.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = `${baseURL}${link.url}`;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linkList.appendChild(listItem);
        });

        weekElement.appendChild(linkList);
        linksContainer.appendChild(weekElement);
    });
}

getLinks();

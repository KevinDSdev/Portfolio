import { ProjectDatas } from './ProjectData.js';

const container = document.getElementById('ProjContainer');

export function renderProjCards(filter = '') {
  if (!container) return;

  container.innerHTML = ''; 

  ProjectDatas
    .filter(proj => proj.Name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(proj => {
      const card = document.createElement('div');
      card.className = 'Blogcard';
      card.innerHTML = `
        <div class="BlogIMG">
          <img src="./Images/BlogIMGs/${proj.ImageName}.png" alt="${proj.Name}">
        </div>
        <div class="BlogHeading">
          <h2>${proj.Name}</h2>
        </div>
      `;
      container.appendChild(card);
    });
}

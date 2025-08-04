
import { BlogDatas } from './BlogData.js';

const container = document.getElementById('BlogContainer');

export function renderBlogCards(filter = '') {
  if (!container) return;

  container.innerHTML = ''; 

  BlogDatas
    .filter(blog => blog.Name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(blog => {
      const card = document.createElement('div');
      card.className = 'Blogcard';
      card.innerHTML = `
        <div class="BlogIMG">
          <img src="./Images/BlogIMGs/${blog.ImageName}.png" alt="${blog.Name}">
        </div>
        <div class="BlogHeading">
          <h2>${blog.Name}</h2>
        </div>
      `;
      container.appendChild(card);
    });
}

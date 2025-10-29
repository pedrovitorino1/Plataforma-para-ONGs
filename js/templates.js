 function renderProject(project) {
  const container = document.getElementById('projectsContainer');
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <button>Saiba Mais</button>
  `;
  container.appendChild(card);
}

 const projects = [
  {title: 'Projeto A', description: 'Descrição do projeto A'},
  {title: 'Projeto B', description: 'Descrição do projeto B'}
];

projects.forEach(p => renderProject(p));


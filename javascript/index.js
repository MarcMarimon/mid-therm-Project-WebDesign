document.addEventListener("DOMContentLoaded", function() {
    fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
    .then(response => response.json())
    .then(data => {
        const projectContainers = document.querySelectorAll('.project-article');
        const randomProjects = getRandomProjects(data, 3);

        randomProjects.forEach((project, index) => {
            const projectContainer = projectContainers[index];
            const projectNameElement = projectContainer.querySelector('h4');
            const projectDescriptionElement = projectContainer.querySelector('p');
            const projectImageElement = projectContainer.querySelector('img');
            const projectLearnMoreLink = projectContainer.querySelector('a');

            projectNameElement.textContent = project.name;
            projectDescriptionElement.textContent = project.description;
            projectImageElement.src = project.image;

            projectLearnMoreLink.href = `./actualProject/project.html?id=${project.uuid}`;
        });
    })
    .catch(error => console.error('Error charging projects:', error));
});

function getRandomProjects(projects, num) {

    const shuffledProjects = projects.slice();

    for (let i = shuffledProjects.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledProjects[i], shuffledProjects[j]] = [shuffledProjects[j], shuffledProjects[i]];
    }

    return shuffledProjects.slice(0, num);
}

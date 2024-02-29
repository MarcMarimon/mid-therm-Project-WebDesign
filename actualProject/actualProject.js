function loadActualProject(projectId) {
    fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
        .then(response => response.json())
        .then(projects => {
            const project = projects.find(project => project.uuid === projectId);
            if (project) {
                const projectNameElement = document.querySelector('.project-name');
                const projectDescriptionElement = document.querySelector('.project-description');
                const completedOnElement = document.querySelector('.project-completed-on > date');
                const projectImageElement = document.querySelectorAll('.project-img');
                const projectContentElement = document.querySelector('.project-content');

                projectNameElement.textContent = project.name;
                projectDescriptionElement.textContent = project.description;
                completedOnElement.textContent = project.completed_on;
                projectImageElement.forEach((element) => {
                    element.src = project.image;    
                })
                projectContentElement.innerHTML = project.content;
            } else {
                console.log('Project not found');
            }

        })
        .catch(error => console.error('Error charging projects by ID: ', error));

}
function loadOtherProjects() {
    fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
        .then(response => response.json())
        .then(data => {
            const actualProject = document.querySelector('.project-name').textContent;
            const otherProjects = data.filter(project => project.name !== actualProject);
            const projectContainers = document.querySelectorAll('.project-article');
            for (let i = otherProjects.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [otherProjects[i], otherProjects[j]] = [otherProjects[j], otherProjects[i]];
            }

            for (let i = 0; i < projectContainers.length; i++) {
                const projectContainer = projectContainers[i]
                const projectImageElement = projectContainer.querySelector('img');
                const projectNameElement = projectContainer.querySelector('h4');
                const projectDescriptionElement = projectContainer.querySelector('p');
                const projectLearnMoreLink = projectContainer.querySelector('a');

                projectImageElement.src = otherProjects[i].image;
                projectNameElement.textContent = otherProjects[i].name;
                projectDescriptionElement.textContent = otherProjects[i].description;
                projectLearnMoreLink.href = `./project.html?id=${otherProjects[i].uuid}`
            }
        })
        .catch(error => console.error('Error charging other projects: ', error));
}
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    loadActualProject(projectId);
    loadOtherProjects();
});




function Projects() {
    const projects = [
        {
            name: "TaskPom",
            description: "A simple task management app built with React."
        },
        {
            name: "Weather Dashboard",
            description: "A weather forecasting app that provides real-time weather updates from an API."
        }
    ];

    return(
        <section>
            <h2>Projects</h2>
            {projects.length === 0 ? (
                <p>No projects available - check again soon!</p>
            ) : (
                <ul>
                    {projects.map(project => (
                        <li key = {project.id}>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </li>
                    ))}
                </ul>
            )
        }
        </section>
    )
}

export default Projects;
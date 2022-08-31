import { GET_PROJECTS } from '../queries/projectQueries';
import { useQuery } from '@apollo/client';
import Spinner from './Spinner';
import ProjectCard from './ProjectCard';

function Projects() {

    const { loading, error, data } = useQuery(GET_PROJECTS);

    if(loading) return <Spinner/>

    if(error) return <h4>Something went wrong...</h4>

  return (
    <>
        {data.projects.length > 0 ? (
            <div className="row mt-5">
                {data.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        ) : (<p>No Projects!</p>)}
    </>
  )
}

export default Projects
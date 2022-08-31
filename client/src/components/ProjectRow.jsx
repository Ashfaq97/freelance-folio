import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '../mutations/projectMutations';
import { GET_PROJECTS } from '../queries/projectQueries';

function ProjectRow({project}) {

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: {id: project.id},
        update(cache, { data: { deleteProject } }) {
            const { projects } = cache.readQuery({ query: GET_PROJECTS });
            cache.writeQuery({
                query: GET_PROJECTS,
                data: {projects: projects.filter(project => project.id !== deleteProject.id)}
            })
        }
    });

  return (
    <tr>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>
            <button className="btn btn-danger btn-sm" onClick={deleteClient}>
                
                <FaTrash/>
            </button>
        </td>
    </tr>
  )
}

export default ClientRow
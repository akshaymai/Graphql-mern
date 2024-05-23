import AddClient from "../AddClient";
import AddProjectModal from "../AddProject";
import Clients from "../Clients";
import Projects from "../Projects";

 

export default function Home() {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddClient />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}
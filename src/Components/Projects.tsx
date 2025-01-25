import { ProjectInfo } from "../User";
import ProjectCard from "./ProjectCard";

// Dummy data for ProjectInfo

const Projects = () => {
  return (
    <div className="px-16 my-10 font-mono md-mx:px-6" id="Projects">
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-White">
        <span className="text-primaryColor">02.&nbsp;</span>Projects
      </h1>
      <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
        {
          ProjectInfo.map((project:any, index:number)=><ProjectCard key={index} title={project.title} decs={
            project.decs} image={project.image} live={project.live} technologies={project.technologies} link={project.link} github={project.github
          } />)
        }
      </div>
    </div>
  )
}
export default Projects;

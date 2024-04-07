'use client';

import { useEffect, useState } from "react";
import { getProjects } from "../lib/getData";
import { RecordModel } from "pocketbase";

export default function ProjectList() {
  const [projects, setProjects] = useState<RecordModel[] | null>(null);
  
  useEffect(() => {
    const fetchProjects = async () => {
      const projectData = await getProjects();
      setProjects(projectData);
    };
    fetchProjects();
  }, []);

  if (!projects) {
    return <div>Loading...</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
      {projects.map(project => (
        <div key={project.id} className="flex flex-col bg-[#1a1a2e] p-4 rounded-lg shadow-lg shadow-[#1a1a2e]/50 h-full">
          <h3 className="text-[#00cc00] text-lg mb-2" style={{textShadow: '0 0 2px #00cc00, 0 0 5px #00cc00'}}>
            {project.name}  
          </h3>
          <img src={project.imageUrl} alt={project.name} className="w-full h-64 object-cover rounded-md mb-4"/>
          <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
          <a href={project.github} className="text-[#00cc00] font-bold hover:text-green-500 transition duration-300 ease-in-out" style={{textShadow: '0 0 2px #00cc00, 0 0 5px #00cc00'}}>
            [GitHub Link]
          </a>
        </div>
      ))}
    </div>
  );
}

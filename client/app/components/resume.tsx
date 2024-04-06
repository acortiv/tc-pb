'use client';

import { useEffect, useState } from "react";
import { getResume } from "../lib/getData";
import { RecordModel } from "pocketbase";

export default function ResumeDisplay() {
  const [resume, setResume] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchResume = async () => {
      const projectData = await getResume();
      setResume(projectData);
    };
    fetchResume();
  }, []);

  if (!resume) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <object
        data={resume}
        type="application/pdf"
        width="750px"
        height="750px"
      />
    </div>
  );
}
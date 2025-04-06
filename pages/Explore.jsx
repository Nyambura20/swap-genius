import Navbar from "../components/Navbar";
import SkillCard from "../components/SkillCard";
import { useState } from "react";

const skillsData = [
  { id: 1, name: "Web Development", offeredBy: "Alice" },
  { id: 2, name: "Graphic Design", offeredBy: "Bob" },
  { id: 3, name: "Video Editing", offeredBy: "Charlie" },
];

export default function Explore() {
  const [skills, setSkills] = useState(skillsData);

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold text-center mt-6">Explore Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-6">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}

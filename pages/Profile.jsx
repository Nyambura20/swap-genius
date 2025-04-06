import Navbar from "../components/Navbar";
import { useState } from "react";
import { useSkills } from "../context/SkillContext";

export default function Profile() {
  const { skills, setSkills } = useSkills();
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold text-center mt-6">Your Profile</h1>
      <div className="max-w-lg mx-auto mt-6">
        <input
          type="text"
          placeholder="Enter skill to offer"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <button
          onClick={addSkill}
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Skill
        </button>
      </div>
      <div className="max-w-lg mx-auto mt-4">
        <h2 className="text-xl font-bold">Your Skills:</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index} className="border-b p-2">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

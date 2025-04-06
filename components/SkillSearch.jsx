import { useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "John Doe",
    bio: "Frontend Developer",
    skills: ["React", "Next.js", "TailwindCSS"],
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.bio}</p>
      <h3 className="mt-4 font-semibold">Skills:</h3>
      <ul className="list-disc ml-4">
        {user.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

// 📂 pages/index.js (or app/page.js for App Router)
import UserProfile from "../components/UserProfile";
import SkillSearch from "../components/SkillSearch";
import SkillRequest from "../components/SkillRequest";
import Chat from "../components/Chat";
import { useState } from "react";
import "../styles/Home.css";

export default function Home() {
  const [skills, setSkills] = useState([
    { name: "React", description: "Looking to exchange React skills" },
    { name: "Next.js", description: "Want to learn advanced Next.js" },
  ]);
  const [filteredSkills, setFilteredSkills] = useState(skills);

  const handleSearch = (query) => {
    const results = skills.filter((skill) =>
      skill.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSkills(results);
  };

  const handleRequest = (skill) => {
    alert(`Skill Swap Request Sent for ${skill.name}`);
  };

  return (
    <div className="container">
      <h1 className="title">SwapGenius</h1>
      <div className="card">
        <div className="user-profile">John Doe</div>
        <UserProfile />
      </div>
      <div className="section">
        <h2 className="subtitle">Search for Skills</h2>
        <SkillSearch onSearch={handleSearch} />
      </div>
      <div className="section">
        <h2 className="subtitle">Available Skills</h2>
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill, index) => (
            <div key={index} className="skill-name">
              <SkillRequest skill={skill} onRequest={handleRequest} />
            </div>
          ))
        ) : (
          <p className="no-results">No matching skills found.</p>
        )}
      </div>
      <div className="section">
        <h2 className="subtitle">Chat</h2>
        <Chat />
      </div>
    </div>
  );
}

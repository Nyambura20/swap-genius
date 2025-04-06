export default function SkillRequest({ skill, onRequest }) {
  return (
    <div className="border p-4 rounded-lg">
      <h3 className="font-bold">{skill.name}</h3>
      <p>{skill.description}</p>
      <button
        onClick={() => onRequest(skill)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Request Swap
      </button>
    </div>
  );
}

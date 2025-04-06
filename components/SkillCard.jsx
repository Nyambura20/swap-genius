export default function SkillCard({ skill }) {
  return (
    <div className="border p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-bold">{skill.name}</h2>
      <p className="text-gray-600">Offered by: {skill.offeredBy}</p>
      <button className="mt-2 bg-blue-500 text-green-900 px-4 py-2 rounded">
        Request Swap
      </button>
    </div>
  );
}

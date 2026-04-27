import { useState } from "react";
import API from "../services/api";

const GuestEntry = () => {
  const [name, setName] = useState("");

  const handleAdd = async () => {
    await API.post("/guest", {
      name,
      date: new Date(),
    });
  };

  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Guest Entry</h2>

        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Guest Name"
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={handleAdd}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Add Guest
        </button>
      </div>
    </div>
  );
};

export default GuestEntry;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    try {
      const res = await axios.post("http://localhost:5000/allmodels", formData);
      console.log(res.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full h-screen flex flex-col bg-gray-400 justify-center items-center gap-10">
      <h1 className="text-3xl font-bold text-center">Upload 3D Model</h1>
      <form
        className="flex flex-col items-center bg-gray-500 gap-10 pt-10 p-5 border border-black/10 shadow-lg rounded-lg shadow-black/40"
        onSubmit={handleSubmit}
      >
        <input
          className="w-[250px] border border-black/40 rounded-md p-2"
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a name"
          required
        />

        <input
          className="w-[250px] border border-black/40 rounded-md p-2"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          accept=".glb"
          required
        />
        <button
          className="px-10 py-2 rounded-lg hover:bg-black/80 border bg-black text-white"
          type="submit"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload;

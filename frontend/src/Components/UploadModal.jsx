import React, { useState } from "react";
import API from "../utils/axios";
import toast from "react-hot-toast"; 

const UploadModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    tags: "",
    description: "",
    category: "ui",
  });

  const [imageFiles, setImageFiles] = useState({
    url: null,
    image2: null,
    image3: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setImageFiles((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("tags", formData.tags);
    data.append("description", formData.description);
    data.append("category", formData.category);

    if (imageFiles.url) data.append("image", imageFiles.url);
    if (imageFiles.image2) data.append("image2", imageFiles.image2);
    if (imageFiles.image3) data.append("image3", imageFiles.image3);

    const uploadToast = toast.loading("Uploading post...");

    try {
      await API.post("/posts/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("✅ Post uploaded!", { id: uploadToast });
      onClose();
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("❌ Upload failed", { id: uploadToast });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Upload UI Post</h2>
        <form onSubmit={handleUpload} className="flex flex-col gap-3">
          {/* Category Selector */}
          <div className="flex gap-2 justify-center mb-2">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, category: "ui" })}
              className={`px-4 py-1 rounded ${formData.category === "ui" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              UI
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, category: "pic" })}
              className={`px-4 py-1 rounded ${formData.category === "pic" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              Picture
            </button>
          </div>

          <input
            type="text"
            name="name"
            placeholder="Post Title / Name"
            className="p-2 border rounded"
            onChange={handleChange}
            required
          />

          <input
            type="file"
            name="url"
            accept="image/*"
            className="p-2 border rounded"
            onChange={handleImageChange}
            required
          />
          <input
            type="file"
            name="image2"
            accept="image/*"
            className="p-2 border rounded"
            onChange={handleImageChange}
          />
          <input
            type="file"
            name="image3"
            accept="image/*"
            className="p-2 border rounded"
            onChange={handleImageChange}
          />

          <input
            type="text"
            name="tags"
            placeholder="Tags (comma separated)"
            className="p-2 border rounded"
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            className="p-2 border rounded"
            onChange={handleChange}
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1 bg-blue-500 text-white rounded"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;

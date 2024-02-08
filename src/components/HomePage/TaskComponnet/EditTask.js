import useContextData from "@/hooks/useContextData";
import { useState } from "react";

export default function EditTask({ setShowPop, taskData }) {
  // Find the task to edit based on taskId
  const { taskList, setTaskList, loading, setLoading } = useContextData();
  const [formData, setFormData] = useState({});
  console.log("taskData*****", taskData);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  console.log("formData", formData);

  const handleSubmit = (event) => {
    event.preventDefault();

    let data = localStorage.getItem("taskList");
    let localStorageData = data ? JSON.parse(data) : [];
    const updatedTaskList = localStorageData.map((task) => {
      if (task.id === taskData.id) {
        // Merge formData with existing taskData
        return { ...task, ...formData };
      }
      return task;
    });

    // Update the task list state
    setTaskList(updatedTaskList);

    // Update local storage
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));

    // Close the form
    setShowPop(false);
  };

  console.log("edit task", taskData);
  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Edit Task
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              defaultValue={taskData.title}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              name="description"
              id="description"
              defaultValue={taskData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                defaultValue={taskData.tags}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                defaultValue={taskData.priority}
                onChange={handleChange}
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Edit Task
          </button>
        </div>
      </form>
    </div>
  );
}

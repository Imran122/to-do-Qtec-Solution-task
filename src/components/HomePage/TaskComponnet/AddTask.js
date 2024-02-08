import useContextData from "@/hooks/useContextData";
import { useEffect, useState } from "react";

export default function AddTask({ setShowPop, setLoading, loading }) {
  const { taskList, setTaskList } = useContextData();
  const [id, setId] = useState(0);

  // Get the maximum id from existing tasks in local storage
  useEffect(() => {
    let data = localStorage.getItem("taskList");
    let localStorageData = data ? JSON.parse(data) : [];
    let maxId =
      localStorageData.length > 0
        ? Math.max(...localStorageData.map((task) => task.id))
        : 0;
    setId(maxId + 1);
    setTaskList(localStorageData);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new task object with the updated id
    const newTask = {
      id: id,
      title: event.target.title.value,
      description: event.target.description.value,
      tags: event.target.tags.value,
      priority: event.target.priority.value,
      completed: false,
    };

    // Update the localStorage
    let data = localStorage.getItem("taskList");
    let localStorageData = data ? JSON.parse(data) : [];
    localStorageData.push(newTask);
    localStorage.setItem("taskList", JSON.stringify(localStorageData));
    // Update the task list state
    setTaskList([...taskList, newTask]);
    // Close the form
    event.target.title.value = "";
    event.target.description.value = "";
    event.target.tags.value = "";
    event.target.priority.value = "";
    setId(id + 1);
    setLoading(!loading);
    setShowPop(false);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Add New Task
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              required
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
                placeholder="multiple tag write by coma"
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                required
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
            Create new Task
          </button>
        </div>
      </form>
    </div>
  );
}

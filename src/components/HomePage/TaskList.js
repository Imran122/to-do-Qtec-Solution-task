import useContextData from "@/hooks/useContextData";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditTask from "./TaskComponnet/EditTask";
import TaskHeader from "./TaskComponnet/TaskHeader";
const getTagColor = (tag) => {
  const hash = tag.split("").reduce((acc, char) => char.charCodeAt(0) + acc, 0);
  const color = `hsl(${hash % 360}, 70%, 50%)`;
  return color;
};
export default function TaskList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showPop, setShowPop] = useState(false);
  const [taskData, setTaskData] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    taskList,
    setTaskList,

    searchDataList,
    setSearchDataList,
  } = useContextData();
  useEffect(() => {
    let data = localStorage.getItem("taskList");
    let localStorageData = data ? JSON.parse(data) : [];
    setTaskList(localStorageData);
  }, [loading]); // Update the effect dependency
  const handleDeleteTask = (taskId) => {
    //setDeleteModal(true);

    const updatedTaskList = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTaskList);
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
  };

  const handelShow = (id) => {
    const taskToEdit = taskList.find((task) => task.id === id);
    setTaskData(taskToEdit);
    setShowPop(!showPop);
  };
  const modalClass = showPop
    ? "absolute z-50 top-40 w-full left-1/2 -translate-x-1/2 duration-700 opacity-100 scale-100 "
    : " absolute top-60 opacity-0 scale-50 w-full left-0  duration-700";

  useEffect(() => {
    const filteredTasks = taskList.filter(
      (task) =>
        task.title.toLowerCase().includes(searchQuery) ||
        task.priority.toLowerCase().includes(searchQuery)
    );
    setSearchDataList(filteredTasks);
  }, [searchQuery, taskList]);
  console.log("taskList", taskList);
  const handleCompleteTask = (taskId) => {
    const updatedTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        return { ...task, complete: true };
      }
      return task;
    });
    setTaskList(updatedTaskList);
    toast.success("Marked as completed!");
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
  };
  return (
    <section className="mb-20" id="tasks">
      <ToastContainer />
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#263046] px-6 py-8 md:px-9 md:py-16">
          <TaskHeader
            loading={loading}
            setLoading={setLoading}
            setSearchQuery={setSearchQuery}
          />

          <div className="overflow-x-auto">
            <table className="table-fixed overflow-x-auto xl:w-full">
              <thead>
                <tr>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]">
                    Status
                  </th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                    {" "}
                    Title{" "}
                  </th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                    {" "}
                    Description{" "}
                  </th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                    {" "}
                    Tags{" "}
                  </th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                    {" "}
                    Priority{" "}
                  </th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                    {" "}
                    Options{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {searchDataList.length !== 0 ? (
                  searchDataList.map((data) => (
                    <tr
                      key={data.id}
                      className="border-b border-[#656c7e] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
                    >
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`icon icon-tabler ${
                            data.complete
                              ? "icon-tabler-circle-check text-green-500"
                              : "icon-tabler-circle text-red-500"
                          }`}
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          onClick={() => handleCompleteTask(data.id)}
                          style={{ cursor: "pointer" }}
                        >
                          <circle cx="12" cy="12" r="9"></circle>
                          {data.complete && (
                            <path d="M9 12l2 2l4 -4" fill="currentColor"></path>
                          )}
                        </svg>
                      </td>
                      <td>{data.title}</td>
                      <td>
                        <div>{data.description}</div>
                      </td>
                      <td>
                        <tr>
                          {data?.tags?.split(",").map((tag, index) => (
                            <span
                              key={index}
                              className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize mx-2`}
                              style={{ backgroundColor: getTagColor(tag) }}
                            >
                              {tag}
                            </span>
                          ))}
                        </tr>
                      </td>
                      <td className="text-center">{data.priority}</td>
                      <td>
                        <div className="flex items-center justify-center space-x-3">
                          <button
                            onClick={() => handleDeleteTask(data.id)}
                            className="text-red-500"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => handelShow(data.id)}
                            className="text-blue-500"
                          >
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="text-white text-center font-extrabold">
                    <td colSpan="6">No tasks available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={modalClass}>
        <EditTask
          loading={loading}
          setLoading={setLoading}
          taskData={taskData}
          setShowPop={setShowPop}
        />
      </div>
    </section>
  );
}

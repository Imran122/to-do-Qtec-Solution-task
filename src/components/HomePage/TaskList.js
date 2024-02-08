import useContextData from "@/hooks/useContextData";
import { useEffect, useState } from "react";
import EditTask from "./TaskComponnet/EditTask";
import TaskHeader from "./TaskComponnet/TaskHeader";
const getTagColor = (tag) => {
  const hash = tag.split("").reduce((acc, char) => char.charCodeAt(0) + acc, 0);
  const color = `hsl(${hash % 360}, 70%, 50%)`;
  return color;
};
export default function TaskList() {
  const [showPop, setShowPop] = useState(false);
  const [taskData, setTaskData] = useState("");
  const { taskList, setTaskList, loading, setLoading } = useContextData();
  useEffect(() => {
    let data = localStorage.getItem("taskList");
    let localStorageData = data ? JSON.parse(data) : [];
    setTaskList(localStorageData);
  }, [loading]); // Update the effect dependency
  const handleDeleteTask = (taskData) => {
    setDeleteModal(true);
    setDeleteTaskId(taskData);
  };

  const handelShow = (id) => {
    console.log("clicktaskList", taskList);
    const taskToEdit = taskList.find((task) => task.id === id);
    setTaskData(taskToEdit);
    setShowPop(!showPop);
  };
  const modalClass = showPop
    ? "absolute z-50 top-40 w-full left-1/2 -translate-x-1/2 duration-700 opacity-100 scale-100 "
    : " absolute top-60 opacity-0 scale-50 w-full left-0  duration-700";

  console.log("taskList table:---", taskList);
  console.log("loading", loading);
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#263046] px-6 py-8 md:px-9 md:py-16">
          <TaskHeader />

          <div className="overflow-x-auto">
            <table className="table-fixed overflow-x-auto xl:w-full">
              <thead>
                <tr>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
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
                {taskList.length !== 0 ? (
                  taskList.map((data) => (
                    <tr
                      key={data.id}
                      className="border-b border-[#656c7e] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
                    >
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-star"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="yellow"
                          fill="yellow"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
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
                          <button className="text-red-500">Delete</button>
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
        <EditTask taskData={taskData} setShowPop={setShowPop} />
      </div>
    </section>
  );
}

import useContextData from "@/hooks/useContextData";
import { useEffect, useState } from "react";
import EditTask from "./TaskComponnet/EditTask";
import TaskHeader from "./TaskComponnet/TaskHeader";

export default function TaskList() {
  const [showPop, setShowPop] = useState(false);
  const { taskList, setTaskList } = useContextData();
  const handleDeleteTask = (taskId) => {
    setDeleteModal(true);
    setDeleteTaskId(taskId);
  };

  const handelShow = () => {
    setShowPop(!showPop);
  };
  const modalClass = showPop
    ? "absolute z-50 top-40 w-full left-1/2 -translate-x-1/2 duration-700 opacity-100 scale-100 "
    : " absolute top-60 opacity-0 scale-50 w-full left-0  duration-700";
  useEffect(() => {
    let data = localStorage.getItem("taskList");
    let localStorageData = data ? JSON.parse(data) : [];
    setTaskList(localStorageData);
  }, []);

  console.log("taskList:---", taskList);
  return (
    <section class="mb-20" id="tasks">
      <div class="container">
        <div class="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#263046] px-6 py-8 md:px-9 md:py-16">
          <TaskHeader />

          <div class="overflow-x-auto">
            <table class="table-fixed overflow-x-auto xl:w-full">
              <thead>
                <tr>
                  <th class="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                  <th class="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                    {" "}
                    Title{" "}
                  </th>
                  <th class="p-4 pb-8 text-sm font-semibold capitalize w-full">
                    {" "}
                    Description{" "}
                  </th>
                  <th class="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                    {" "}
                    Tags{" "}
                  </th>
                  <th class="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                    {" "}
                    Priority{" "}
                  </th>
                  <th class="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                    {" "}
                    Options{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-[#656c7e] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-star"
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
                  <td>Integration API</td>
                  <td>
                    <div>
                      Connect an existing API to a third-party database using
                      secure methods and handle data exchange efficiently.
                    </div>
                  </td>
                  <td>
                    <ul class="flex justify-center gap-1.5 flex-wrap">
                      <li>
                        <span class="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                          Web
                        </span>
                      </li>
                      <li>
                        <span class="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#1C92FFB0] px-2.5 text-sm capitalize text-[#F4F5F6]">
                          Python
                        </span>
                      </li>
                      <li>
                        <span class="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#FE1A1AB5] px-2.5 text-sm capitalize text-[#F4F5F6]">
                          API
                        </span>
                      </li>
                    </ul>
                  </td>
                  <td class="text-center">High</td>
                  <td>
                    <div class="flex items-center justify-center space-x-3">
                      <button class="text-red-500">Delete</button>
                      <button class="text-blue-500">Edit</button>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-[#656c7e] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-star"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>
                  </td>
                  <td>API Data Synchronization with Python</td>
                  <td>
                    <div>
                      Implement a Python solution to synchronize data between an
                      API and a third-party database securely, optimizing data
                      exchange.
                    </div>
                  </td>
                  <td>
                    <ul class="flex justify-center gap-1.5 flex-wrap">
                      <li>
                        <span class="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                          Python
                        </span>
                      </li>
                      <li>
                        <span class="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#FE1A1AB5] px-2.5 text-sm capitalize text-[#F4F5F6]">
                          API
                        </span>
                      </li>
                      <li>
                        <span class="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#BD560BB2] px-2.5 text-sm capitalize text-[#F4F5F6]">
                          Data Synchronization
                        </span>
                      </li>
                    </ul>
                  </td>
                  <td class="text-center">High</td>
                  <td>
                    <div class="flex items-center justify-center space-x-3">
                      <button class="text-red-500">Delete</button>
                      <button class="text-blue-500">Edit</button>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-star"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>
                  </td>
                  <td>Efficient Web API Connectivity in Python</td>
                  <td>
                    <div>
                      Develop a Python-based solution for connecting an API to a
                      third-party database securely, focusing on efficient data
                      handling and exchange.
                    </div>
                  </td>
                  <td>
                    <ul class="flex justify-center gap-1.5 flex-wrap">
                      <li>
                        <span class="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00B2D9CC] px-2.5 text-sm capitalize text-[#F4F5F6]">
                          Web
                        </span>
                      </li>
                      <li>
                        <span class="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#8407E6A8] px-2.5 text-sm capitalize text-[#F4F5F6]">
                          Python
                        </span>
                      </li>
                      <li>
                        <span class="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#07AC67D6] px-2.5 text-sm capitalize text-[#F4F5F6]">
                          API
                        </span>
                      </li>
                    </ul>
                  </td>
                  <td class="text-center">High</td>
                  <td>
                    <div class="flex items-center justify-center space-x-3">
                      <button class="text-red-500">Delete</button>
                      <button class="text-blue-500">Edit</button>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-star"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>
                  </td>
                  <td>Data Handling</td>
                  <td>
                    <div>
                      Integrate a web API with a third-party database using
                      secure methods, focusing on seamless data exchange and
                      data integrity.
                    </div>
                  </td>
                  <td>
                    <ul class="flex justify-center gap-1.5 flex-wrap">
                      <li>
                        <span class="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#2F43F8BF] px-2.5 text-sm capitalize text-[#F4F5F6]">
                          Web
                        </span>
                      </li>
                      <li>
                        <span class="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#AE6D0BDB] px-2.5 text-sm capitalize text-[#F4F5F6]">
                          Python
                        </span>
                      </li>
                      <li>
                        <span class="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#10FBEDB2] px-2.5 text-sm capitalize text-[#F4F5F6]">
                          Security
                        </span>
                      </li>
                    </ul>
                  </td>
                  <td class="text-center">High</td>
                  <td>
                    <div class="flex items-center justify-center space-x-3">
                      <button class="text-red-500">Delete</button>
                      <button class="text-blue-500">Edit</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={modalClass}>
        <EditTask setShowPop={setShowPop} />
      </div>
    </section>
  );
}

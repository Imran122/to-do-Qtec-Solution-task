import useContextData from "@/hooks/useContextData";
import { useState } from "react";
import AddTask from "./AddTask";

export default function TaskHeader({ setSearchQuery }) {
  const [showPop, setShowPop] = useState(false);
  const { taskList, setTaskList, setSearchDataList, loading, setLoading } =
    useContextData();
  const handelShow = () => {
    setShowPop(!showPop);
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const modalClass = showPop
    ? "absolute z-50 top-40 w-full left-1/2 -translate-x-1/2 duration-700 opacity-100 scale-100 "
    : " absolute top-60 opacity-0 scale-50 w-full left-0  duration-700";
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
        <input
          type="text"
          className=" w-full bg-gray-800 px-4 py-2 pr-10 "
          placeholder="Search Task by Title"
          onChange={handleSearch}
        />
      </div>
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks List</h2>
      <div className="flex items-center space-x-5">
        <form>
          <div className="flex"></div>
        </form>
        <button
          onClick={handelShow}
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
        >
          Add Task
        </button>
        <div className="space-y-2 lg:space-y-3">
          <select
            className="block w-full cursor-pointer rounded-md bg-[#263046] px-3 py-2.5"
            name="priority"
            id="priority"
            onChange={handleSearch}
            required
          >
            <option value="">FIlter By Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
      <div className={modalClass}>
        <AddTask setShowPop={setShowPop} />
      </div>
    </div>
  );
}

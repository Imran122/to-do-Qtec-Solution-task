import { useState } from "react";
import AddTask from "./AddTask";

export default function TaskHeader() {
  const [showPop, setShowPop] = useState(false);

  const handelShow = () => {
    setShowPop(!showPop);
  };
  const modalClass = showPop
    ? "absolute z-50 top-40 w-full left-1/2 -translate-x-1/2 duration-700 opacity-100 scale-100 "
    : " absolute top-60 opacity-0 scale-50 w-full left-0  duration-700";
  return (
    <div class="mb-14 items-center justify-between sm:flex">
      <h2 class="text-2xl font-semibold max-sm:mb-4">Your Tasks List</h2>
      <div class="flex items-center space-x-5">
        <form>
          <div class="flex">
            <div class="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
              <input
                type="search"
                id="search-dropdown"
                class="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
                placeholder="Search Task"
                required
              />
              <button
                type="submit"
                class="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
              >
                <svg
                  class="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
        <button
          onClick={handelShow}
          class="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
        >
          Add Task
        </button>
        <div className="space-y-2 lg:space-y-3">
          <select
            className="block w-full cursor-pointer rounded-md bg-[#263046] px-3 py-2.5"
            name="priority"
            id="priority"
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

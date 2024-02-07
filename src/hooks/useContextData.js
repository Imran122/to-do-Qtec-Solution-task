import { useState } from "react";

const useContextData = () => {
  const [taskList, setTaskList] = useState("ooo");

  return {
    taskList,
    setTaskList,
  };
};

export default useContextData;

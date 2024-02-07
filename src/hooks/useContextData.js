import { useState } from "react";

const useContextData = () => {
  const [taskList, setTaskList] = useState([]);

  return {
    taskList,
    setTaskList,
  };
};

export default useContextData;

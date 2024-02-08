import { useState } from "react";

const useContextData = () => {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(false);

  return {
    taskList,
    setTaskList,
    loading,
    setLoading,
  };
};

export default useContextData;

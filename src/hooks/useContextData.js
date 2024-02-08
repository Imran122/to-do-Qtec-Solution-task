import { useState } from "react";

const useContextData = () => {
  const [taskList, setTaskList] = useState([]);
  const [searchDataList, setSearchDataList] = useState([]);
  const [loading, setLoading] = useState(false);

  return {
    taskList,
    setTaskList,
    loading,
    setLoading,

    searchDataList,
    setSearchDataList,
  };
};

export default useContextData;

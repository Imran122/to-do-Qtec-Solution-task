import { useState } from "react";

const useContextData = () => {
  const [taskList, setTaskList] = useState([]);
  const [searchDataList, setSearchDataList] = useState([]);

  return {
    taskList,
    setTaskList,

    searchDataList,
    setSearchDataList,
  };
};

export default useContextData;

import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PerformanceRecordList from "../../components/template/listsPage/performanceRecordList";
import RequestRecordList from "../../components/template/listsPage/requestRecordList";

type ListsPageProps = {};

// eslint-disable-next-line no-empty-pattern
function Lists({}: ListsPageProps) {
  const [activeTab, setActiveTab] = useState("performanceList");
  const [value, setValue] = useState(new Date());

  console.log("activeTab", activeTab);
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div
      className="bg-[#F8FAFC] h-screen flex flex-col items-center overflow-hidden p-8"
      dir="rtl"
    >
      <div className="flex font-medium text-sm w-full">
        <Link
          to="#"
          className={clsx("h-[38px] p-2", {
            "bg-white active": activeTab === "performanceList",
          })}
          onClick={() => setActiveTab("performanceList")}
        >
          لیست عملکرد ها
        </Link>
        <Link
          to="#"
          className={clsx("h-[38px] p-2", {
            "bg-white active": activeTab === "requestList",
          })}
          onClick={() => setActiveTab("requestList")}
        >
          لیست درخواست ها
        </Link>
      </div>

      {activeTab === "performanceList" ? (
        <PerformanceRecordList />
      ) : (
        <RequestRecordList />
      )}
    </div>
  );
}

export default Lists;

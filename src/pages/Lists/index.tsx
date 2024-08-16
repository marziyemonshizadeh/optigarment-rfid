import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import PerformanceRecordList from "../../components/template/listsPage/performanceRecordList";
import RequestRecordList from "../../components/template/listsPage/requestRecordList";

type ListsPageProps = {};

function Lists({}: ListsPageProps) {
  const [activeTab, setActiveTab] = useState("requestList");
  console.log("activeTab", activeTab);

  return (
    <div
      className="bg-[#F8FAFC] font-serif h-screen flex flex-col items-center overflow-hidden p-8"
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

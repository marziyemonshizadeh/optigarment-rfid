import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import PerformanceRecordForm from "../../components/template/formsPage/performanceRecordForm";
import RequestRecordForm from "../../components/template/formsPage/requestRecordForm";

function Forms() {
  const [activeTab, setActiveTab] = useState("performanceRecord");
  return (
    <>
      <div
        dir="rtl"
        className="flex flex-col gap-3 justify-center items-center mx-auto h-screen w-[370px]"
      >
        <ul className="flex justify-evenly items-center font-medium text-base text-center w-[370px] rounded-lg text-[#1E293B] bg-[#F1F5F9] h-[54px]">
          <li
            onClick={() => {
              setActiveTab("performanceRecord");
            }}
          >
            <Link
              to="#"
              className={clsx(
                "inline-block px-4 py-[10px] rounded-lg h-[42px] min-w-[173px]",
                {
                  "text-[#1E40AF] bg-white active":
                    activeTab === "performanceRecord",
                }
              )}
              aria-current="page"
            >
              ثبت عملکرد
            </Link>
          </li>
          <li
            onClick={() => {
              setActiveTab("requestRecord");
            }}
          >
            <Link
              to="#"
              className={clsx(
                "inline-block px-4 py-[10px] rounded-lg h-[42px] min-w-[173px]",
                {
                  "text-[#1E40AF] bg-white active":
                    activeTab === "requestRecord",
                }
              )}
              aria-current="page"
            >
              ثبت درخواست
            </Link>
          </li>
        </ul>

        {activeTab === "performanceRecord" ? (
          <PerformanceRecordForm />
        ) : (
          <RequestRecordForm />
        )}
      </div>
    </>
  );
}

export default Forms;

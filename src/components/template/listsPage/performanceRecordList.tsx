import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { performance } from "../../../data/performance";
import { PerformanceRecordGetEntity } from "../../../types/PerformanceRecordGet";
import { toLocalTimeString } from "../../../utils/toLocalDate";
import BasicTable from "../../module/table";

type PerformanceRecordListProps = {};

function PerformanceRecordList({}: PerformanceRecordListProps) {
  //** Table */
  const columns = useMemo<ColumnDef<PerformanceRecordGetEntity, any>[]>(
    () => [
      {
        header: "ردیف",
        cell: (info) => (info.row.index + 1).toString(),
        size: 10,
        enableSorting: true,
      },
      {
        accessorFn: (row) => row.code.toString().padStart(5, "0") || "-",
        header: "کد",
        size: 110,
      },
      {
        accessorFn: (row) => row.name || "-",
        header: "نام",
        size: 110,
      },
      {
        accessorFn: (row) => row?.processType || `-`,
        size: 110,
        header: "نوع فرآیند",
      },
      {
        accessorFn: (row) => row.startTime,
        header: "زمان شروع",
        size: 110,
        cell: (cell) => (
          <div>
            {toLocalTimeString()}
            {/* {new Date(cell.getValue()).toLocaleTimeString( )} */}
          </div>
        ),
      },
      {
        accessorFn: (row) => row.endTime || "-",
        size: 110,
        header: "زمان پایان",
        cell: (cell) => <div>{toLocalTimeString()}</div>,
      },
    ],
    []
  );
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const localTime = toLocalTimeString();
      setTime(localTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-white w-full relative">
      <BasicTable
        column={columns}
        defaultData={performance}
        selectType="multiple"
      />
    </div>
  );
}

export default PerformanceRecordList;

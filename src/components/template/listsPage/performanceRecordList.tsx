import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { Observer } from "rosma";
import { performance } from "../../../data/performance";
import { PerformanceRecordGetEntity } from "../../../types/PerformanceRecordGet";
import { toLocalTimeString } from "../../../utils/toLocalDate";
import BasicTable from "../../module/table";

type PerformanceRecordListProps = {};
export const ObserverState = new Observer({
  selectAllCheck: [],
  searchValue: "",
  localSearchValue: "",
  sort: "",
});
// eslint-disable-next-line no-empty-pattern
function PerformanceRecordList({}: PerformanceRecordListProps) {
  //** Actions */
  function handlePrint() {
    // refetch();
  }
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
        ObserverState={ObserverState}
        actions={{
          editOpt: <div>edit</div>,
          printOpt: handlePrint,
          outputOpt: "PLANNING.getProjectDownload",
        }}
      />
    </div>
  );
}

export default PerformanceRecordList;

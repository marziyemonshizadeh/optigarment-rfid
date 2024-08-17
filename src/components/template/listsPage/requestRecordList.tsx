import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { request } from "../../../data/request";
import { RequestRecordGetEntity } from "../../../types/RequestRecordGet";
import BasicTable from "../../module/table";
import { Observer } from "rosma";

type RequestRecordListProps = {};
export const ObserverState = new Observer({
  selectAllCheck: [],
  searchValue: "",
  localSearchValue: "",
  sort: "",
});
// eslint-disable-next-line no-empty-pattern
function RequestRecordList({}: RequestRecordListProps) {
  //** Actions */
  function handlePrint() {
    // refetch();
  }
  //** Table */
  const columns = useMemo<ColumnDef<RequestRecordGetEntity, any>[]>(
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
        accessorFn: (row) => row?.requestType || `-`,
        size: 110,
        header: "نوع درخواست",
      },
      {
        accessorFn: (row) => row.requestName,
        header: "نام درخواست",
        size: 110,
      },
      {
        accessorFn: (row) => row.degreeOfImportance || "-",
        size: 110,
        header: "درجه اهمیت",
        cell: (cell) => (
          <span className="bg-[#F0FDF4] text-[#15803D] p-1">
            {cell.getValue()}
          </span>
        ),
      },
      {
        accessorFn: (row) => row.descriptionOfTheProblem || "-",
        size: 110,
        header: "شرح ایراد",
      },
      {
        accessorFn: (row) => row.operation || "-",
        size: 110,
        header: "عملیات",
        cell: (cell) => (
          <Link to="#" className="text-[#2563EB]">
            {cell.getValue()}
          </Link>
        ),
      },
    ],
    []
  );

  return (
    <div className="bg-white w-full relative">
      <BasicTable
        column={columns}
        defaultData={request}
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

export default RequestRecordList;

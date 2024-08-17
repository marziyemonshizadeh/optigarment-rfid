import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChangeEvent, ReactNode, useState } from "react";
import { Observer, useObserver } from "rosma";
import { useDebouncedCallback } from "use-debounce";

interface Props {
  column: ColumnDef<any>[];
  defaultData: any;
  ObserverState?: Observer;
  selectType?: "multiple";
  actions?: {
    editOpt?: ReactNode;
    outputOpt?: string;
    printOpt?: () => void | undefined;
    deleteOpt?: () => void | undefined;
    cuttingDeskOpt?: () => void | undefined;
  };
}
// search
export const tableObserver = new Observer({
  searchValue: "",
  localSearchValue: "",
  sort: "",
});

export interface TableObserver {
  searchValue: string;
  localSearchValue: string;
  selectedRows: any[];
  selectAllCheck: any[];
  selectForEdit: any;
  sort: string;
}
export default function BasicTable({
  column,
  defaultData,
  ObserverState,
  selectType,
  actions,
}: Props) {
  // hooks
  const [data] = useState<any>(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns: column,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
    manualSorting: true,
  });
  const { rows } = table.getRowModel();

  const { selectAllCheck, setSelectAllCheck, setSelectForEdit } =
    useObserver<TableObserver>(ObserverState || tableObserver);

  const { setSearchValue } = useObserver<TableObserver>(
    ObserverState || tableObserver
  );
  const debounce = useDebouncedCallback((val) => {
    setSearchValue(() => {
      return val;
    });
  }, 1000);
  //** Handlers */
  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    debounce(e.target.value);
  }
  const handleSorting = () => {
    console.log("table", table.getRowModel().rows);

    console.log("sorting");
  };
  const handleFiltering = () => {
    console.log("filtering");
  };
  // const handleSelectAll = () => {
  //   if (selectAllCheck.length) {
  //     setSelectAllCheck([]);
  //   } else {
  //     setSelectAllCheck(rows.map((row: Row<any>) => row.original));
  //   }
  // };
  const handleSelectRow = (row: any) => {
    if (selectType === "multiple") {
      setSelectAllCheck([...selectAllCheck, row]);
      actions?.editOpt && setSelectForEdit(row);
    } else {
      actions?.editOpt && setSelectForEdit(row);
      setSelectAllCheck([row]);
    }
  };
  const handleCheckSelected = (row: any) => {
    if (selectAllCheck?.some((rows) => rows.id === row.id)) {
      return true;
    }
  };

  return (
    <>
      <header className="flex justify-between bg-white p-4">
        <div className="relative text-gray-600 w-[226px] h-[36px] text-sm">
          <input
            type="search"
            name="search"
            placeholder="جستجو میان کد/عنوان..."
            className="bg-white rounded-full border w-[226px] border-[#CBD5E1] text-sm focus:outline-none focus:ring-0 focus:border-[#CBD5E1] outline-none"
            onChange={handleSearch}
          />
          <button
            type="submit"
            className="absolute left-2 top-2 bg-white"
            onClick={() => handleSearch}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0949 5.69852C15.1374 7.74096 15.1374 11.0524 13.0949 13.0949C11.0525 15.1373 7.74102 15.1373 5.69858 13.0949C3.65614 11.0524 3.65614 7.74096 5.69858 5.69852C7.74102 3.65608 11.0525 3.65608 13.0949 5.69852"
                stroke="#475569"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.8332 15.8333L13.0916 13.0917"
                stroke="#475569"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {/* <Search
              sx={{
                color: "black",
                // mt: "2px",
                // ml: "2px",
                px: 0,
              }}
            /> */}
          </button>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center" onClick={handleSorting}>
            <span className="text-[#2563EB]">مرتب سازی</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0025 21.0037V3.99664"
                stroke="#2563EB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.99622 3.99667H12"
                stroke="#2563EB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.99707 7.99832H12"
                stroke="#2563EB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.99792 12H12"
                stroke="#2563EB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.39844 16.0017H11.9999"
                stroke="#2563EB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.0024 21.0037L20.5035 18.5027"
                stroke="#2563EB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.5015 18.5027L18.0025 21.0037"
                stroke="#2563EB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-center" onClick={handleFiltering}>
            <span className="text-[#2563EB]">فیلترها</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 13.5L19.707 8.293C19.895 8.105 20 7.851 20 7.586V5C20 4.448 19.552 4 19 4H5C4.448 4 4 4.448 4 5V7.586C4 7.851 4.105 8.106 4.293 8.293L9.5 13.5"
                stroke="#2563EB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5 13.5V19.749C9.5 20.562 10.264 21.159 11.053 20.962L13.553 20.337C14.109 20.198 14.5 19.698 14.5 19.124V13.5"
                stroke="#2563EB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </header>
      <TableContainer
        sx={{
          display: "grid",
          placeItems: "flex-start",
          boxShadow: "none",
          height: "300px",
          overflowY: "scroll",
        }}
        component={Paper}
      >
        <Table
          stickyHeader
          sx={{ maxWidth: "100%", boxShadow: "none" }}
          aria-label="simple table"
        >
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell
                    key={header.id}
                    sx={{
                      "&:first-child ": {
                        borderLeft: 1,
                        borderColor: "#E2E8F0",
                      },
                      textAlign: "right",
                      backgroundColor: "#F1F5F9",
                      color: "#1E40AF",
                      width: header.getSize(),
                      fontWeight: "bold",
                      fontSize: "14px",
                      padding: "10px",
                    }}
                    // onClick={() =>
                    //     (header.column.columnDef as any).sort &&
                    //     handleSort((header.column.columnDef as any).sort)
                    //   }
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:hover ": {
                    bgcolor: "#F1F5F9",
                  },
                }}
              >
                {row.getVisibleCells().map((cell, index) => (
                  <TableCell
                    key={cell.id}
                    component="th"
                    scope="row"
                    onClick={() =>
                      index === 0 &&
                      selectType === "multiple" &&
                      handleSelectRow(row.original)
                    }
                    sx={{
                      borderLeft: 1,
                      borderColor: () =>
                        handleCheckSelected(row.original)
                          ? "#E2E8F0"
                          : "#E2E8F0",
                      bgcolor: () =>
                        handleCheckSelected(row.original) ? "#F1F5F9" : "white",
                      maxWidth: cell.column.getSize(),
                      textAlign: "right",
                      padding: "8px",
                      color: "#475569",
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <footer className="bg-[#F5F5F5] h-[48px] w-full overflow-hidden flex justify-end items-center gap-4 text-sm sticky px-2">
        <button
          //   disabled={selectAllCheck.length !== 1}
          className="flex text-[#94A3B8]"
        >
          <span>ویرایش</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.54 10.12L13.88 6.45996"
              stroke="#94A3B8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.251 20.9999H3V17.7489C3 17.4839 3.105 17.2289 3.293 17.0419L16.627 3.70695C17.018 3.31595 17.651 3.31595 18.041 3.70695L20.292 5.95795C20.683 6.34895 20.683 6.98195 20.292 7.37195L6.958 20.7069C6.771 20.8949 6.516 20.9999 6.251 20.9999V20.9999Z"
              stroke="#94A3B8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div className="flex text-[#2563EB]">
          <span>خروجی</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5575 11.1106L12 14.6681L8.4425 11.1106"
              stroke="#2563EB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 3.9967V14.6681"
              stroke="#2563EB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.0034 16.4457C20.0034 18.4104 18.4106 20.0032 16.4459 20.0032H7.55419C5.58944 20.0032 3.9967 18.4104 3.9967 16.4457"
              stroke="#2563EB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex text-[#94A3B8]">
          <span>حذف</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.74745 8.99872C6.74745 8.58451 6.41166 8.24872 5.99745 8.24872C5.58324 8.24872 5.24745 8.58451 5.24745 8.99872H6.74745ZM18.7525 8.99872C18.7525 8.58451 18.4167 8.24872 18.0025 8.24872C17.5882 8.24872 17.2525 8.58451 17.2525 8.99872H18.7525ZM14.7508 9.99914C14.7508 9.58492 14.415 9.24914 14.0008 9.24914C13.5866 9.24914 13.2508 9.58492 13.2508 9.99914H14.7508ZM13.2508 17.0021C13.2508 17.4163 13.5866 17.7521 14.0008 17.7521C14.415 17.7521 14.7508 17.4163 14.7508 17.0021H13.2508ZM10.7491 9.99914C10.7491 9.58492 10.4133 9.24914 9.99912 9.24914C9.5849 9.24914 9.24912 9.58492 9.24912 9.99914H10.7491ZM9.24912 17.0021C9.24912 17.4163 9.5849 17.7521 9.99912 17.7521C10.4133 17.7521 10.7491 17.4163 10.7491 17.0021H9.24912ZM4.49683 5.24747C4.08261 5.24747 3.74683 5.58326 3.74683 5.99747C3.74683 6.41168 4.08261 6.74747 4.49683 6.74747V5.24747ZM19.5031 6.74747C19.9173 6.74747 20.2531 6.41168 20.2531 5.99747C20.2531 5.58326 19.9173 5.24747 19.5031 5.24747V6.74747ZM7.28677 5.7603C7.15579 6.15325 7.36816 6.57799 7.76111 6.70898C8.15407 6.83997 8.57881 6.6276 8.7098 6.23464L7.28677 5.7603ZM8.54251 4.36479L9.25402 4.60196L9.25408 4.60179L8.54251 4.36479ZM10.4413 2.99622L10.4411 3.74622H10.4413V2.99622ZM13.5586 2.99622V3.74622L13.5595 3.74622L13.5586 2.99622ZM15.4594 4.36479L16.1712 4.1284L16.171 4.12779L15.4594 4.36479ZM15.2898 6.23385C15.4204 6.62695 15.8449 6.83979 16.238 6.70924C16.6311 6.57869 16.8439 6.15418 16.7134 5.76108L15.2898 6.23385ZM5.24745 8.99872V19.0029H6.74745V8.99872H5.24745ZM5.24745 19.0029C5.24745 20.5221 6.47904 21.7537 7.99828 21.7537V20.2537C7.30747 20.2537 6.74745 19.6937 6.74745 19.0029H5.24745ZM7.99828 21.7537H16.0016V20.2537H7.99828V21.7537ZM16.0016 21.7537C17.5209 21.7537 18.7525 20.5221 18.7525 19.0029H17.2525C17.2525 19.6937 16.6924 20.2537 16.0016 20.2537V21.7537ZM18.7525 19.0029V8.99872H17.2525V19.0029H18.7525ZM13.2508 9.99914V17.0021H14.7508V9.99914H13.2508ZM9.24912 9.99914V17.0021H10.7491V9.99914H9.24912ZM4.49683 6.74747H19.5031V5.24747H4.49683V6.74747ZM8.7098 6.23464L9.25402 4.60196L7.831 4.12762L7.28677 5.7603L8.7098 6.23464ZM9.25408 4.60179C9.42428 4.09077 9.9025 3.74609 10.4411 3.74622L10.4415 2.24622C9.25695 2.24593 8.20525 3.00396 7.83094 4.12779L9.25408 4.60179ZM10.4413 3.74622H13.5586V2.24622H10.4413V3.74622ZM13.5595 3.74622C14.0986 3.74555 14.5775 4.09033 14.7478 4.60179L16.171 4.12779C15.7963 3.00299 14.7432 2.24475 13.5577 2.24622L13.5595 3.74622ZM14.7476 4.60117L15.2898 6.23385L16.7134 5.76108L16.1712 4.1284L14.7476 4.60117Z"
              fill="#94A3B8"
            />
          </svg>
        </div>
      </footer>
    </>
  );
}

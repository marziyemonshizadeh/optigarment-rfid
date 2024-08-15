import "./App.css";

function App() {
  return (
    <div
      dir="rtl"
      className="flex flex-col gap-3 justify-center items-center mx-auto h-screen w-[370px]"
    >
      <ul className="flex justify-evenly items-center font-medium text-base text-center w-[370px] rounded-lg text-[#1E293B] bg-[#E2E8F0] h-[54px] border">
        {/* ثبت عملکرد */}
        <li>
          <a
            href="#"
            className="inline-block px-4 py-[10px]  rounded-lg  h-[42px] min-w-[173px]"
            aria-current="page"
          >
            ثبت عملکرد
          </a>
        </li>
        {/*  ثبت درخواست */}
        {/* active => text-blue-600 bg-white active*/}
        <li>
          <a
            href="#"
            className="inline-block px-4 py-[10px] text-blue-600 bg-white active rounded-lg h-[42px] min-w-[173px]"
            aria-current="page"
          >
            ثبت درخواست
          </a>
        </li>
      </ul>
      {/* <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <select
            className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div> */}
      {/* ثبت عملکرد */}
      <div className="max-w-sm rounded overflow-hidden border border-[#E2E8F0] w-[370px]">
        <div className="flex items-center border-b border-[#E2E8F0] font-medium text-base">
          <div className="flex items-center w-[120px] h-[56px] border-l border-[#E2E8F0] p-3">
            کد :
          </div>
          <div className="p-3">2143790</div>
        </div>
        <div className="flex items-center border-b border-[#E2E8F0] font-medium text-base">
          <div className="flex items-center w-[120px] h-[56px] border-l border-[#E2E8F0] p-3">
            نام :
          </div>
          <div className="p-3">اکبر عموپورنگی</div>
        </div>
        <div className="flex items-center border-b border-[#E2E8F0] font-medium text-base">
          <div className="flex items-center w-[120px] h-[56px] border-l border-[#E2E8F0] p-3">
            نوع فرآیند :
          </div>
          {/* <div className="flex justify-center mx-auto">
            <div className="mb-3 xl:w-96">
              <select
                className="form-select appearance-none
                          block
                          w-[234px]
                          px-3
                          py-1.5
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding bg-no-repeat
                          border border-solid border-gray-300
                          rounded
                          transition
                          ease-in-out
                          m-0"
                aria-label="Default select example"
              >
                <option selected>نوع فرآیند را انتخاب کنید</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div> */}
          <div className="mx-auto">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-[#64748B] bg-transparent  font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center justify-between border w-[234px]"
              type="button"
            >
              نوع فرآیند را انتخاب کنید
              <svg
                className="w-2.5 h-2.5 text-black me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center border-b border-[#E2E8F0] font-medium text-base">
          <div className="flex items-center w-[120px] h-[56px] border-l border-[#E2E8F0] p-3">
            زمان شروع :
          </div>
          <div className="p-3">08:48:27</div>
        </div>
        <div className="flex items-center font-medium text-base">
          <div className="flex items-center w-[120px] h-[56px] border-l border-[#E2E8F0] p-3">
            زمان پایان :
          </div>
          <div className="p-3">12:24:34</div>
        </div>
      </div>

      {/*  ثبت درخواست */}
      {/* <div className="max-w-sm rounded overflow-hidden border border-[#E2E8F0] w-[370px]">
        <div className="flex items-center border-b border-[#E2E8F0] font-medium text-sm">
          <div className="flex items-center w-[120px] h-[56px] border-l border-[#E2E8F0] p-3">
            نوع درخواست :
          </div>
          <div className="mx-auto">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-[#64748B] bg-transparent  font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center justify-between border w-[234px]"
              type="button"
            >
              نوع کار را انتخاب کنید
              <svg
                className="w-2.5 h-2.5 text-black me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center border-b border-[#E2E8F0] font-medium text-sm">
          <div className="flex items-center w-[120px] h-[56px] border-l border-[#E2E8F0] p-3">
            نام درخواست :
          </div>
          <div className="mx-auto">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-[#64748B] bg-transparent  font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center justify-between border w-[234px]"
              type="button"
            >
              درخواست خود را انتخاب کنید
              <svg
                className="w-2.5 h-2.5 text-black me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center border-b border-[#E2E8F0] font-medium text-sm">
          <div className="flex items-center w-[120px] h-[56px] border-l border-[#E2E8F0] p-3">
            درجه اهمیت :
          </div>
          <div className="mx-auto">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-[#64748B] bg-transparent  font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center justify-between border w-[234px]"
              type="button"
            >
              درجه اهمیت را انتخاب کنید
              <svg
                className="w-2.5 h-2.5 text-black me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex border-b border-[#E2E8F0] font-medium text-sm h-[112px]">
          <div className="w-[120px] border-l border-[#E2E8F0] p-3">
            شرح ایراد :
          </div>
          <div className="font-normal text-sm mx-auto flex items-center">
            <textarea
              className="resize-none rounded-md border border-[#E2E8F0] w-[234px] h-[96px] p-2"
              placeholder="توضیحات مورد نیاز..."
            ></textarea>
          </div>
        </div>
      </div> */}
      <button className="bg-transparent w-[370px] hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-md">
        ثبت درخواست
      </button>
    </div>
  );
}

export default App;

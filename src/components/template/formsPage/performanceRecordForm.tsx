import { zodResolver } from "@hookform/resolvers/zod";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  PerformanceRecordFormType,
  performanceRecordFormSchema,
} from "../../../validation/PerformanceRecordFormValidation";

type PerformanceRecordFormProps = {};

function PerformanceRecordForm({}: PerformanceRecordFormProps) {
  //** Form */
  const form = useForm<PerformanceRecordFormType>({
    resolver: zodResolver(performanceRecordFormSchema),
    defaultValues: {
      ProcessType: "",
    },
  });
  const { handleSubmit } = form;

  //** Submit */
  const onSubmit: SubmitHandler<PerformanceRecordFormType> = (data) => {
    console.log("data", data);
  };
  return (
    <>
      <FormProvider {...form}>
        <form
          className="max-w-sm rounded overflow-hidden  w-[370px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="border border-[#E2E8F0]">
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
              <Controller
                control={form.control}
                name="ProcessType"
                render={({ field }) => {
                  return (
                    <select
                      className="mx-auto form-select bg-clip-padding bg-no-repeat border-solid border-gray-300 transition ease-in-out m-0 text-[#64748B] bg-transparent font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center justify-between border w-[234px] focus:border-slate-900"
                      aria-label="Default select example"
                      {...field}
                    >
                      <option selected>نوع فرآیند را انتخاب کنید</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                    </select>
                  );
                }}
              />
              {/* <div className="mx-auto">
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
                      <Link
                        to="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}
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
          <button
            type="submit"
            className="bg-transparent mt-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-md w-[370px]"
          >
            ثبت ساعت
          </button>
        </form>
      </FormProvider>
    </>
  );
}

export default PerformanceRecordForm;

import { FiBarChart2 } from "react-icons/fi";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { FiTrendingUp } from "react-icons/fi";

const data = [
  { value: 20 },
  { value: 10 },
  { value: 15 },
  { value: 25 },
  { value: 17 },
  { value: 27 },
  { value: 29 },
  { value: 37 },
];

const Chart = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white absolute bottom-15 p-5 w-full max-w-md rounded-2xl gap-5">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <FiTrendingUp className="text-2x border-l-2 border-b-2" />
          <h1 className="font-semibold">Sales this month</h1>
        </div>
        <div>
          <h1 className="text-xl text-blue-600">+30%</h1>
        </div>
      </div>
      <div className="flex gap-5 items-end bg-gray-100 px-7 pt-6 justify-center max-w-100 w-full rounded-2xl ">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-6 bg-blue-500 rounded-t-md transition-all duration-300 "
            style={{ height: `${item.value * 2}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Chart;

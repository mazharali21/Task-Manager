import React, { useState } from "react";
import { FaEye, FaPlay, FaTrash, FaRecycle,FaSun,FaMoon } from "react-icons/fa";
import { tasks } from "./Constant";
import RangeSelector from "./RangeSelector";
import { useNavigate } from "react-router-dom";



const Dashboard = () => {
  // State to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log('Click')
  };

  const navigate = useNavigate()

  return (
    <div className={`min-h-screen pb-12 ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"} transition-colors duration-500`}>
    <div className="bg-image w-[100%] h-[100vh] absolute opacity-35    "></div>
    {/* Background Overlay */}
    <div className={`absolute inset-0 w-full h-full bg-opacity-30 ${isDarkMode ? "bg-black" : "bg-gray-100"}`}></div>

    {/* Toggle button */}
    <div className="fixed top-2 right-4 z-50">
      <button
        onClick={toggleDarkMode}
        className={`relative p-4 rounded-full focus:outline-none transition-all duration-500 shadow-lg ${
          isDarkMode ? "bg-yellow-400 text-gray-900" : "bg-gray-800 text-yellow-400"
        }`}
      >
        {/* Sun and Moon Icons */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
            isDarkMode ? "opacity-0 translate-x-6" : "opacity-100 translate-x-0"
          }`}
        >
          <FaSun className="h-6 w-6" />
        </div>
        <div
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
            isDarkMode ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
          }`}
        >
          <FaMoon className="h-6 w-6" />
        </div>
      </button>
    </div>

    <div className="relative z-10 p-6">
      {/* Top Navigation */}
      <div className={`flex justify-around shadow-lg py-4 rounded-lg mb-6 ${isDarkMode ? "bg-gray-800" : "bg-white"} transition-colors`}>
        {["タスク一覧", "サイト毎の設定 ", "アカウント一覧", "クレジットカード一覧","Proxy一覧","ライセンス情報 "].map((label, index) => (
          <button
            key={index}
            className={`font-semibold transition duration-300 ${
              isDarkMode ? "text-gray-100 hover:text-blue-400" : "text-gray-700 hover:text-blue-500"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto"> 
  <table className={`min-w-full shadow-md rounded-lg  transition-colors`}>
    <thead className={`${isDarkMode ? " text-gray-100" : "bg-gray-200 text-gray-900"} transition-colors`}>
      <tr>
        {["No.", "WebSite", "商品名", "AccNo", "P.G", "タイマー開始時刻", "進捗", "更新日時", "Switch", "Play", "Trash"].map((header, index) => (
          <th key={index} className="px-4 py-2 text-left">
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {tasks.map((task, index) => (
        <tr onClick={()=>navigate('/filter')} key={task.id} className={`${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}>
          <td className="border-b px-4 ">{index + 1}</td>
          <td className="border-b px-4 ">{task.website}</td>
          <td className="border-b px-4 ">{task.product}</td>
          <td className="border-b px-4 ">{task.account}</td>
          <td className="border-b px-4 ">{task.credit}</td>
          <td className="border-b px-4 "></td>
          <td className="border-b px-4 ">
            <div className="relative w-full h-4 bg-gray-200 rounded-full">
              <div
                className={`absolute top-0 h-full ${isDarkMode ? "bg-green-400" : "bg-blue-500"} rounded-full`}
                style={{ width: `${task.progress}%` }}
              ></div>
            </div>
          </td>
          <td className="border-b px-4 ">{task.date} {""} {task.timer}</td>
          <td className="border-b px-4  text-center">
            <button className={`p-2 rounded-lg focus:outline-none ${isDarkMode ? "hover:bg-green-600" : "hover:bg-green-200"}`}>
              <FaRecycle className="h-5 w-5" />
            </button>
          </td>
          <td className="border-b px-4  text-center">
            <button className={`p-2 rounded-lg focus:outline-none ${isDarkMode ? "hover:bg-yellow-500" : "hover:bg-yellow-200"}`}>
              <FaPlay className="h-5 w-5" />
            </button>
          </td>
          <td className="border-b px-4  text-center">
            <button className={`p-2 rounded-lg focus:outline-none ${isDarkMode ? "hover:bg-red-600" : "hover:bg-red-200"}`}>
              <FaTrash className="h-5 w-5" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      {/* Table Section */}

      {/* Bottom Navigation */}
      <div className="flex w-full justify-between mt-4 fixed bottom-0 px-5 right-0 py-2">
        <div className={`flex items-center gap-4 shadow-lg   ${isDarkMode ? "bg-gray-800 text-gray-100" : "bg-gray-200 text-gray-700"}`}>
        <p className={`font-semibold py-2 pl-2`}>表示範囲指定 {' '} </p>
        <RangeSelector isDarkMode={isDarkMode}/>
        </div>
        <div className="flex gap-4">

        {[FaRecycle, FaEye, FaPlay, FaTrash].map((Icon, index) => (
          <button
          key={index}
          className={`p-3 rounded-lg focus:outline-none shadow-md transition-colors ${isDarkMode ? "bg-gray-800 text-gray-100" : "bg-gray-200 text-gray-700"}`}
          >
            <Icon className="h-6 w-6" />
          </button>
        ))}
        </div>
      </div>
    </div>
  </div>

  );
};

export default Dashboard;

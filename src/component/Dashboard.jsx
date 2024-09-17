import React, { useEffect, useRef, useState } from "react";
import { FaEye, FaPlay, FaTrash, FaRecycle, FaSun, FaMoon } from "react-icons/fa";
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

  const tasks = [];
  for (let i = 1; i <= 100; i++) {
    if (i === 1) {
      tasks.push({
        id: i,
        website: "example.com",
        product: "Sample Product",
        account: "sample_user",
        credit: "100",
        quantity: "2",
        progress: "50",
        timer: "10:00"
      });
    } else {
      tasks.push({
        id: i,
        website: "",
        product: "",
        account: "",
        credit: "0",
        quantity: "1",
        progress: "0",
        timer: ""
      });
    }
  }

  const [loadingMore, setLoadingMore] = useState(false); // To check if more items are loading

  const [itemsToShow, setItemsToShow] = useState(12); // Initial items to show
  const [range, setRange] = useState({ min: 1, max: 12 }); // User-defined range
  const tableRef = useRef(null); // Reference to the table

  // Load more items on scroll
  const loadMoreItems = () => {
    setItemsToShow(prev => Math.min(prev + 12, tasks.length));
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 200) {
      loadMoreItems();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle range change
  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    setRange(prevRange => ({
      ...prevRange,
      [name]: Math.max(1, Math.min(Number(value), tasks.length)),
    }));
  };

  // Apply range and scroll to specific section
  useEffect(() => {
    const { min, max } = range;
    setItemsToShow(max);

    // Delay scrolling to allow DOM updates
    setTimeout(() => {
      if (tableRef.current) {
        const rowElement = tableRef.current.querySelector(`tbody tr:nth-child(${min})`);
        if (rowElement) {
          rowElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          console.warn(`Row ${min} not found.`);
        }
      }
    }, 200); // Adjust delay if necessary
  }, [range]);

  // Handle form submit
  const handleRangeSubmit = () => {
    setItemsToShow(range.max);
  };


  const navitems = [
    {
      title: "タスク一覧",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z" />
        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
        <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z" />
      </svg>
    },
    {
      title: "サイト毎の設定",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z" />
      </svg>
    },
    {
      title: "アカウント一覧",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
      </svg>
    },
    {
      title: "クレジットカード一覧",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-credit-card-fill" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1" />
      </svg>
    },
    {
      title: "Proxy一覧",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-server" viewBox="0 0 16 16">
        <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4z" />
        <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.5 6.5 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8s-3.809-.317-5.208-.876a6.5 6.5 0 0 1-1.458-.79z" />
        <path d="M14.667 11.668a6.5 6.5 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.5 6.5 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667z" />
      </svg>
    },
    {
      title: "ライセンス情報",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      </svg>
    },

  ]

  return (
    <div className={`min-h-screen pb-12 ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"} transition-colors duration-500`}>
      <div className="bg-image w-[100%] h-[100vh]  opacity-35 fixed"></div>
      {/* Background Overlay */}
      <div className={`absolute inset-0 w-full h-full bg-opacity-30 ${isDarkMode ? "bg-black" : "bg-gray-100"}`}></div>

      {/* Toggle button */}
      <div className="fixed top-2 right-4 z-50">
        <button
          onClick={toggleDarkMode}
          className={`relative p-4 rounded-full focus:outline-none transition-all duration-500 shadow-lg ${isDarkMode ? "bg-yellow-400 text-gray-900" : "bg-gray-800 text-yellow-400"
            }`}
        >
          {/* Sun and Moon Icons */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${isDarkMode ? "opacity-0 translate-x-6" : "opacity-100 translate-x-0"
              }`}
          >
            <FaSun className="h-6 w-6" />
          </div>
          <div
            className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${isDarkMode ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
          >
            <FaMoon className="h-6 w-6" />
          </div>
        </button>
      </div>

      <div className="relative z-10 p-6">
        {/* Top Navigation */}
        <div className={`flex justify-around shadow-lg py-4 rounded-lg mb-6 ${isDarkMode ? "bg-gray-800" : "bg-white"} transition-colors`}>
          {navitems.map((label, index) => (
            <button
              key={index}
              className={`font-semibold transition duration-300 flex items-center gap-2 ${isDarkMode ? "text-gray-100 hover:text-blue-400" : "text-gray-700 hover:text-blue-500"
                }`}
            >
              {label.icon}
              {label.title}
            </button>
          ))}
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table ref={tableRef} className={`min-w-full shadow-md rounded-lg  transition-colors`}>
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
              {tasks.slice(0, itemsToShow).map((task, index) => (
                <tr onClick={() => navigate('/filter')} key={task.id} className={`${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}>
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

        {loadingMore && <div className="text-center py-4">Loading more items...</div>}

        {/* Bottom Navigation */}
        <div className="flex mt-4 fixed bottom-0 gap-2 py-2 ">

          <div className={`flex items-center gap-4 shadow-lg   ${isDarkMode ? "bg-gray-800 text-gray-900" : "bg-gray-200 text-gray-700"}`}>
            <p className={`font-semibold py-2 pl-2 ${isDarkMode ? 'text-white ' : "text-gray-900"}`}>表示範囲指定 {' '} </p>
            <div className="flex justify-center mb-4 items-center mt-3">
              <input
                type="number"
                name="min"
                id="min"
                value={range.min}
                onChange={handleRangeChange}
                className="border p-1 mr-4"
                min="1"
                max="100"
              />
              <input
                type="number"
                name="max"
                id="max"
                value={range.max}
                onChange={handleRangeChange}
                className="border p-1 mr-4"
                min="12"
                max="100"
              />
            </div>


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

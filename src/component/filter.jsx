import React, { useState } from "react";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(" 楽天市場, 楽天ブックス, 楽天ビック");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (item) => {
        setSelectedItem(item);
        setIsOpen(false);  // Close the dropdown after selecting an item
    };

    const menuItems = [
        "セブンネット、セブンギフト、SEIBU SOGO、イトーヨーカドーネット",
        "Yahoo!ショッピング、LOHACO",
        "Amazon",
        "Splash",
        "ヨドバシカメラ",
        "エルメスオンライン",
        "ポケモンセンターオンライン",
        "TSUTAYAオンラインショッピング",
        "ディズニーリゾートホテル予約",
        "トイザらス",
        "ハピネットオンライン",
        "ノジマオンライン",
        "ZOZOTOWN",
    ];

    return (
        <div className="bg-gray-900 w-full min-h-screen">
            <div className="flex p-6">

        <h3 style={{color:"white", marginTop : "4px", marginRight: "8px"}}>Webサイト選択 :</h3>

            <div style={{width : "900px", background: '#4A5664', color:"white"}}>
                {/* Dropdown button showing the selected item */}
                <div
                    className="  text-white py-2 px-4 rounded-lg cursor-pointer"
                    onClick={toggleDropdown}
                    >
                    {selectedItem}
                </div>

                {/* Dropdown menu */}
                {isOpen && (
                    <ul className="bg-gray-900 text-gray-300 mt-2 p-2 rounded-lg space-y-1">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`p-2 cursor-pointer hover:bg-gray-700 ${selectedItem === item ? "text-white" : ""
                                    }`}
                                onClick={() => handleSelect(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
                </div>
        </div>
    );
};

export default Dropdown;

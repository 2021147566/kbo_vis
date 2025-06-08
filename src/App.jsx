// App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Player from './components/Player';
import Scoreboard from './components/Scoreboard';
import Sidebar from './components/Sidebar';
import WinProbChart from './components/Popup';
import './styles/main.css';

export default function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showPopup, setShowPopup] = useState(false); // ✅ popup 상태 추가

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };

  return (
    <>
      <Header onToggleSidebar={toggleSidebar} />
      <div className="content">
        <div
          className="left-content"
          style={{ width: showSidebar ? '70%' : '100%' }}
        >
          <Player />
          <Scoreboard onShowPopup={() => setShowPopup(true)} /> {/* ✅ 전달 */}
        </div>
        {showSidebar && <Sidebar />}
      </div>
      <WinProbChart visible={showPopup} onClose={() => setShowPopup(false)} /> {/* ✅ 팝업 표시 */}
    </>
  );
}

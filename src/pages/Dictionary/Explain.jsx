import "./App.css";
import AppRouter from "./router/router";
import "./styles/fonts/Font.css";
import React, { useState } from "react";

function Expain() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
    
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>가계부실위험지수(HDRI)</h2>
            <h3>
              가계부실위험지수(HDRI)는 가구들이 빚을 갚는 능력을 평가하는
              지표입니다.
              <br />이 지표는 가구의 소득과 자산을 고려하여 만들어졌어요. 소득
              측면에서는 원리금 상환 비율(DSR)이라는 것을 보고, 자산 측면에서는
              부채와 자산의 비율(DTA)을 봐요. 이 두 가지를 결합하여 HDRI를
              계산합니다. <br />
              만약에 가구의 DSR과 DTA가 각각 40%와 100%라면, HDRI는 100이
              됩니다. HDRI가 100을 넘는 가구는 '위험가구'로 분류돼요. 이
              가구들은 소득과 자산 측면에서 모두 취약하거나 그 중 하나에서
              취약한 경우로 나뉘어요. <br />
              하지만 이런 위험가구나 고위험가구라고 해서 바로 채무 불이행을
              의미하지는 않아요. 이 지수는 단지 가구들의 채무상환 능력이 얼마나
              취약한지를 평가하는 도구에 불과해요.
            </h3>
          </div>
        </div>
      )}
    </>
  );
}

export default Expain;

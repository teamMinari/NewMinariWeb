import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useProfile = () => {
  const [userData, setUserData] = useState({}); // 초기값을 빈 객체로 설정
  const [loading, setLoading] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const storedToken = localStorage.getItem("accessToken");
      if (!storedToken) {
        console.error("Access token is missing");
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/member/profile`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    setUserData(null);
    setShowLogoutModal(false);
    navigate("/");
  };

  const toggleLogoutModal = () => {
    setShowLogoutModal((prev) => !prev);
  };

  return {
    userData,
    loading,
    showLogoutModal,
    handleLogout,
    toggleLogoutModal,
    setShowLogoutModal,
  };
};

export default useProfile;
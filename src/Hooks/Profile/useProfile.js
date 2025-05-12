import { useState, useEffect } from "react";
import customAxios from "../../utils/customAxios";
import { useNavigate } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
        const response = await customAxios.get("/member/profile");
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

  function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }
  

  return {
    userData,
    loading,
    showLogoutModal,
    handleLogout,
    toggleLogoutModal,
    setShowLogoutModal,
    LinearProgressWithLabel
  };
};

export default useProfile;
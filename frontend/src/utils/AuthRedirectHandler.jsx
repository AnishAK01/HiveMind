import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AuthRedirectHandler = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      const warningTimeout = setTimeout(() => {
        alert("You will be redirected to signup in 5 minute if not logged in.");
      }, 10 * 60 * 1000);

      const redirectTimeout = setTimeout(() => {
        navigate("/auth");
      }, 15 * 60 * 1000);

      return () => {
        clearTimeout(warningTimeout);
        clearTimeout(redirectTimeout);
      };
    }
  }, [user, navigate]);

  return null; // It just controls behavior, no UI
};

export default AuthRedirectHandler;

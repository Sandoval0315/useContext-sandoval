import React from "react";
import "./Dashboard.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// Dashboard.jsx

const Dashboard = () => {
  const navigate = useNavigate();  // Hook para navegación
  const { user, logOut } = useAuth();  // Acceder al usuario y logout

  // Función para cerrar sesión
  const handleLogout = () => {
    if (logOut()) {
      navigate("/");  // Redirige a la página de login después de cerrar sesión
    }
  };

  // Función para ir a la página de Información
  const goToInformation = () => {
    navigate("/information");  // Navega a la página de Información
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1 className="dashboard-title">¡Bienvenido al Dashboard!</h1>
        <p className="dashboard-user">
          Hola, <span>{user || "Usuario logueado"}</span>
        </p>

        {/* Botón para cerrar sesión */}
        <button className="dashboard-button" onClick={handleLogout}>
          Cerrar sesión
        </button>

        {/* Botón para ir a la página de Información */}
        <button className="dashboard-button" onClick={goToInformation}>
          Ir a Información
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

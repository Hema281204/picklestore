import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AdminLogin() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate =
    useNavigate();

  const handleLogin = () => {
    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      localStorage.setItem(
        "admin",
        "true"
      );

      toast.success(
        "Login Successful"
      );

      navigate("/admin/dashboard");
    } else {
      toast.error(
        "Invalid Credentials"
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">

      <div className="bg-white p-8 rounded-xl shadow w-96">

        <h1 className="text-3xl font-bold mb-6">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-3 w-full mb-4 rounded"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full mb-4 rounded"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          onClick={handleLogin}
          className="
            bg-green-600
            text-white
            w-full
            p-3
            rounded
          "
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default AdminLogin;
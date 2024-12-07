import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import Swal from "sweetalert2"; // SweetAlert2 import

const Login = () => {
  const { signinUser, loginGoogle } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    try {
      setLoading(true);
      await signinUser(email, password);
      Swal.fire({
        icon: "success",
        title: "Logged in successfully",
      });
      // You can redirect here after successful login
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Incorrect email or password!",
      });
    } finally {
      setLoading(false);
    }
  };

  // Google Login handler
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await loginGoogle();
      Swal.fire({
        icon: "success",
        title: "Logged in with Google",
      });
      // You can redirect here after successful Google login
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="card bg-base-100 w-8/12 mx-auto shrink-0 shadow-2xl">
        <h1 className="text-3xl text-center py-4">Login now!</h1>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        <div className="flex justify-center mt-4">
          <button
            className="btn btn-outline bg-bg-[#00D9E9]"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login with Google"}
          </button>
        </div>

        <div className="text-center mt-4">
          <p>
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

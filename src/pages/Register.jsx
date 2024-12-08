import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser, loginGoogle, updateUserProfile, setUser } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false); 
  const navigat=useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 6 characters long and include at least 1 uppercase and 1 lowercase letter.",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo }); 
            Swal.fire({
              icon: "success",
              title: "Registration Successful!",
              text: `Welcome, ${name}!`,
            });
            navigat('/login')
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
            Swal.fire({
              icon: "error",
              title: "Profile Update Failed",
              text: error.message,
            });
          });
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
      });
  };

  const handleGoogleLogin = () => {
    loginGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user); 
        Swal.fire({
          icon: "success",
          title: "Google Login Successful!",
          text: `Welcome back, ${user.displayName}!`,
        });
        
      })
      .catch((error) => {
        console.error("Google Login Error:", error);
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <div>
      <div className="card bg-base-100 w-8/12 mx-auto mt-2 shrink-0 shadow-2xl">
        <h2 className="text-3xl text-center py-5">Register Now</h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full pr-10"
                required
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </span>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#00D9E9]">Register</button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p>Or</p>
          <button
            onClick={handleGoogleLogin}
            className="btn bg-red-500 text-white mt-4"
          >
            Login with Google
          </button>
          <p className="mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

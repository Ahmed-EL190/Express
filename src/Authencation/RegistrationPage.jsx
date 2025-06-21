import { FcGoogle } from "react-icons/fc";
import {
FaEnvelope,
FaFacebook,
FaHome,
FaLock,
FaPhone,
FaUser,
} from "react-icons/fa";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    // stop refrech page
    e.preventDefault();
    // get user data
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: `${firstName} ${lastName}`,
        });
        console.log(user);
        setTimeout(() => {
          navigate("/Signin");
        }, 100);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg p-6 rounded-lg my-10">
      {/* Social Buttons */}
      <div className="flex justify-between gap-4 mb-4">
        <button className="w-1/2 flex items-center justify-center border py-2 rounded-lg">
          <FcGoogle className="text-xl mr-2" /> Google
        </button>
        <button className="w-1/2 flex items-center justify-center border py-2 rounded-lg text-blue-600">
          <FaFacebook className="text-xl mr-2" /> Facebook
        </button>
      </div>

      <div className="relative text-center my-4">
        <span className="absolute left-0 top-1/2 w-32 h-px bg-gray-300"></span>
        <span className="text-gray-500 text-sm">Or register with email</span>
        <span className="absolute right-0 top-1/2 w-32 h-px bg-gray-300"></span>
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* First and Last Name */}
        <div className="flex gap-4">
          <div className="relative w-1/2">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="pl-10 border w-full py-2 rounded-md outline-none"
            />
          </div>
          <div className="relative w-1/2">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="pl-10 border w-full py-2 rounded-md outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="pl-10 border w-full py-2 rounded-md outline-none"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <FaPhone className="absolute left-3 top-3 text-gray-400" />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="pl-10 border w-full py-2 rounded-md outline-none"
          />
        </div>

        {/* Address */}
        <div className="relative">
          <FaHome className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            className="pl-10 border w-full py-2 rounded-md outline-none"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <FaLock className="absolute left-3 top-3 text-gray-400" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="pl-10 border w-full py-2 rounded-md outline-none"
          />
          <p className="text-xs text-gray-500 mt-1 ml-1">
            Minimum 8 characters with at least one number and one special
            character
          </p>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <FaLock className="absolute left-3 top-3 text-gray-400" />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="pl-10 border w-full py-2 rounded-md outline-none"
          />
        </div>
        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;

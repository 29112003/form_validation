import { useForm } from "react-hook-form";
import React from "react";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">User Registration</h2>
      
      <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-4">

        {/* First Name */}
        <div>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName", {
              required: "First name is required",
              minLength: { value: 2, message: "First name must be at least 2 characters" },
              maxLength: { value: 50, message: "First name cannot exceed 50 characters" },
              pattern: { value: /^[A-Za-z]+$/, message: "First name can only contain letters" },
            })}
            className={`w-full p-3 border rounded-lg ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
        </div>

        {/* Last Name */}
        <div>
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName", {
              required: "Last name is required",
              minLength: { value: 4, message: "Last name must be at least 2 characters" },
              maxLength: { value: 50, message: "Last name cannot exceed 50 characters" },
              pattern: { value: /^[A-Za-z]+$/, message: "Last name can only contain letters" },
            })}
            className={`w-full p-3 border rounded-lg ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email format",
              },
            })}
            className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Contact */}
        <div>
          <input
            type="tel"
            placeholder="Contact (10 digits)"
            {...register("contact", {
              required: "Contact is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Contact must be a valid 10-digit number",
              },
            })}
            className={`w-full p-3 border rounded-lg ${errors.contact ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>}
        </div>

        {/* Gender */}
        <div>
          <select
            {...register("gender", { required: "Gender is required" })}
            className={`w-full p-3 border rounded-lg ${errors.gender ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
        </div>

        {/* Address */}
        <div>
          <input
            type="text"
            placeholder="Address"
            {...register("address", {
              required: "Address is required",
              minLength: { value: 5, message: "Address must be at least 5 characters" },
              maxLength: { value: 100, message: "Address cannot exceed 100 characters" },
            })}
            className={`w-full p-3 border rounded-lg ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
        </div>

        {/* City */}
        <div>
          <input
            type="text"
            placeholder="City"
            {...register("city", {
              required: "City is required",
              minLength: { value: 2, message: "City must be at least 2 characters" },
              pattern: { value: /^[A-Za-z ]+$/, message: "City name must only contain letters" },
            })}
            className={`w-full p-3 border rounded-lg ${errors.city ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
        </div>

        {/* Image Upload */}
        <div>
          <input
            type="file"
            accept="image/*"
            {...register("image", {
              required: "Image is required",
              validate: {
                fileType: (value) =>
                  value[0]?.type.startsWith("image/") || "Invalid file type, only images are allowed",
              },
            })}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;

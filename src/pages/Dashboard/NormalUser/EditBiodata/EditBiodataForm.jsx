import React from "react";
import useAuth from "../../../../hooks/useAuth";

const EditBiodataForm = ({ handleSubmit, onSubmit, register }) => {
  const { user } = useAuth();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg space-y-6"
    >
      {/* biodata type */}
      <div>
        <label className="block font-medium text-gray-700">Biodata Type</label>
        <select
          defaultValue=""
          {...register("biodataType")}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select Type
          </option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      {/* name Input */}
      <div>
        <label className="block font-medium text-gray-700">Name</label>
        <input
          type="text"
          {...register("name")}
          required
          id="name"
          placeholder="Enter your full name"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* profile image */}
      <div>
        <label className="block font-medium text-gray-700">Profile Image</label>
        <input
          type="file"
          {...register("image")}
          required
          placeholder="Enter your full name"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* date of birth Input */}
      <div>
        <label className="block font-medium text-gray-700">Date of Birth</label>
        <input
          type="date"
          {...register("dateOfBirth")}
          required
          id="name"
          placeholder="Enter your full name"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* height  */}
      <div>
        <label className="block font-medium text-gray-700">Height</label>
        <select
          defaultValue=""
          {...register("height")}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select height
          </option>
          <option>5.3</option>
          <option>5.4</option>
          <option>4.3</option>
          <option>4.7</option>
        </select>
      </div>

      {/* weight  */}
      <div>
        <label className="block font-medium text-gray-700">Weight</label>
        <select
          defaultValue=""
          {...register("weight")}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select weight
          </option>
          <option>40</option>
          <option>50</option>
          <option>60</option>
          <option>45</option>
        </select>
      </div>

      {/* age Input */}
      <div>
        <label className="block font-medium text-gray-700">Age</label>
        <input
          type="number"
          {...register("age")}
          required
          placeholder="Enter your age"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* occupation  */}
      <div>
        <label className="block font-medium text-gray-700">Occupation</label>
        <select
          defaultValue=""
          {...register("occupation")}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select Occupation
          </option>
          <option>Doctor</option>
          <option>Engineer</option>
          <option>Teacher</option>
        </select>
      </div>

      {/* race or skin color  */}
      <div>
        <label className="block font-medium text-gray-700">Race</label>
        <select
          defaultValue=""
          {...register("race")}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select Race
          </option>
          <option>Light</option>
          <option>Medium</option>
          <option>Dark</option>
        </select>
      </div>

      {/* Father's name */}
      <div>
        <label className="block font-medium text-gray-700">Fathers Name</label>
        <input
          type="text"
          {...register("fathersName")}
          required
          placeholder="Enter your fathers name"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Mother's name */}
      <div>
        <label className="block font-medium text-gray-700">Mothers name</label>
        <input
          type="text"
          {...register("mothersName")}
          required
          placeholder="Enter your mothers name"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* parmanent division */}
      <div>
        <label className="block font-medium text-gray-700">
          Permanent Division name
        </label>
        <select
          defaultValue=""
          {...register("permanentDivision")}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select Division
          </option>
          <option>Dhaka</option>
          <option>Chattogram</option>
          <option>Rangpur</option>
          <option>Barisal</option>
          <option>Khulna</option>
          <option>Mymensingh</option>
          <option>Sylhet</option>
        </select>
      </div>

      {/* present division */}
      <div>
        <label className="block font-medium text-gray-700">
          Present Division name
        </label>
        <select
          defaultValue=""
          {...register("presentDivision")}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select Division
          </option>
          <option>Dhaka</option>
          <option>Chattogram</option>
          <option>Rangpur</option>
          <option>Barisal</option>
          <option>Khulna</option>
          <option>Mymensingh</option>
          <option>Sylhet</option>
        </select>
      </div>

      {/*  excepted partner age */}
      <div>
        <label className="block font-medium text-gray-700">
          Expected Partner Age
        </label>
        <input
          type="number"
          {...register("partnerAge")}
          required
          placeholder="Enter your partner age"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* excepted partner height  */}
      <div>
        <label className="block font-medium text-gray-700">
          Expected Partner Height
        </label>
        <select
          defaultValue=""
          {...register("partnerHeight")}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select height
          </option>
          <option>5.3</option>
          <option>5.4</option>
          <option>4.3</option>
          <option>4.7</option>
        </select>
      </div>

      {/* excepted partner weight  */}
      <div>
        <label className="block font-medium text-gray-700">
          Expected Partner Weight
        </label>
        <select
          defaultValue=""
          {...register("partnerWeight")}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select weight
          </option>
          <option>40</option>
          <option>50</option>
          <option>60</option>
          <option>45</option>
        </select>
      </div>

      {/* contact email */}
      <div>
        <label className="block font-medium text-gray-700">Contact Email</label>
        <input
          type="email"
          {...register("email")}
          readOnly
          defaultValue={user?.email}
          required
          placeholder="Enter your mothers name"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/*  mobile numbre */}
      <div>
        <label className="block font-medium text-gray-700">Mobile Number</label>
        <input
          type="number"
          {...register("mobileNumber")}
          required
          placeholder="Enter your partner age"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Save And Publish Now
        </button>
      </div>
    </form>
  );
};

export default EditBiodataForm;

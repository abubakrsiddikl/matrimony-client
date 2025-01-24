import React from "react";
import useAuth from "../../../../hooks/useAuth";

const EditBiodataForm = ({ handleSubmit, onSubmit, register, biodata }) => {
  const { user } = useAuth();
  const {
    age,
    biodataId,
    biodataType,
    dateOfBirth,
    email,
    fathersName,
    height,
    image,
    mobileNumber,
    mothersName,
    name,
    occupation,
    partnerAge,
    partnerHeight,
    partnerWeight,
    presentDivision,
    race,
    status,
    weight,
  } = biodata;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg space-y-6"
    >
      {/* biodata type */}
      <div>
        <label className="block font-medium text-gray-700">Biodata Type</label>
        <select
          defaultValue={biodata?.biodataType ? biodata?.biodataType : ""}
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
          defaultValue={name}
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
          defaultValue={dateOfBirth}
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
          defaultValue={biodata?.height ? biodata?.height : ""}
          {...register("height")}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select height
          </option>
          <option value="6.1">6.1 inch</option>
          <option value="5.9">5.9 inch</option>
          <option value="5.3">5.3 inch</option>
          <option value="5.7">5.7 inch</option>
          <option value="5.4">5.4 inch</option>
          <option value="4.3">4.3 inch</option>
          <option value="4.7">4.7 inch</option>
        </select>
      </div>

      {/* weight  */}
      <div>
        <label className="block font-medium text-gray-700">Weight</label>
        <select
          defaultValue={biodata?.weight ? biodata?.weight : ""}
          {...register("weight")}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select weight
          </option>
          <option value="40">40 kg</option>
          <option value="50">50 kg</option>
          <option value="60">60 kg</option>
          <option value="45">45 kg</option>
        </select>
      </div>

      {/* age Input */}
      <div>
        <label className="block font-medium text-gray-700">Age</label>
        <input
          type="number"
          defaultValue={age}
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
          defaultValue={biodata?.occupation ? biodata?.occupation : ""}
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
          defaultValue={race}
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
          defaultValue={fathersName}
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
          defaultValue={mothersName}
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
          defaultValue={
            biodata?.permanentDivision ? biodata?.permanentDivision : ""
          }
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
          defaultValue={
            biodata?.presentDivision ? biodata?.presentDivision : ""
          }
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
          defaultValue={partnerAge}
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
          defaultValue={biodata?.partnerHeight ? biodata?.partnerHeight : ""}
          {...register("partnerHeight")}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select height
          </option>
          <option value="6.1">6.1 inch</option>
          <option value="5.9">5.9 inch</option>
          <option value="5.3">5.3 inch</option>
          <option value="5.7">5.7 inch</option>
          <option value="5.4">5.4 inch</option>
          <option value="4.3">4.3 inch</option>
          <option value="4.7">4.7 inch</option>
        </select>
      </div>

      {/* excepted partner weight  */}
      <div>
        <label className="block font-medium text-gray-700">
          Expected Partner Weight
        </label>
        <select
          defaultValue={biodata?.partnerWeight ? biodata?.partnerWeight : ""}
          {...register("partnerWeight")}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select weight
          </option>
          <option value="40">40 kg</option>
          <option value="50">50 kg</option>
          <option value="60">60 kg</option>
          <option value="45">45 kg</option>
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
          defaultValue={mobileNumber}
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
          {biodata ? "Edit And Save Now" : "Save And Publish Now"}
        </button>
      </div>
    </form>
  );
};

export default EditBiodataForm;

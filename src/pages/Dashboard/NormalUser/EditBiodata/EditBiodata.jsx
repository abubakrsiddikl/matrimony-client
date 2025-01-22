import SectionTitle from "../../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import EditBiodataForm from "./EditBiodataForm";
import { imageUpload } from "../../../../utility/utility";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import LoadingSppiner from "../../../../components/LoadingSppiner";
import toast from "react-hot-toast";

const EditBiodata = () => {
  // state diclar this biodata is ediable or not
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();

  const { user } = useAuth();

  const onSubmit = async (data) => {
    const age = parseInt(data.age);
    const image = await imageUpload(data.image[0]);
    // all data save to db
    const biodata = { ...data, age, image };
    if (isEditing) {
      const { data: updateRes } = await axiosSecure.put(
        `/biodata/update/${user?.email}`,
        biodata
      );
      if (updateRes.modifiedCount) {
        toast.success("Your Biodata Edit Successfull !");
      }
    }
    // create a biodata to db
    else {
      const { data: res } = await axiosSecure.post("/biodata", biodata);
      if (res.insertedId) {
        toast.success("Your biodata create successfull");
      }
    }
  };
  // load data specify user cand edit
  const { data: getBiodata = {}, isLoading } = useQuery({
    queryKey: ["biodata", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/biodata/${user?.email}`);
      if (data) setIsEditing(true);
      return data;
    },
  });
  if (isLoading) return <LoadingSppiner></LoadingSppiner>;

  return (
    <div className=" min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      <SectionTitle
        heading={isEditing ? "Edit Your Biodata" : "Create Your Biodata"}
      ></SectionTitle>
      <EditBiodataForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        biodata={getBiodata}
      ></EditBiodataForm>
    </div>
  );
};

export default EditBiodata;

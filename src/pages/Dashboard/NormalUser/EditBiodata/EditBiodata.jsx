import SectionTitle from "../../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import EditBiodataForm from "./EditBiodataForm";
import { imageUpload } from "../../../../utility/utility";
import { useAxiosSecure } from "../../../../hooks/useAxiosSecure";

const EditBiodata = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    const age = parseInt(data.age);
    const image = await imageUpload(data.image[0]);

    const biodata = { ...data, age, image };
    console.log(biodata);
    // create a biodata to db
    const { data: res } = await axiosSecure.post("/biodata", biodata);
    console.log(res);
  };
  return (
    <div className=" min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      <SectionTitle heading="Edit Your Biodata"></SectionTitle>
      <EditBiodataForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      ></EditBiodataForm>
    </div>
  );
};

export default EditBiodata;

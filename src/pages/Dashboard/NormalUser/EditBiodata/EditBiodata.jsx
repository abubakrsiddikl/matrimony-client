import SectionTitle from "../../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import EditBiodataForm from "./EditBiodataForm";
import { imageUpload } from "../../../../utility/utility";

const EditBiodata = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const age = parseInt(data.age);
    const image = await imageUpload(data.image[0]);
    console.log({...data,age,image});
    
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

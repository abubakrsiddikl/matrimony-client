import SectionTitle from "../../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import EditBiodataForm from "./EditBiodataForm";

const EditBiodata = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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

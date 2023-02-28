import { useRecoilState, useSetRecoilState } from "recoil";
import { Categories, categoriesState } from "../states";
import { useForm } from "react-hook-form";

interface ICategoryForm {
  category: string;
}

function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<ICategoryForm>();
  const setCategories = useSetRecoilState(categoriesState);

  const categoryVaild = ({ category }: ICategoryForm) => {
    setCategories((prev) => {
      return { ...prev, [category]: category.toUpperCase() };
    });
    setValue("category", "");
  };

  return (
    <form onSubmit={handleSubmit(categoryVaild)}>
      <input
        {...register("category", {
          required: "Please write a Category",
        })}
      />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;

import { useForm } from "react-hook-form";
import { schema, type UpdateData } from "./update-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import type { SuperheroPowerstats } from "../../services/superheroes-services";

interface UpdateProps {
  onSubmit: (data: UpdateData) => unknown;
  currentPowerstats: SuperheroPowerstats;
}

export const UpdateForm = ({ onSubmit, currentPowerstats }: UpdateProps) => {
    
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<UpdateData>({defaultValues: currentPowerstats, resolver: zodResolver(schema) });

    useEffect(() => {
    if (currentPowerstats) {
      reset(currentPowerstats);
    }
  }, [currentPowerstats, reset]);

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  isSubmitSuccessful && reset();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Intelligence:</label>
        <input
          type="text"
          placeholder={"intelligence"}
          {...register("intelligence")}
        />
        <label>Strength:</label>
        <input type="text" placeholder={"strength"} {...register("strength")} />
        <label>Speed:</label>
        <input type="text" placeholder={"Speed"} {...register("speed")} />
        <label>Durability:</label>
        <input
          type="text"
          placeholder={"durability"}
          {...register("durability")}
        />
        <label>Power:</label>
        <input type="text" placeholder={"Power"} {...register("power")} />
        <label>Combat:</label>
        <input type="text" placeholder={"Combat"} {...register("combat")} />
        <button className="submit">Submit!</button>
      </form>
    </>
  );
};

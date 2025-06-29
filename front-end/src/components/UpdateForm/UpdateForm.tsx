import { useForm } from "react-hook-form";
import { schema, type UpdateData } from "./update-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import type { SuperheroPowerstats } from "../../services/superheroes-services";
import styles from "./UpdateForm.module.scss";

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
  } = useForm<UpdateData>({
    defaultValues: currentPowerstats,
    resolver: zodResolver(schema),
  });

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
        <article>
        <span className={styles.stats_input}>
          <span>
            <label>Intelligence:</label>
            <input
              type="text"
              placeholder={"intelligence"}
              {...register("intelligence")}
            />
          </span>
          <span>
            <label>Strength:</label>
            <input
              type="text"
              placeholder={"strength"}
              {...register("strength")}
            />
          </span>
          <span>
            <label>Speed:</label>
            <input type="text" placeholder={"Speed"} {...register("speed")} />
          </span>
        </span>
        <span className={styles.stats_input}>
          <span>
            <label>Durability:</label>
            <input
              type="text"
              placeholder={"durability"}
              {...register("durability")}
            />
          </span>
          <span>
            <label>Power:</label>
            <input type="text" placeholder={"Power"} {...register("power")} />
          </span>
          <span>
            <label>Combat:</label>
            <input type="text" placeholder={"Combat"} {...register("combat")} />
          </span>
        </span>
        </article>
        <span className={styles.submit}>
          <button>Submit!</button>
        </span>
      </form>
    </>
  );
};

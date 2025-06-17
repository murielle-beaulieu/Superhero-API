import * as z from "zod";

export const schema = z.object({
    intelligence: z.string(),
    strength: z.string(),
    speed: z.string(),
    durability: z.string(),
    power: z.string(),
    combat: z.string(),

})

export type UpdateData = z.infer<typeof schema>
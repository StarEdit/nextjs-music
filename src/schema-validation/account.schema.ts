import z from "zod";

export const AccountSchema = z.object({
  id: z.number(),
  name: z.string(),
  src: z.string().optional(),
});

export type AccountType = z.TypeOf<typeof AccountSchema>;

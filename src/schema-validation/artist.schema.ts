import z from "zod";

export const ArtistSchema = z.object({
  id: z.number(),
  name: z.string(),
  src: z.string().optional(),
});

export type ArtistType = z.TypeOf<typeof ArtistSchema>;

import { AccountSchema } from "@/schema-validation/account.schema";
import { ArtistSchema } from "@/schema-validation/artist.schema";
import z from "zod";

export const SongSchema = z.object({
  id: z.number(),
  title: z.string(),
  release: z.string(),
  uploadedBy: AccountSchema,
  editor: AccountSchema,
  artist: z.array(ArtistSchema),
  description: z.string().optional(),
  lyrics: z.string().optional(),
});

export type SongType = z.TypeOf<typeof SongSchema>;

import { AccountSchema } from "@/schema-validation/account.schema";
import { ArtistSchema } from "@/schema-validation/artist.schema";
import { SongSchema } from "@/schema-validation/song.schema";
import z from "zod";

export const PlaylistSchema = z.object({
  id: z.number(),
  title: z.string(),
  release: z.string(),
  uploadedBy: AccountSchema,
  artist: z.array(ArtistSchema),
  description: z.string().optional(),
  songList: z.array(SongSchema),
});

export type PlaylistType = z.TypeOf<typeof PlaylistSchema>;

import { SongType } from "@/schema-validation/song.schema";
import DetailSongLyricHeader from "@/sections/discovery/detail-song-lyric-header";
import parse from "html-react-parser";

const DetailSongLyric = ({ songDetail }: { songDetail: SongType }) => {
  return (
    <div className="bg-secondary rounded-md mt-2 p-2">
      <DetailSongLyricHeader editor={songDetail.editor} />
      <div className="text-xs">{parse(songDetail.lyrics || "")}</div>
    </div>
  );
};

export default DetailSongLyric;

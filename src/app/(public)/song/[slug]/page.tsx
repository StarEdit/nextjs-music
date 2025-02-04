import { SongType } from "@/schema-validation/song.schema";
import DetailSongAction from "@/sections/discovery/detail-song-action";
import DetailSongInfo from "@/sections/discovery/detail-song-info";
import DetailSongLyric from "@/sections/discovery/detail-song-lyric";

const raw: SongType = {
  id: 1,
  title: "Tai sing",
  release: "10/11/2024",
  uploadedBy: { id: 1, name: "NPT", src: "" },
  editor: { id: 1, name: "NPT", src: "" },
  artist: [{ id: 1, name: "Tung Duong", src: "" }],
  description:
    "Ca khúc Fat Juicy & Wet do ca sĩ Sexyy RedBruno Mars, thể hiện, thuộc thể loại Hip Hop/Rap. Các bạn có thể nghe, download (tải nhạc) bài hát Fat Juicy & Wet mp3, playlist/album, MV/Video Fat Juicy & Wet miễn phí tại NhacCuaTui.com.",
  lyrics: "<p>This is a <strong>parsed</strong> HTML string.</p>",
};

const Detail = () => {
  return (
    <div>
      <DetailSongInfo songDetail={raw} />
      <DetailSongAction songDetail={raw} />
      {raw.lyrics && <DetailSongLyric songDetail={raw} />}
    </div>
  );
};

export default Detail;

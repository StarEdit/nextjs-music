import { PlaylistType } from "@/schema-validation/playlist.schema";
import DetailAction from "@/sections/discovery/detail-action";
import DetailPlaylistInfo from "@/sections/discovery/detail-playlist-info";
import DetailPlaylistSong from "@/sections/discovery/detail-playlist-song";

const raw: PlaylistType = {
  id: 1,
  title: "Tai sing",
  release: "10/11/2024",
  uploadedBy: { id: 1, name: "NPT", src: "" },
  artist: [{ id: 1, name: "Tung Duong", src: "" }],
  description:
    "<p>Ca khúc Fat Juicy & Wet do ca sĩ Sexyy RedBruno Mars, thể hiện, thuộc thể loại Hip Hop/Rap. Các bạn có thể nghe, download (tải nhạc) bài hát Fat Juicy & Wet mp3, playlist/album, MV/Video Fat Juicy & Wet miễn phí tại NhacCuaTui.com.</p>",
  songList: [
    {
      id: 1,
      title: "Tai sing",
      release: "10/11/2024",
      uploadedBy: { id: 1, name: "NPT", src: "" },
      editor: { id: 1, name: "NPT", src: "" },
      artist: [{ id: 1, name: "Tung Duong", src: "" }],
      description:
        "Ca khúc Fat Juicy & Wet do ca sĩ Sexyy RedBruno Mars, thể hiện, thuộc thể loại Hip Hop/Rap. Các bạn có thể nghe, download (tải nhạc) bài hát Fat Juicy & Wet mp3, playlist/album, MV/Video Fat Juicy & Wet miễn phí tại NhacCuaTui.com.",
      lyrics: "<p>This is a <strong>parsed</strong> HTML string.</p>",
    },
    {
      id: 2,
      title: "Tai sing",
      release: "10/11/2024",
      uploadedBy: { id: 1, name: "NPT", src: "" },
      editor: { id: 1, name: "NPT", src: "" },
      artist: [
        { id: 1, name: "Tung Duong", src: "" },
        { id: 2, name: "Tung Chao", src: "" },
        { id: 3, name: "Tung Dau", src: "" },
      ],
      description:
        "Ca khúc Fat Juicy & Wet do ca sĩ Sexyy RedBruno Mars, thể hiện, thuộc thể loại Hip Hop/Rap. Các bạn có thể nghe, download (tải nhạc) bài hát Fat Juicy & Wet mp3, playlist/album, MV/Video Fat Juicy & Wet miễn phí tại NhacCuaTui.com.",
      lyrics: "<p>This is a <strong>parsed</strong> HTML string.</p>",
    },
    {
      id: 3,
      title: "Tai sing",
      release: "10/11/2024",
      uploadedBy: { id: 1, name: "NPT", src: "" },
      editor: { id: 1, name: "NPT", src: "" },
      artist: [{ id: 1, name: "Tung Duong", src: "" }],
      description:
        "Ca khúc Fat Juicy & Wet do ca sĩ Sexyy RedBruno Mars, thể hiện, thuộc thể loại Hip Hop/Rap. Các bạn có thể nghe, download (tải nhạc) bài hát Fat Juicy & Wet mp3, playlist/album, MV/Video Fat Juicy & Wet miễn phí tại NhacCuaTui.com.",
      lyrics: "<p>This is a <strong>parsed</strong> HTML string.</p>",
    },
  ],
};

const Detail = () => {
  return (
    <div>
      <DetailPlaylistInfo detail={raw} />
      <DetailAction uploadedBy={raw.uploadedBy} />
      <DetailPlaylistSong songList={raw.songList} />
    </div>
  );
};

export default Detail;

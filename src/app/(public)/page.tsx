import HomeBanner from "@/sections/home/home-banner";
import HotTopic from "@/sections/home/hot-topic";
import HotVideo from "@/sections/home/hot-video";
import ItemSlide from "@/sections/home/item-slide";
import NewRelease from "@/sections/home/new-release";
import SongList from "@/sections/home/song-list";

export default function Home() {
  return (
    <section className="w-full">
      <HomeBanner />

      <ItemSlide title="TET HOLIDAY" />
      <ItemSlide title="All About Viet Music" />
      <ItemSlide title="Today's Mood" />
      <NewRelease />
      <HotVideo />
      <SongList />
      <HotTopic />
    </section>
  );
}

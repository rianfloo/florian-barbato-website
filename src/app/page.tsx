import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../lib/api";
import TechnicalSection from "./sections/technical-section";
import HeaderSection from "./sections/header-section";

export default function Index() {
  return (
    <main>
      <Container>
        <HeaderSection className="py-24" />
        <TechnicalSection className="py-24" />
      </Container>
    </main>
  );
}

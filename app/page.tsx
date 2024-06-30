import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { client } from "@/lib/contentful/client";

const getProfile = async (): Promise<any> => {
  const profile = await client.getEntries({
    content_type: "profile",
  });

  return profile;
};

export default async function Home() {
  const profile = await getProfile();

  console.log({ profile: profile.items[0].fields.profileImg.fields.file.url });
  return (
    <main className="flex flex-col items-center px-4">
      <Intro
        fullname={profile.items[0].fields.fullname}
        role={profile.items[0].fields.role}
        profileImg={`https:${profile.items[0].fields.profileImg.fields.file.url}`}
      />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}

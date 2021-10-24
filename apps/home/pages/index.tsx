import { Section } from "@binoy14/ui";
import { classnames } from "tailwindcss-classnames";

export function Index() {
  const styles = classnames("h-40");

  return (
    <div>
      <Section type="light" classNames={styles}>
        <h1 className="text-3xl mb-1">Hey 👋, I&apos;m Binoy</h1>
        <span>Web Developer, React Groupie and GraphQL Enthusiast</span>
      </Section>
    </div>
  );
}

export default Index;

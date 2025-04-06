import { SkillProvider } from "../context/SkillContext";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <SkillProvider>
      <Component {...pageProps} />
    </SkillProvider>
  );
}

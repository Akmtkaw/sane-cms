// import { GoogleAnalytics } from "@next/third-parties/google";
import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

// export const metadata = {
//   title: "Member",
// };

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Members" sub="Members" />
      <Sheet>{children}</Sheet>
      {/* <GoogleAnalytics gaId="G-XXX" /> */}
    </>
  );
}

import Common_Header from "@/components/common_header/common_header";
import Mobile_Header from "@/components/mobile_header/mobile_header";
import { Context_Provider1, context_Value1 } from "@/contexts/context1";

export const metadata = {
  title: "User Panel",
  description: "Generated by UCBDev",
  viewport: "width=device-width, initial-scale=1.0",
  keywords: "nextjs, UCB, UCBDev",
  themeColor: "#FF0000",
};

const component_classes = {
  component_header1: "grid grid-cols-24 gap-2",
  component_header2: "hidden lg:block",
  component_header3: "block lg:hidden",
  component_header4: "col-start-2 col-end-24",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={component_classes.component_header1}>
          <Common_Header classes={component_classes.component_header2} />
          <Mobile_Header classes={component_classes.component_header3} />
          <div className={component_classes.component_header4}>{children}</div>
          <div className={component_classes.component_header4}>
            This is bottom
          </div>
        </div>
      </body>
    </html>
  );
}

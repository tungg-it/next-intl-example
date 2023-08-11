import { ReactNode } from "react";
import "./globals.css";

type Props = {
  children: ReactNode;
};

function RootLayout({ children }: Props) {
  return children;
}

export default RootLayout;

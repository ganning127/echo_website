// app/fonts.ts
import { Lato } from "next/font/google";

export const lato = Lato({
    subsets: ["latin"],
    weight: [
        "100",
        "300",
        "400",
        "700",
        "900",
    ],
    style: ["normal", "italic"],
    variable: "--font-body",
    display: "swap",
});

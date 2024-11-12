import { redirect } from "next/navigation";

export const metadata = {
  title: "Weather App - Muhammad Tayyab",
  description: "Redirecting to the Weather App...",
};

export default function Page() {
  redirect("https://weather-app-tayyab.vercel.app");
}
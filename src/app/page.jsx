import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      <p>music stream</p>
      <Link href={"/home"}>go home</Link>
    </main>
  );
}

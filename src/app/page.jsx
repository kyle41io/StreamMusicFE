import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <p>music stream</p>
      <Link href={"/home"}>go home</Link>
    </main>
  );
}

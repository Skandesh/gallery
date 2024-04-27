import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex  flex-wrap items-center justify-center gap-4 ">
      {images.map((img) => (
        <div key={img.id} className="flex  w-48 flex-col ">
          <Image alt={img.name} src={img.url} height={500} width={300} />
          {/* <img src={img.url} alt="" /> */}
          <div className="p-4">{img.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="h-full min-h-screen w-full bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <SignedOut>
        <div className="h-full w-full p-28 text-center text-2xl">
          Please Sign In
        </div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

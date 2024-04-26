import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

// const mockUrls = [
//   "https://utfs.io/f/083e2517-3053-42a8-b885-f061fdc3a441-3b6tbm.jpg",
//   "https://utfs.io/f/bf4bf72f-ba57-4720-b34d-45489ea77fd4-lxmtpt.jpg",
//   "https://utfs.io/f/b9b8fa55-ba9c-44a2-ad07-a351aad901c5-1icllk.jpg",
//   "https://utfs.io/f/17de3833-18c3-483c-931c-0c1e3b7b42e8-ttqq9q.jpg",
//   "https://utfs.io/f/fca5435b-95f6-43c7-b191-8e5aeaa809cc-hxba0g.jpg",
// ];

// const mockImgs = mockUrls.map((url, idx) => ({
//   id: idx + 1,
//   url,
// }));

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="flex  flex-wrap items-center justify-center gap-4 ">
      {images.map((img) => (
        <div key={img.id} className="flex  w-48 flex-col ">
          <img src={img.url} height={500} width={300} />
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

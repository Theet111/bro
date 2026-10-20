import { Suspense } from "react";
import { sampleArtists } from "../../../lib/artists";
import { ArtistProfile } from "./profile";

export function generateStaticParams() {
  return sampleArtists.map((artist) => ({ id: artist.id }));
}

export default function ArtistPage({ params }: PageProps<"/artists/[id]">) {
  return <Suspense fallback={<main className="container state-page"><h1>Loading artist…</h1></main>}><ArtistRoute params={params} /></Suspense>;
}

async function ArtistRoute({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ArtistProfile id={id} />;
}

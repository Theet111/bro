import { Suspense } from "react";
import { sampleArtists } from "../../../lib/artists";
import { BookingForm } from "./booking-form";

export function generateStaticParams() {
  return sampleArtists.map((artist) => ({ id: artist.id }));
}

export default function BookingPage({ params }: PageProps<"/booking/[id]">) {
  return <Suspense fallback={<main className="container state-page"><h1>Loading booking…</h1></main>}><BookingRoute params={params} /></Suspense>;
}

async function BookingRoute({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <BookingForm id={id} />;
}

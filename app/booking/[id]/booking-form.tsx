"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { ArtistImage } from "../../../components/artist-card";
import { Icon } from "../../../components/icons";
import { money } from "../../../lib/artists";
import { addBooking, Booking, useDemoData } from "../../../lib/demo-store";

export function BookingForm({ id }: { id: string }) {
  const router = useRouter();
  const { artists, loaded } = useDemoData();
  const [minDate, setMinDate] = useState("");
  useEffect(() => { setMinDate(new Date().toISOString().slice(0, 10)); }, []);
  const artist = artists.find((item) => item.id === id);
  if (!artist) return <main className="container state-page"><h1>{loaded ? "Artist not found." : "Loading booking form…"}</h1><p>{loaded ? "Choose an artist from the directory to start a request." : "Looking for this artist in your browser."}</p><Link className="button button-dark" href="/artists">Browse artists <Icon name="arrow" size={17} /></Link></main>;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!artist) return;
    const fields = Object.fromEntries(new FormData(event.currentTarget).entries());
    const booking: Booking = {
      id: `request-${Date.now()}`,
      artistId: artist.id,
      artistName: artist.name,
      name: String(fields.name).trim(),
      email: String(fields.email).trim(),
      date: String(fields.date),
      location: String(fields.location).trim(),
      eventType: String(fields.eventType),
      guests: String(fields.guests || ""),
      notes: String(fields.notes || "").trim(),
      createdAt: new Date().toISOString(),
    };
    addBooking(booking);
    router.push("/requests");
  }

  return <main><div className="container breadcrumbs"><Link href="/artists">Explore artists</Link><span>/</span><Link href={`/artists/${artist.id}`}>{artist.name}</Link><span>/</span><span>Booking request</span></div><section className="booking-page container"><div className="booking-main"><div className="eyebrow"><span className="eyebrow-line" /> BOOKING REQUEST</div><h1>Make it a moment.</h1><p>Tell {artist.name} about your event. This demo saves the request in this browser so you can review it later.</p><form className="booking-form" onSubmit={submit}><div className="form-grid"><label>Your name<input name="name" required placeholder="Your full name" /></label><label>Email address<input type="email" name="email" required placeholder="you@example.com" /></label><label>Event date<input type="date" name="date" required min={minDate} /></label><label>Event location<input name="location" required placeholder="City or venue" /></label><label>Event type<select name="eventType" required defaultValue=""><option value="" disabled>Select event type</option><option>Wedding</option><option>Corporate event</option><option>Private party</option><option>Festival</option><option>Other</option></select></label><label>Estimated guests<input type="number" name="guests" min="1" placeholder="e.g. 150" /></label></div><label>Tell us a little more<textarea name="notes" rows={5} placeholder="The vibe, timing, and anything the artist should know" /></label><button className="button button-dark form-submit" type="submit">Save booking request <Icon name="arrow" size={18} /></button><p className="form-fine-print">Demo only. No message is sent to the artist and no payment is collected.</p></form></div><aside className="booking-aside"><div className="booking-aside-image"><ArtistImage artist={artist} /></div><div className="booking-aside-copy"><span>YOU ARE REQUESTING</span><h2>{artist.name}</h2><p>{artist.specialty} · {artist.city}</p><div><small>Starting from</small><strong>{money(artist.fee)}</strong><small>per event · indicative</small></div><Link href={`/artists/${artist.id}`}>View artist profile ↗</Link></div></aside></section></main>;
}

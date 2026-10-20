"use client";

import Link from "next/link";
import { ArtistCard } from "../../components/artist-card";
import { Icon } from "../../components/icons";
import { useDemoData } from "../../lib/demo-store";

export default function SavedPage() {
  const { artists, favorites, loaded } = useDemoData();
  const saved = artists.filter((artist) => favorites.includes(artist.id));
  return <main><section className="page-hero container"><div className="eyebrow"><span className="eyebrow-line" /> YOUR SHORTLIST</div><h1>Saved artists.</h1><p>Keep the people you want to come back to in one quiet place.</p></section><section className="explore-section collection-section"><div className="container">{saved.length ? <><div className="results-line"><strong>{saved.length.toString().padStart(2, "0")}</strong> saved {saved.length === 1 ? "artist" : "artists"}</div><div className="artist-grid">{saved.map((artist) => <ArtistCard key={artist.id} artist={artist} />)}</div></> : <div className="empty-state"><div className="empty-icon">♡</div><h2>{loaded ? "No saved artists yet." : "Loading your shortlist…"}</h2><p>When you find someone who feels right, select the heart on their card.</p><Link className="text-link" href="/artists">Explore artists <Icon name="arrow" size={17} /></Link></div>}</div></section></main>;
}

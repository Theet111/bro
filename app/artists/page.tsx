"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useRef, useState } from "react";
import { ArtistCard } from "../../components/artist-card";
import { Icon } from "../../components/icons";
import { categories, cities } from "../../lib/artists";
import { useDemoData } from "../../lib/demo-store";

export default function ArtistsPage() {
  return <Suspense fallback={<main className="container state-page"><h1>Loading artists…</h1></main>}><ArtistsDirectory /></Suspense>;
}

function ArtistsDirectory() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("category");
  const urlCategory = categories.find((item) => item === requested) ?? "All artists";
  const { artists } = useDemoData();
  const [query, setQuery] = useState("");
  const [chosenCategory, setChosenCategory] = useState<(typeof categories)[number] | null>(null);
  const category = chosenCategory ?? urlCategory;
  const [city, setCity] = useState("All locations");
  const [sort, setSort] = useState("Recommended");
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    const result = artists.filter((artist) =>
      (category === "All artists" || artist.category === category) &&
      (city === "All locations" || artist.city === city) &&
      (!term || [artist.name, artist.specialty, artist.category, artist.city, ...artist.tags].join(" ").toLowerCase().includes(term))
    );
    if (sort === "Price: low to high") return result.sort((a, b) => a.fee - b.fee);
    if (sort === "Price: high to low") return result.sort((a, b) => b.fee - a.fee);
    return result.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  }, [artists, category, city, query, sort]);

  return <main><section className="page-hero container"><div className="eyebrow"><span className="eyebrow-line" /> THE ARTIST DIRECTORY</div><div className="page-hero-row"><div><h1>Find your people.</h1><p>Explore talented people for the moments you are planning. Filter by craft and location, then find the right fit for your event.</p></div><Link className="text-link" href="/saved">Your saved artists <Icon name="heart" size={16} /></Link></div></section><section className="explore-section directory-page"><div className="container"><div className="filter-panel"><label className="search-field"><Icon name="search" size={20} /><span className="sr-only">Search artists</span><input ref={searchRef} type="search" placeholder="Search artists, styles, or events" value={query} onChange={(event) => setQuery(event.target.value)} /></label><label className="select-field"><Icon name="pin" size={18} /><span className="sr-only">Location</span><select value={city} onChange={(event) => setCity(event.target.value)}>{cities.map((item) => <option key={item}>{item}</option>)}</select></label><button className="filter-button" onClick={() => searchRef.current?.focus()}>Find artists <Icon name="arrow" size={17} /></button></div><div className="directory-toolbar"><div className="category-tabs" role="group" aria-label="Artist category">{categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setChosenCategory(item)} aria-pressed={category === item}>{item}</button>)}</div><label className="sort-field"><span>Sort by</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option>Recommended</option><option>Price: low to high</option><option>Price: high to low</option></select></label></div><div className="results-line"><strong>{filtered.length.toString().padStart(2, "0")}</strong> {filtered.length === 1 ? "artist" : "artists"} to explore <span>Sample profiles and indicative prices</span></div>{filtered.length ? <div className="artist-grid">{filtered.map((artist) => <ArtistCard key={artist.id} artist={artist} />)}</div> : <div className="empty-state"><div className="empty-icon">✳</div><h2>No artists found</h2><p>Try another style or location to discover more talent.</p><button onClick={() => { setQuery(""); setChosenCategory("All artists"); setCity("All locations"); }}>Clear filters <Icon name="arrow" size={16} /></button></div>}</div></section></main>;
}

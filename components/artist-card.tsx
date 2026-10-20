"use client";

import Link from "next/link";
import { Artist, money } from "../lib/artists";
import { toggleFavorite, useDemoData } from "../lib/demo-store";
import { Icon } from "./icons";

export function ArtistImage({ artist }: { artist: Artist }) {
  return <div className="artist-image" role="img" aria-label={`${artist.name}, ${artist.specialty}`} style={artist.image ? { backgroundImage: `url("${artist.image}")` } : undefined}>{!artist.image && <span>{artist.name.split(" ").map((part) => part[0]).join("")}</span>}</div>;
}

export function ArtistCard({ artist }: { artist: Artist }) {
  const { favorites } = useDemoData();
  const saved = favorites.includes(artist.id);
  return <article className="artist-card"><div className="card-image-wrap"><Link className="image-hit" href={`/artists/${artist.id}`} aria-label={`View ${artist.name}'s profile`}><ArtistImage artist={artist} /></Link><button className={`favorite-button ${saved ? "is-saved" : ""}`} aria-label={saved ? `Remove ${artist.name} from saved` : `Save ${artist.name}`} aria-pressed={saved} onClick={() => toggleFavorite(artist.id)}><Icon name="heart" size={19} /></button><span className="card-category">{artist.category}</span></div><div className="card-content"><div className="card-top"><div><h3>{artist.name}</h3><p>{artist.specialty}</p></div><span className="card-arrow" aria-hidden="true">↗</span></div><div className="card-meta"><span><Icon name="pin" size={15} /> {artist.city}</span><span>From <strong>{money(artist.fee)}</strong></span></div><Link className="card-link" href={`/artists/${artist.id}`}>View profile <Icon name="arrow" size={16} /></Link></div></article>;
}

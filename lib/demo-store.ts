"use client";

import { useEffect, useState } from "react";
import { Artist, sampleArtists } from "./artists";

export type Booking = {
  id: string;
  artistId: string;
  artistName: string;
  name: string;
  email: string;
  date: string;
  location: string;
  eventType: string;
  guests: string;
  notes: string;
  createdAt: string;
};

const keys = { artists: "commonstage-artists", favorites: "commonstage-favorites", bookings: "commonstage-bookings" };
const updateEvent = "commonstage:update";

function readArray<T>(key: string): T[] {
  if (typeof window === "undefined") return [];
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(parsed) ? parsed as T[] : [];
  } catch { return []; }
}

function writeArray<T>(key: string, items: T[]) {
  localStorage.setItem(key, JSON.stringify(items));
  window.dispatchEvent(new Event(updateEvent));
}

export function useDemoData() {
  const [artists, setArtists] = useState<Artist[]>(sampleArtists);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const sync = () => {
      setArtists([...sampleArtists, ...readArray<Artist>(keys.artists)]);
      setFavorites(readArray<string>(keys.favorites));
      setBookings(readArray<Booking>(keys.bookings));
      setLoaded(true);
    };
    sync();
    window.addEventListener(updateEvent, sync);
    window.addEventListener("storage", sync);
    return () => { window.removeEventListener(updateEvent, sync); window.removeEventListener("storage", sync); };
  }, []);

  return { artists, favorites, bookings, loaded };
}

export function toggleFavorite(id: string) {
  const current = readArray<string>(keys.favorites);
  writeArray(keys.favorites, current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
}

export function addArtist(artist: Artist) {
  writeArray(keys.artists, [...readArray<Artist>(keys.artists), artist]);
}

export function addBooking(booking: Booking) {
  writeArray(keys.bookings, [booking, ...readArray<Booking>(keys.bookings)]);
}

"use client";

import Link from "next/link";
import { Icon } from "../../components/icons";
import { useDemoData } from "../../lib/demo-store";

function displayDate(date: string) {
  const parsed = new Date(`${date}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? date : parsed.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default function RequestsPage() {
  const { bookings, loaded } = useDemoData();
  return <main><section className="page-hero container"><div className="eyebrow"><span className="eyebrow-line" /> YOUR EVENT PLANS</div><h1>My requests.</h1><p>Review the booking requests you have saved in this browser. They have not been sent to artists.</p></section><section className="explore-section collection-section"><div className="container">{bookings.length ? <><div className="notice-bar"><Icon name="check" size={18} /><span>Your sample request is saved on this device. No artist was contacted.</span></div><div className="results-line"><strong>{bookings.length.toString().padStart(2, "0")}</strong> saved {bookings.length === 1 ? "request" : "requests"}</div><div className="request-list">{bookings.map((request, index) => <article className="request-card" key={request.id || `${request.artistId}-${request.createdAt}-${index}`}><div className="request-card-head"><div><span>BOOKING REQUEST</span><h2>{request.artistName}</h2><p>{request.eventType} · {request.location}</p></div><span className="request-status">Saved in browser</span></div><div className="request-card-details"><span><Icon name="calendar" size={16} /> {displayDate(request.date)}</span><span><Icon name="pin" size={16} /> {request.location}</span>{request.guests && <span>{request.guests} guests</span>}</div>{request.notes && <p className="request-note">“{request.notes}”</p>}<div className="request-card-footer"><span>Requested by {request.name}</span><Link className="text-link" href={`/artists/${request.artistId}`}>View artist <Icon name="arrow" size={17} /></Link></div></article>)}</div></> : <div className="empty-state"><div className="empty-icon">✳</div><h2>{loaded ? "No requests yet." : "Loading your requests…"}</h2><p>Choose an artist and share your event details to create your first sample request.</p><Link className="text-link" href="/artists">Explore artists <Icon name="arrow" size={17} /></Link></div>}</div></section></main>;
}

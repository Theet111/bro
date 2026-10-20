"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { Icon } from "../../components/icons";
import { Artist, categories, cities } from "../../lib/artists";
import { addArtist } from "../../lib/demo-store";

export default function JoinPage() {
  const router = useRouter();
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget).entries());
    const artist: Artist = {
      id: `artist-${Date.now()}`,
      name: String(fields.name).trim(),
      category: String(fields.category) as Artist["category"],
      specialty: String(fields.specialty).trim(),
      city: String(fields.city),
      fee: Number(fields.fee),
      bio: String(fields.bio).trim(),
      tags: String(fields.tags || "").split(",").map((tag) => tag.trim()).filter(Boolean).slice(0, 4),
      image: String(fields.image || "").trim() || undefined,
    };
    addArtist(artist);
    router.push(`/artists/${artist.id}`);
  }
  return <main><section className="page-hero container"><div className="eyebrow"><span className="eyebrow-line" /> JOIN COMMONSTAGE</div><h1>Give your craft<br /><em>room to be seen.</em></h1><p>Build a sample profile so event planners can explore your work in this demo.</p></section><section className="join-layout container"><div className="join-intro"><span className="section-number">01 / YOUR PROFILE</span><h2>Tell us what you bring to the stage.</h2><p>Clear details help planners picture you at their event. Your profile appears in this browser&apos;s artist directory after you submit.</p><div className="join-benefits"><div><Icon name="check" size={18} /> Show your style and specialty</div><div><Icon name="check" size={18} /> Set an indicative starting fee</div><div><Icon name="check" size={18} /> Share a profile photo URL</div></div></div><form className="booking-form join-form" onSubmit={submit}><div className="form-grid"><label>Artist or act name<input name="name" required maxLength={80} placeholder="Your stage name" /></label><label>Category<select name="category" required defaultValue=""><option value="" disabled>Select a category</option>{categories.slice(1).map((item) => <option key={item}>{item}</option>)}</select></label><label>What do you do?<input name="specialty" required maxLength={100} placeholder="e.g. Soul vocalist" /></label><label>Based in<select name="city" required defaultValue=""><option value="" disabled>Select your city</option>{cities.slice(1).map((item) => <option key={item}>{item}</option>)}</select></label><label>Starting fee (₹)<input type="number" name="fee" required min="0" placeholder="e.g. 20000" /></label><label>Profile image URL <span className="optional">optional</span><input type="url" name="image" placeholder="https://example.com/photo.jpg" /></label></div><label>Tags <span className="optional">optional</span><input name="tags" placeholder="Acoustic, Weddings, Live events" /></label><label>About your work<textarea name="bio" rows={6} required maxLength={650} placeholder="What makes your performance special? What kinds of events do you love?" /></label><button className="button button-dark form-submit" type="submit">Create sample profile <Icon name="arrow" size={18} /></button><p className="form-fine-print">This is a browser-local demo. Profiles are stored on this device and are not published for other visitors.</p></form></section><section className="join-bottom container"><p>Planning an event instead?</p><Link className="text-link" href="/artists">Explore artists <Icon name="arrow" size={17} /></Link></section></main>;
}

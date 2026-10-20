export type Category = "Live music" | "DJs" | "Performers" | "Visual arts" | "Hosts";

export type Artist = {
  id: string;
  name: string;
  category: Category;
  specialty: string;
  city: string;
  fee: number;
  bio: string;
  tags: string[];
  image?: string;
  featured?: boolean;
};

export const categories = ["All artists", "Live music", "DJs", "Performers", "Visual arts", "Hosts"] as const;
export const cities = ["All locations", "Mumbai", "Delhi", "Bengaluru", "Pune", "Hyderabad", "Jaipur"];
export const money = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

// Illustrative profiles for this concept demo. These are not real bookable artists.
export const sampleArtists: Artist[] = [
  { id: "aanya", name: "Aanya Mehta", category: "Live music", specialty: "Indie vocalist & guitarist", city: "Mumbai", fee: 18000, image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=900&q=85", bio: "A warm, acoustic sound for intimate celebrations, brand evenings, and everything in between. Aanya blends familiar favorites with her own soulful arrangements.", tags: ["Acoustic", "Weddings", "Corporate"], featured: true },
  { id: "kabir", name: "Kabir Sethi", category: "DJs", specialty: "Open-format DJ", city: "Delhi", fee: 25000, image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&q=85", bio: "A dance floor first DJ who moves easily from house and disco to current favorites. Kabir builds every set around the room and the moment.", tags: ["House", "Private parties", "Brand events"], featured: true },
  { id: "tara", name: "Tara Rao", category: "Performers", specialty: "Contemporary dance collective", city: "Bengaluru", fee: 32000, image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=900&q=85", bio: "Expressive choreography made for the stage. Tara and her collective create memorable opening acts and custom performances for events of every scale.", tags: ["Dance", "Stage shows", "Custom acts"], featured: true },
  { id: "rehan", name: "Rehan Kapoor", category: "Live music", specialty: "Jazz pianist", city: "Pune", fee: 22000, image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=900&q=85", bio: "Understated jazz, modern standards, and a little improvisation. Rehan brings an elegant soundtrack to dinners, receptions, and private gatherings.", tags: ["Jazz", "Dinner events", "Solo"] },
  { id: "ishita", name: "Ishita Nair", category: "Visual arts", specialty: "Live illustrator", city: "Mumbai", fee: 15000, image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=85", bio: "Ishita captures guests and memorable moments in expressive, quick illustrations that become thoughtful take-home keepsakes.", tags: ["Live art", "Guest experience", "Brand events"] },
  { id: "arjun", name: "Arjun Malhotra", category: "Hosts", specialty: "Event host & emcee", city: "Hyderabad", fee: 20000, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=900&q=85", bio: "An engaging, easygoing host who keeps the room connected and the program moving. Arjun works across conferences, celebrations, and launches.", tags: ["Emcee", "Corporate", "Celebrations"] },
];

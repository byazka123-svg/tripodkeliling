
export interface Profile {
  id: string;
  name: string;
  category: 'Fotografer' | 'Videografer' | 'Drone Pilot' | 'MUA' | 'Model' | 'Mentor' | 'Brand';
  avatar: string;
  tagline: string;
  portfolioLink: string;
}

export const mockProfiles: Profile[] = [
  // Fotografer
  { id: 'fg-1', name: 'Andi Pratama', category: 'Fotografer', avatar: 'https://picsum.photos/seed/p1/200', tagline: 'Spesialis potret & human interest.', portfolioLink: '#' },
  { id: 'fg-2', name: 'Rina Sastrawati', category: 'Fotografer', avatar: 'https://picsum.photos/seed/p2/200', tagline: 'Fotografer wedding & pre-wedding.', portfolioLink: '#' },
  // Videografer
  { id: 'vg-1', name: 'Budi Cahyono', category: 'Videografer', avatar: 'https://picsum.photos/seed/v1/200', tagline: 'Cinematic event documentation.', portfolioLink: '#' },
  { id: 'vg-2', name: 'Clara Wijaya', category: 'Videografer', avatar: 'https://picsum.photos/seed/v2/200', tagline: 'Video editor & colorist handal.', portfolioLink: '#' },
  // Drone Pilot
  { id: 'dp-1', name: 'Eko Nugroho', category: 'Drone Pilot', avatar: 'https://picsum.photos/seed/d1/200', tagline: 'Lisensi FPV & aerial sinematik.', portfolioLink: '#' },
  // MUA
  { id: 'mua-1', name: 'Dewi Lestari', category: 'MUA', avatar: 'https://picsum.photos/seed/m1/200', tagline: 'Make-up artist untuk photoshoot & event.', portfolioLink: '#' },
  // Model
  { id: 'mdl-1', name: 'Alex Suherman', category: 'Model', avatar: 'https://picsum.photos/seed/mdl1/200', tagline: 'Model komersial & fashion.', portfolioLink: '#' },
  { id: 'mdl-2', name: 'Sinta Bella', category: 'Model', avatar: 'https://picsum.photos/seed/mdl2/200', tagline: 'Berpengalaman dalam beauty shoot.', portfolioLink: '#' },
  // Mentor
  { id: 'mnt-1', name: 'Gatot Subroto', category: 'Mentor', avatar: 'https://picsum.photos/seed/mnt1/200', tagline: 'Mentor lighting & komposisi.', portfolioLink: '#' },
  // Brand
  { id: 'brd-1', name: 'Lensa Kita Store', category: 'Brand', avatar: 'https://picsum.photos/seed/b1/200', tagline: 'Toko perlengkapan fotografi.', portfolioLink: '#' },
];

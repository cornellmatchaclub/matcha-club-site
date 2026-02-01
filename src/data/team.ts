export interface Founder {
  id: number;
  normal: string;
  silly: string;
  bio: string;
  name: string;
}

export const FOUNDERS: Founder[] = [
  {
    id: 1, name: "Isabella Laine", normal: "src/assets/founders/izzy-reg.jpg", silly: "src/assets/founders/izzy-silly.png",
    bio: "filler bio."
  },
  {
    id: 2, name: "Katherine Wei", normal: "src/assets/founders/kat-reg.jpg", silly: "src/assets/founders/kat-silly.jpg",
    bio: "filler bio"
  },
  {
    id: 3, name: "Eman Siddiqui", normal: "src/assets/founders/eman-reg.jpg", silly: "src/assets/founders/eman-silly.jpg",
    bio: "filler bio."
  },
  {
    id: 4, name: "Jennifer Ai", normal: "src/assets/founders/jennifer-reg.jpg", silly: "src/assets/founders/jennifer-silly.JPG",
    bio: "insert bio here"
  },
  {
    id: 5, name: "Sophia Wang", normal: "src/assets/founders/sophia-reg.jpg", silly: "src/assets/founders/sophia-silly.jpg",
    bio: "Former Media Chair: I got to make some fun graphics, presentations, and this website! I graduated in Dec 2025 and studied CS. I love ceramics, photography, and hiking. On campus, I was super involved in CUAir and WICC."
  },
];

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;      // Professional photo
  funImage: string;   // Silly/Fun photo
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Isabella Laine",
    role: "President",
    bio: "put ur bio here",
    image: "src/assets/team/izzy-reg.jpg",
    funImage: "src/assets/team/izzy-silly.png"
  },
  {
    id: 2,
    name: "Jennifer Ai",
    role: "President",
    bio: "put ur bio here",
    image: "src/assets/team/jennifer-reg.jpg",
    funImage: "src/assets/team/jennifer-silly.jpg"
  },
  {
    id: 3,
    name: "Eman Siddiqui",
    role: "President",
    bio: "put ur bio here",
    image: "src/assets/team/eman-reg.jpg",
    funImage: "src/assets/team/eman-silly.jpg"
  },
  {
    id: 4,
    name: "Carrie Ng",
    role: "Vice President",
    bio: "put ur bio here",
    image: "src/assets/team/carrie-reg.jpg",
    funImage: "src/assets/team/carrie-silly.jpg"
  },
  {
    id: 5,
    name: "Michelle Yuan",
    role: "Treasurer",
    bio: "put ur bio here",
    image: "src/assets/team/michelle-reg.jpg",
    funImage: "src/assets/team/michelle-silly.jpg"
  },
  {
    id: 6,
    name: "Annie Song",
    role: "Media Chair",
    bio: "put ur bio here",
    image: "src/assets/team/annie-reg.jpg",
    funImage: "src/assets/team/annie-silly.jpg"
  },
  {
    id: 7,
    name: "Saad Hashmi",
    role: "Marketing Chair",
    bio: "put ur bio here",
    image: "src/assets/team/saad-reg.jpg",
    funImage: "src/assets/team/saad-silly.jpg"
  },
  {
    id: 8,
    name: "Grace Jun",
    role: "Social Chair",
    bio: "put ur bio here",
    image: "src/assets/team/grace-reg.jpg",
    funImage: "src/assets/team/grace-silly.jpg"
  },

  // ... and so on
];
export interface Founder {
  id: number;
  normal: string;
  silly: string;
  bio: string;
  name: string;
}

// READ ME: make sure the paths are 100% CORRECT! JPG vs jpg matters, PNG vs jpg, etc.

export const FOUNDERS: Founder[] = [
  {
    id: 1, name: "Isabella Laine", normal: "/assets/founders/izzy-reg.jpg", silly: "/assets/founders/izzy-silly.jpg",
    bio: "filler bio."
  },
  {
    id: 2, name: "Katherine Wei", normal: "/assets/founders/kat-reg.jpg", silly: "/assets/founders/kat-silly.jpg",
    bio: "filler bio"
  },
  {
    id: 3, name: "Eman Siddiqui", normal: "/assets/founders/eman-reg.jpg", silly: "/assets/founders/eman-silly.jpg",
    bio: "filler bio."
  },
  {
    id: 4, name: "Jennifer Ai", normal: "/assets/founders/jennifer-reg.jpg", silly: "/assets/founders/jennifer-silly.jpg",
    bio: "I’m a Senior in Duffield Engineering, majoring in Information Science, Systems, and Technology. I’m from Texas, but my favorite matcha has to be either from Community Goods in LA or Kijitora in NYC. Also, former Co-President of WICC!!"
  },
  {
    id: 5, name: "Sophia Wang", normal: "/assets/founders/sophia-reg.jpg", silly: "/assets/founders/sophia-silly.jpg",
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
    image: "/assets/team/izzy-reg.jpg",
    funImage: "/assets/team/izzy-silly.jpg"
  },
  {
    id: 2,
    name: "Jennifer Ai",
    role: "President",
    bio: "I’m a Senior in Duffield Engineering, majoring in Information Science, Systems, and Technology. I’m from Texas, but my favorite matcha has to be either from Community Goods in LA or Kijitora in NYC. Also, former Co-President of WICC!!",
    image: "/assets/team/jennifer-reg.jpg",
    funImage: "/assets/team/jennifer-silly.jpg"
  },
  {
    id: 3,
    name: "Eman Siddiqui",
    role: "President",
    bio: "put ur bio here",
    image: "/assets/team/eman-reg.jpg",
    funImage: "/assets/team/eman-silly.jpg"
  },
  {
    id: 4,
    name: "Carrie Ng",
    role: "Vice President",
    bio: "put ur bio here",
    image: "/assets/team/carrie-reg.jpg",
    funImage: "/assets/team/carrie-silly.jpg"
  },
  {
    id: 5,
    name: "Michelle Yuan",
    role: "Treasurer",
    bio: "put ur bio here",
    image: "/assets/team/michelle-reg.jpg",
    funImage: "/assets/team/michelle-silly.jpg"
  },
  {
    id: 6,
    name: "Annie Song",
    role: "Media Chair",
    bio: "put ur bio here",
    image: "/assets/team/annie-reg.jpg",
    funImage: "/assets/team/annie-silly.jpg"
  },
  {
    id: 7,
    name: "Saad Hashmi",
    role: "Marketing Chair",
    bio: "put ur bio here",
    image: "/assets/team/saad-reg.jpg",
    funImage: "/assets/team/saad-silly.jpg"
  },
  {
    id: 8,
    name: "Grace Jun",
    role: "Social Chair",
    bio: "put ur bio here",
    image: "/assets/team/grace-reg.jpg",
    funImage: "/assets/team/grace-silly.jpg"
  },

  // ... and so on
];

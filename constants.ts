import { Horse, SoldHorse } from './types';

export const HORSES: Horse[] = [
  {
    id: 1,
    name: "Gildra från Lendelunden",
    birthYear: 2020,
    color: "Islandshäst", 
    gender: "Sto",
    description: "",
    sire: "Sörli från Skáneyland",
    dam: "Gata frá Kvistum",
    imageUrl: "/images/glimra.jpg"
  },
  {
    id: 2,
    name: "Melkorka fra Melabergi",
    birthYear: 2016,
    color: "Svart",
    gender: "Sto",
    description: "",
    sire: "Stormur frá Herridarholi",
    dam: "Milly frá Feti",
    imageUrl: "/images/melkorka.jpg"
  },
  {
    id: 3,
    name: "Glóa fra Gröf",
    birthYear: 2013,
    color: "Skimmel",
    gender: "Sto",
    description: "",
    sire: "Blær frá Miðsitju",
    dam: "Gyðja frá Glúmsstöðum 2",
    imageUrl: "/images/gloa.jpg"
  },
  {
    id: 4,
    name: "Röskva fra Holavatni",
    birthYear: 2004,
    color: "Islandshäst",
    gender: "Sto",
    description: "",
    sire: "Prins frá Úlfjotsvatni",
    dam: "Vera frá Hólavatni",
    imageUrl: "/images/roskva.jpg"
  },
  {
    id: 5,
    name: "Rún från Ekelunda gård",
    birthYear: 2023,
    color: "Islandshäst",
    gender: "Sto",
    description: "",
    sire: "Oðinn vom Habichtswald",
    dam: "Röskva fra Hólavatni",
    imageUrl: "/images/r.jpg"
  },
  {
    id: 6,
    name: "Ótto från Slottsgården",
    birthYear: 2024,
    color: "Islandshäst",
    gender: "Hingst",
    description: "",
    sire: "Sörli från Skáneyland",
    dam: "Olympia fra Stav",
    imageUrl: "/images/otto.jpg"
  },
  {
    id: 7,
    name: "Melkíor från Ekelunda gård",
    birthYear: 2025,
    color: "Islandshäst",
    gender: "Hingst",
    description: "",
    sire: "Grimur frá Efsta-Seli",
    dam: "Melkorka fra Melaberg",
    imageUrl: "/images/melkior.png"
  },
  {
    id: 8,
    name: "Rakel från Ekelunda gård",
    birthYear: 2024,
    color: "Islandshäst",
    gender: "Sto",
    description: "",
    sire: "Oðinn vom Habichtswald",
    dam: "Röskva fra Hólavatni",
    imageUrl: "/images/rakel.jpg"
  }
];

export const SOLD_HORSES: SoldHorse[] = [
  { name: "Freja från Dalsgård" },
  { name: "Glimra från Ekelunda gård" },
  { name: "Ragnhild från Ekelunda gård" },
  { name: "Rut från Ekelunda gård" }
];

export const CONTACT_EMAIL = "info@ekelunda.se";
export const CONTACT_PHONE = "0706-971641";
export const ADDRESS = "Södra Hultarp 527, 243 97 Hallaröd";
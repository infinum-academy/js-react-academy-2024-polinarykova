import { IShowList } from "@/typings/show";

export const mockShowList: IShowList = {
  shows: [
    {
      id: 1,
      title: "Brooklyn Nine-Nine",
      description:
        "A comedy series following the detectives of the 99th precinct of the NYPD.",
      averageRating: 4.7,
      imageUrl: "/assets/brooklyn99.jpg",
    },
    {
      id: 2,
      title: "The Office",
      description:
        "A mockumentary-style sitcom depicting the everyday lives of office employees.",
      averageRating: 4.3,
      imageUrl: "/assets/the_office.jpg",
    },
    {
      id: 3,
      title: "Criminal Minds",
      description:
        "A crime procedural drama focusing on FBI agents profiling criminals.",
      averageRating: 4.5,
      imageUrl: "/assets/criminal_minds.jpg",
    },
    {
      id: 4,
      title: "Stranger Things",
      description:
        "A supernatural thriller series set in the 1980s about a group of kids uncovering mysteries in their town.",
      averageRating: 4.8,
      imageUrl: "https://example.com/strangerthings.jpg",
    },
    {
      id: 5,
      title: "You",
      description:
        "A psychological thriller series following a bookstore manager who becomes obsessed with the people in his life.",
      averageRating: 4.2,
      imageUrl: "https://example.com/you.jpg",
    },
    {
      id: 6,
      title: "The Mentalist",
      description:
        "A crime drama series following a former psychic medium who uses his skills to help solve crimes as a consultant for the CBI.",
      averageRating: 4.4,
      imageUrl: "https://example.com/mentalist.jpg",
    },
  ],
};

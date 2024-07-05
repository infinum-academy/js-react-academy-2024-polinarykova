"use client";

import ShowDetails from "@/components/features/shows/ShowDetails";

export default function Home() {
  const description =
    "Brooklyn Nine-Nine is a comedic TV series that follows the hilarious antics of Detective Jake Peralta and his diverse, quirky colleagues at the 99th precinct of the NYPD in Brooklyn, led by their stern but lovable Captain Holt.";
  return (
    <>
      <ShowDetails
        title="Brooklyn Nine-Nine"
        description={description}
        averageRating={3}
        imageUrl="/assets/brooklyn99.jpg"
      />
    </>
  );
}

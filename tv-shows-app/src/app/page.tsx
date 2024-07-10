"use client";
import React from "react";

import ShowList from "@/components/shared/ShowList/ShowList";

export default function Home() {
  const mockList = { shows: [] };
  return <ShowList showList={mockList}></ShowList>;
}

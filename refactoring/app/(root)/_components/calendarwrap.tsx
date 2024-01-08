"use client";

import Navbar from "../_components/navbar";
import { Calendar } from "@/components/ui/calendar";
import React from "react";

export default function CalendarWrap() {

  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <Calendar
      selected={date}
      onSelect={setDate}
      className="rounded-md border col-start-2 row-start-1 row-end-3 drop-shadow-lg"
    />
  );
}

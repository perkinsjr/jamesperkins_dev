import React from "react";
import { StatGroup, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
export default function YouTubeStat({ label, number }) {
  return (
    <Stat>
      <StatLabel textAlign="center">{label}</StatLabel>
      <StatNumber textAlign="center">{number.toLocaleString()}</StatNumber>
    </Stat>
  );
}

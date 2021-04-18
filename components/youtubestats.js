import React from "react";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";
export default function YouTubeStat({ label, number }) {

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <Stat>
      <StatLabel textAlign="center">{label}</StatLabel>
      <StatNumber textAlign="center">{formatNumber(number)}</StatNumber>
    </Stat>
  );
}

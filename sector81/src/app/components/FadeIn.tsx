// src/app/components/FadeIn.tsx

"use client";

import React from 'react';
// CHANGE THIS LINE:
import Animate from 'react-smooth'; 

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <Animate
      from={{ opacity: 0, transform: 'translate(0, 20px)' }}
      to={{ opacity: 1, transform: 'translate(0, 0)' }}
      attributeName="opacity"
      duration={1000}
    >
      {children}
    </Animate>
  );
}
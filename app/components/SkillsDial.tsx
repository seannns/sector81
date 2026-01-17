'use client';

import { useEffect, useRef } from 'react';

const skills = [
  'UI Design',
  'UX Research',
  'Wireframing',
  'Prototyping',
  'Design Systems',
  'Responsive Design',
  'Accessibility',
  'Interaction Design',
  'Visual Design',
  'User Testing',
  'Information Architecture',
  'Figma',
  'Typography',
  'Motion Design',
  'Frontend Development',
];

export default function SkillsDial() {
  const containerRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const itemHeight = 40;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      offsetRef.current += 0.5;
      const totalHeight = skills.length * itemHeight;
      if (offsetRef.current >= totalHeight) {
        offsetRef.current = 0;
      }
      container.style.transform = `translateY(-${offsetRef.current}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Triple the skills for seamless loop
  const allSkills = [...skills, ...skills, ...skills];

  return (
    <div 
      className="relative h-[280px] w-64 overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)',
      }}
    >
      <div ref={containerRef} className="w-full">
        {allSkills.map((skill, index) => (
          <div
            key={index}
            className="h-10 flex items-center justify-center lg:justify-end text-center lg:text-right text-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

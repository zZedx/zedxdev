"use client";

import { SectionName, useActiveSectionContext } from "@/context/ActionSectionProvider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(
  sectionName: SectionName,
  threshold = 0.75,
): { ref: (node?: Element | null) => void } {
  const { ref, inView } = useInView({
    threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    console.log(sectionName, inView, Date.now() - timeOfLastClick);
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

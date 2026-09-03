'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/lib/fbq';

function PixelRouteTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    trackPageView();
  }, [pathname, searchParams]);

  return null;
}

export default function PixelRouteTracker() {
  return (
    <Suspense fallback={null}>
      <PixelRouteTrackerInner />
    </Suspense>
  );
}
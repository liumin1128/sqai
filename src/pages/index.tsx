import React, { useEffect, useRef } from 'react';
import Iframe from '@/components/Iframe';

export default function HomePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    iframeRef.current?.open('/html/booking.html');
  }, []);

  return (
    <div>
      <Iframe ref={iframeRef} />
    </div>
  );
}

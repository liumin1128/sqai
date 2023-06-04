import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';

export default forwardRef((props, ref) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {}, []);

  useImperativeHandle(ref, () => ({
    getIframe: () => {
      return iframeRef.current;
    },
    open: (url: string) => {
      // @ts-ignore
      iframeRef.current.contentWindow.location.href = url;
    },
  }));

  return (
    <iframe
      ref={iframeRef}
      title="iframe"
      style={{
        width: '100vw',
        height: '100vh',
        border: 'none',
        position: 'fixed',
        zIndex: 0,
        left: 0,
        top: 0,
      }}
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
    />
  );
});

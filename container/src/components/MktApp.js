import { mount } from 'marketing/MktApp';
import React, { useRef, useEffect } from 'react';

export const MktApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return (
    <div ref={ref} />
  )
}

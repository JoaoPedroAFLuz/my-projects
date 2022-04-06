import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export function Project() {
  const params = useParams();
  console.log("🚀 ~ Project ~ params", params)
  const { search } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);
  console.log("🚀 ~ Project ~ queryParams", queryParams.get('teste'))

  return <h1>Project Page</h1>;
}

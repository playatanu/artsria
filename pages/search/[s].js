import React from 'react';
import SearchScreen from '../../lib/screens/SearchScreen';
import { useRouter } from 'next/dist/client/router';

export default function search() {
  const router = useRouter();
  const { s } = router.query;

  return (
    <div>
      <SearchScreen query={s} />
    </div>
  );
}

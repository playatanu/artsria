import React from 'react';
import { useRouter } from 'next/router';
import NftScreen from '../lib/screens/NftScreen';

export default function Nft() {
  const router = useRouter();
  const { token } = router.query;
  return (
    <div>
      <NftScreen token={token} />
    </div>
  );
}

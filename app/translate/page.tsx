import { auth } from '@clerk/nextjs/server';
import React from 'react'

const TranslatePage = () => {
    auth().protect();

    const { userId } = auth();
    
  return (
    <div>TranslatePage: {userId}</div>
  )
}

export default TranslatePage;
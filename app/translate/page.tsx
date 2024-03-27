import { auth } from '@clerk/nextjs/server';
import React from 'react'

const TranslatePage = () => {
    auth().protect();
    
  return (
    <div>TranslatePage</div>
  )
}

export default TranslatePage;
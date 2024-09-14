import React from 'react'
import { auth, signOut } from '../../../../auth';

const page = async () => {
  const session = await auth();
  return (
    <div>
      Settingsss
      {JSON.stringify(session)}
      <form action={async () => {
        "use server";
        await signOut();

      }}></form>
      <button type="submit">
        Sign Out
      </button>
    </div>
  )
}

export default page

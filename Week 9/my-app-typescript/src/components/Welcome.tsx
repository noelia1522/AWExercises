import React, { ReactElement } from 'react'

type WelcomeProps = {
  children: ReactElement //React.ReactNode
}

export const Welcome = (props:WelcomeProps ) => {
  return (
    <div>Welcome</div>
  )
}

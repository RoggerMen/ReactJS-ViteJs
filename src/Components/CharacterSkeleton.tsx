import { Card, CardContent, Skeleton } from '@mui/material'
import React from 'react'

const CharacterSkeleton = () => {
  return (
    <Card>
          <Skeleton variant="rectangular" height={250}
          />
          <CardContent >
            <Skeleton variant='rectangular' height={25} />
          </CardContent>
    </Card>
  )
}

export default CharacterSkeleton

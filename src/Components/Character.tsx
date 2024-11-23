import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

interface CharacterData {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
  }
  

interface CharacterProps {
    data: CharacterData;
  }

const Character: React.FC<CharacterProps> = ({data}) => {
  return (
    <Card >
      <CardMedia component="img"
      image={data.image} alt={data.name}
      title={data.name}
    sx={{height:250, width:250 }}
      />
      <CardContent>
        <Typography 
        variant='h5'
        >
          {data.id}.{data.name}
        </Typography>
      </CardContent>
    </Card>

  )
}

export default Character
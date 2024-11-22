import styled from '@emotion/styled'
import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'

const Product = () => {

  const Img = styled("img") ({
    width: 200,
    height:"100%",
    objectFit: "cover",
    objectPosition: "center",
  })

  return (
    <Paper sx={{
      display: 'flex',
      alignItems: 'center',
      gap:2,
      overflow: 'hidden',
      mt:5,
      pb:2.8
    }} elevation={22}>
        <Img src='https://via.placeholder.com/300' alt='mi imagen con styled' />
        <Box sx={{
          flexGrow: 1,
          display: "grid",
          gap: 2,
        }}>
          <Typography variant="h4">Product Name</Typography>
          <Typography variant="body1">Product Description</Typography>
          <Button variant="contained"> Add card </Button>
        </Box>
        <Box sx={{
          mr:3
        }}
        component="p"
        >$19.99
        </Box>
    </Paper>
  )
}

export default Product
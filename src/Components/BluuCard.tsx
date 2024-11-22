import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
  import React from "react";
  
  const BluuCard = () => {
    return (
      <Card
        sx={{
          mt: 5,
          transition:"0.2s",
          "&:hover":{
              transform: "scale(1.05)",
              boxShadow: "0 0 30px rgba(0,0,0,0.8)"
          }
        }}
      >
  
        <CardActionArea>
  
        <CardMedia
          component="img"
          image="https://via.placeholder.com/1000x200"
          height="200"
          alt="descripción"
        />
  
        <CardContent >
          <Typography variant="h5"> Card Title</Typography>
          <Typography component="p" variant="body2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            sapiente cumque dolore quaerat vero magni voluptatum qui molestiae
            velit, cupiditate eveniet ipsam ipsum explicabo repudiandae laborum
            asperiores, incidunt nulla laboriosam?
          </Typography>
        </CardContent>
  
        </CardActionArea>
  
        <CardActions sx={{
          display: 'grid',
          flexGrow: 1,
          justifyContent: 'center',
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))"
        }}>
          <Button variant="contained" color="success">
            Add
          </Button>
          <Button color="secondary">Delete</Button>
          <Button variant="contained" disabled color="secondary">
            NUEVA BETA
          </Button>
        </CardActions>
        
      </Card>
    );
  };
  
  export default BluuCard;
  
import {
    Card,
    CardContent,
    CardMedia,
    Skeleton,
    Typography,
  } from "@mui/material";
  
  interface CharacterData {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
  }

  interface CharacterProps{
    data: CharacterData;
    loading: boolean;
  }
  
  const CharacterWithSkeleton: React.FC<CharacterProps> =({ data, loading }) => {
    return (
      <Card>
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={250}
            height={250}
          />
        ) : (
          <CardMedia
            image={data.image}
            title="Rick Sanchez"
            sx={{ height: 250, width: 250 }}
          />
        )}
  
        <CardContent>
          {loading ? (
            <Skeleton
              variant="rectangular"
              height={25}
            />
          ) : (
            <Typography variant="h5">{data.name}</Typography>
          )}
        </CardContent>
      </Card>
    );
  }

  export default CharacterWithSkeleton;

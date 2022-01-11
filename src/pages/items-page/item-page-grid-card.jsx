import React from 'react';
import {
  Box,
  Typography,
  CardActions,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MainButton from '../../components/button/main-button';
import stringLenghtClip from '../../helpers/string-lenght-clip';

const ItemPageGridCard = ({
  title, imageURL, description, price,
}) => {
  const clippedDescription = stringLenghtClip(description, 75);
  const clippedTitle = stringLenghtClip(title, 50);
  return (
    <Card sx={{
      width: 300, height: 450, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'flex-end',
    }}
    >
      <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
        {clippedTitle}
      </Typography>
      <CardMedia
        sx={{ p: 2, objectFit: 'cover' }}
        component="img"
        height="150"
        image={imageURL}
        alt="graphicsCard"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1 }}
        >
          { clippedDescription }
        </Typography>
        <Typography variant="h5" color="text.main" sx={{ textAlign: 'center' }}>
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{
          display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'end',
        }}
        >
          <MainButton>
            <Typography>
              Buy
            </Typography>
            <AddShoppingCartIcon />
          </MainButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ItemPageGridCard;

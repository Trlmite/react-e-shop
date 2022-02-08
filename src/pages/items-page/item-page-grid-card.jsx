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
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import Battery50Icon from '@mui/icons-material/Battery50';
import MainButton from '../../components/button/main-button';
import stringLenghtClip from '../../helpers/string-lenght-clip';

const ItemPageGridCard = ({
  title, imageURL, description, price, id, condition, stock,
}) => {
  const clippedDescription = stringLenghtClip(description, 75);
  const clippedTitle = stringLenghtClip(title, 50);

  let conditionCheck = '';

  if (condition === 'new') {
    conditionCheck = <BatteryFullIcon color="secondary" />;
  } else {
    conditionCheck = <Battery50Icon />;
  }

  const handleClick = () => {
    console.log(id);
  };

  return (
    <Card sx={{
      display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'flex-end',
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
        <Typography variant="h5" color="text.main" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {price}
          {conditionCheck}
        </Typography>
        <Typography variant="subtitle2" color="text.main" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Stock:
          {' '}
          {stock}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{
          display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'end',
        }}
        >
          <MainButton
            onClick={handleClick}
          >
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

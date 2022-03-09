/* eslint-disable */ 
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
import store from '../../store/index';
import APIService from '../../services/api-service';

const ItemPageGridCard = ({
  title, imageURL, id, price, condition, stock, manufacturer, memory, lust,
}) => {
  const clippedTitle = stringLenghtClip(title, 50);
  const { user } = store.getState().auth;
  let conditionCheck = '';

  if (condition === 'new') {
    conditionCheck = <BatteryFullIcon color="secondary" />;
  } else {
    conditionCheck = <Battery50Icon />;
  }
  const handleClick = async (itemId, userId) => {
    await APIService.addCartItem(itemId, userId);
  };
  // const navigate = (e) => {
  //   e.stopPropagation();
  //   console.log(`naviguojama i id:${id}`);
  // };

  return (
    <Card
      sx={{
        display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'flex-end',
      }}
      // onClick={navigate}
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
        <Typography color="text.main" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Manufacturer :
          {' '}
          {manufacturer}
        </Typography>
        <Typography color="text.main" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Memory :
          {' '}
          {memory}
        </Typography>
        <Typography color="text.main" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Lust :
          {' '}
          {lust}
        </Typography>
        <Typography color="text.main" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {price}
          {' € '}
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
            onClick={user ? () => handleClick(id, user.id) : null}
            disabled={!user}
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

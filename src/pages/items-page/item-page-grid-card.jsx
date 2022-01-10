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

const ItemPageGridCard = ({
  title, imageURL, description, price,
}) => (
  <Box>
    <Card sx={{ maxWidth: 300, height: 400 }}>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <CardMedia
        sx={{ p: 2 }}
        component="img"
        height="150"
        image={imageURL}
        alt="graphicsCard"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%',
        }}
        >
          <MainButton>
            <Typography>
              Buy
            </Typography>
            <AddShoppingCartIcon />
          </MainButton>
          <Typography variant="h5" color="text.secondary">
            {price}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  </Box>
);

export default ItemPageGridCard;

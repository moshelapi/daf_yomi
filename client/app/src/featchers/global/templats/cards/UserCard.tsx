import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const UserCard = ({ user }: any) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3 }}>
        {user.image && (
          <CardMedia
            component="img"
            height="140"
            image={user.image}
            alt={`${user.firstName} ${user.lastName}`}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.firstName} {user.lastName}
          </Typography>
          <Box color="text.secondary">
            <Typography variant="body2">
              עיר: {user.city}
            </Typography>
            <Typography variant="body2">
              רחוב: {user.street}
            </Typography>
            <Typography variant="body2">
              כותרת: {user.title}
            </Typography>
            <Typography variant="body2">
              זמן: {user.time}
            </Typography>
            <Typography variant="body2">
              גיל: {user.age}
            </Typography>
            <Typography variant="body2">
              מרחק: {user.distance ? `${user.distance} ק"מ` : 'N/A'}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserCard;

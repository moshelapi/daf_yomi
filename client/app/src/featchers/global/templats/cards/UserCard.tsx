import { StyledCardMedia, StyledTypography } from '../../styled-component/styled-global';
import { StyleUserCard, StyledCardContent,StyledBox } from './style.usercard';
import defolteImage from '../../../../assets/images/image.png'







const UserCard = ({ user }:any) => {
  return (
    <StyleUserCard>
          <StyledCardMedia
            src={user.image || defolteImage}
            alt={`${user.firstName} ${user.lastName}`}
          />
      
        <StyledCardContent>
          <StyledTypography font='24px' >
            {user.firstName} {user.lastName}
          </StyledTypography>
          <StyledBox>
            <StyledTypography>עיר: {user.city}</StyledTypography>
            <StyledTypography>רחוב: {user.street}</StyledTypography>
            <StyledTypography>כותרת: {user.title}</StyledTypography>
            <StyledTypography>זמן: {user.time}</StyledTypography>
            <StyledTypography>גיל: {user.age}</StyledTypography>
            <StyledTypography>
              מרחק: {user.distance ? `${user.distance} ק"מ` : 'N/A'}
            </StyledTypography>
          </StyledBox>
        </StyledCardContent>
    </StyleUserCard>
  );
};

export default UserCard;

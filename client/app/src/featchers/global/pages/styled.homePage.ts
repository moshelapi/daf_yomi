import styled from 'styled-components';
export const Container = styled.div`

width: 100vw;
height: auto;
border: 2px solid red;

`

export const HomePageTop = styled.div`
  border: 2px solid blue;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items:  end;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('https://asiasociety.org/sites/default/files/styles/1200w/public/5/53049307_0.JPG');

  /* Responsive adjustments */
  @media (max-width: 1024px) {
    /* Adjustments for tablets */
    height: 70vh;
  }

  @media (max-width: 768px) {
    /* Adjustments for mobile devices */
    height: 60vh;
  }


`;

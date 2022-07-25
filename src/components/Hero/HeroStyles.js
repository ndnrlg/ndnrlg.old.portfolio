import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  padding-right: 15rem;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
`;

export const ProfileImage = styled.img`
  width: 55rem;
  height: 35rem;
  padding-right: 15rem;
  padding-left: 5rem;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
`;



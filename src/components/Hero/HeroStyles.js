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

export const RightSection = styled.div`
  width: 500px;
  height: 800px;
  max-width:50%;
  max-height:50%;
  display: flex;
`;

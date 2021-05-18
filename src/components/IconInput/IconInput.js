import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <>
    
      <Wrapper>
        {label}...
      </Wrapper>
    </>
  );
};


const Wrapper = styled.div`
  display: block;
  color:${COLORS.gray700};
  width: 250px;
  border-radius: 25px;
  border-bottom: 3px solid ${COLORS.black};

`;
export default IconInput;

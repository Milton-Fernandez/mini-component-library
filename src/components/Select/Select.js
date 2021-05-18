import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.select `
  background: ${COLORS.transparentGray15};
  color:${COLORS.gray700};
  border: none;
  padding:10px;
  border-radius: 25px;
`;

export default Select;

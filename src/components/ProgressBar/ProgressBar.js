/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return  (
    <>
        <Progress role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
          

            
            <Bar value={value}>
             
            </Bar>
        
        </Progress>
    </>

  );
};

const Progress = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 100px;
  height: 20px;
  position: relative;
  padding: 3px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  

`;

const Bar = styled.span
`
  display:block;
  height: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: ${COLORS.primary};
  width: ${props => props.value}%;
  position: relative;
  overflow:hidden;
 
`
;

export default ProgressBar;

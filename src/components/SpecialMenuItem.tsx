import React from 'react';
import styled from 'styled-components';
import { ParaCormorant, ParaOpenSans } from '../styles/utils/Utils.styled';

interface SpecialMenuItemProps {
  data: {
    title: string;
    tags: string;
    price: string;
  };
  index: number;
}

export const SpecialMenuItem = (props: SpecialMenuItemProps) => {
  return (
    <SpecialMenuItemContainer>
      <SpecialMenuItemHeading>
        <SpecialMenuItemName>
          <ParaCormorant style={{ color: '#DCCA87' }}>
            {props.data.title}
          </ParaCormorant>
        </SpecialMenuItemName>
        <SpecialMenuItemDivider />
        <SpecialMenuItemPrice>
          <ParaCormorant>{props.data.price}</ParaCormorant>
        </SpecialMenuItemPrice>
      </SpecialMenuItemHeading>
      <SpecialMenuItemTag>
        <ParaOpenSans style={{ color: '#AAA' }}>{props.data.tags}</ParaOpenSans>
      </SpecialMenuItemTag>
    </SpecialMenuItemContainer>
  );
};

const SpecialMenuItemContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
`;

const SpecialMenuItemHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SpecialMenuItemName = styled.div`
  flex: 1;
`;

const SpecialMenuItemPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const SpecialMenuItemDivider = styled.div`
  width: 90px;
  height: 1px;
  background: var(--color-golden);
  margin: 0 1rem;
`;

const SpecialMenuItemTag = styled.div`
  width: 100%;
  margin-top: 0.2rem;
`;

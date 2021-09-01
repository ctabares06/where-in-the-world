import styled, { css } from 'styled-components';

export const withShadow = css`
  box-shadow: 0px 3px 5px 1px rgba(152,152,152,0.2);
`
export const PageStyles = styled.div`
display: grid;	
grid-template-columns: 1fr;
grid-template-rows: [filters-start] 20% [filters-end countries-start] auto [countries-end];
row-gap: 50px;
align-items: center;
& .filters {
  display: flex;
  justify-content: space-between;
  margin: 0 2.5%;
}
`
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CategoriesDiv = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 45, 57, 1) 0%,
    rgba(0, 110, 139, 1) 11%
  );
  padding-top: 7px;
  height: 25px;
  display: flex;
  align-items: flex-end;
`;

const CategoryButton = styled(NavLink)`
  padding: 0 10px;
  margin: 0 5px;
  color: #fafafa;
  background: #1b94b4;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child {
    margin-left: 10px;
  }
  &.current-cat {
    color: #333;
    background: #fafafa;
  }
`;

const CategoriesDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 10px;
  margin-left: auto;
  margin-right: 50px;
  & p {
    color: #8ee0f6;
    margin-right: 10px;
    font-size: 12px;
    text-shadow: 0 1px 0 #333;
  }
  & select {
    background: #fafafa;
    font-size: 12px;
    margin-bottom: 3px;
  }
`;

const CategoriesBar = () => {
  return (
    <CategoriesDiv>
      <CategoryButton to="/" activeClassName="current-cat">
        Inicio
      </CategoryButton>
      <CategoryButton to="/novatos" activeClassName="current-cat">
        Novatos
      </CategoryButton>
      <CategoryButton to="/destacados" activeClassName="current-cat">
        Destacados
      </CategoryButton>
      <CategoryButton to="/buscador" activeClassName="current-cat">
        Buscador
      </CategoryButton>
      <CategoriesDropdown>
        <p>Categorías:</p>
        <select defaultValue="Ver Todas">
          <option>Seleccionar categoría</option>
          <option>Ver Todas</option>
          <option>-----</option>
          <option>Animaciones</option>
          <option>Apuntes y Monografías</option>
        </select>
      </CategoriesDropdown>
    </CategoriesDiv>
  );
};

export default CategoriesBar;

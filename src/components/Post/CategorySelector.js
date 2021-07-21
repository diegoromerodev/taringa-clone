import React from "react";
import { SelectCategory } from "./PostAccents";

const CategorySelector = () => {
  return (
    <SelectCategory id="post-category" multiple="9">
      <option style={{ fontWeight: "bold" }} value="">
        Seleccione una categoría
      </option>
      <option value="animaciones" className="categoriaPost animaciones">
        Animaciones
      </option>
      <option
        value="apuntes-y-monografias"
        className="categoriaPost apuntes-y-monografias"
      >
        Apuntes y Monografías
      </option>
      <option value="arte" className="categoriaPost arte">
        Arte
      </option>
      <option value="autos-motos" className="categoriaPost autos-motos">
        Autos y Motos
      </option>
      <option value="celulares" className="categoriaPost celulares">
        Celulares
      </option>
      <option
        value="ciencia-educacion"
        className="categoriaPost ciencia-educacion"
      >
        Ciencia y Educación
      </option>
      <option value="comics" className="categoriaPost comics">
        Comics e Historietas
      </option>
      <option value="humor" className="categoriaPost humor">
        Humor
      </option>
      <option value="imagenes" className="categoriaPost imagenes">
        Imágenes
      </option>
    </SelectCategory>
  );
};

export default CategorySelector;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import categ1 from "../multimedia/categ1.jpeg";
import categ2 from "../multimedia/categ2.jpeg";
import categ3 from "../multimedia/categ3.jpeg";
import categ4 from "../multimedia/categ4.jpeg";
import categ5 from "../multimedia/categ5.jpeg";
import categ6 from "../multimedia/categ6.jpeg";
import categ7 from "../multimedia/categ7.jpeg";
import perfil1 from "../multimedia/perfil1.jpeg";
import perfil2 from "../multimedia/perfil2.jpeg";
import perfil3 from "../multimedia/perfil3.jpeg";
import perfil4 from "../multimedia/perfil4.jpeg";
import perfil5 from "../multimedia/perfil5.jpeg";
import perfil6 from "../multimedia/perfil6.jpeg";
import perfil7 from "../multimedia/perfil7.jpeg";
import perfil8 from "../multimedia/perfil8.jpeg";
import perfil9 from "../multimedia/perfil9.jpeg";
import perfil10 from "../multimedia/perfil10.jpeg";
import perfil11 from "../multimedia/perfil11.jpeg";
import perfil12 from "../multimedia/perfil12.jpeg";
import perfil13 from "../multimedia/perfil13.jpeg";
import perfil14 from "../multimedia/perfil14.jpeg";
import perfil15 from "../multimedia/perfil15.jpeg";
import plano from "../multimedia/plano.jpeg";

export default function Home() {
  const [alerta, setAlerta] = useState(false);
  const [formData, setFormData] = useState("");
  const [medidas, setMedidas] = useState(["medida 1"]);
  const [loading, setLoading] = useState(false);
  const categorias = [
    { nombre: "Rascadores", imagen: categ1 },
    { nombre: "Sellos de vástago", imagen: categ2 },
    { nombre: "Sellos de pistón", imagen: categ3 },
    { nombre: "Sellos rotativos", imagen: categ4 },
    { nombre: "Junta plana", imagen: categ5 },
    { nombre: "Anillos guía", imagen: categ6 },
    { nombre: "Anillos de apoyo", imagen: categ7 },
  ];
  const perfilesPorCategoria = {
    Rascadores: [
      {
        nombre: "Perfil 1",
        plano: plano,
        imagenPerfil: perfil1,
      },
      {
        nombre: "Perfil 2",
        plano: plano,
        imagenPerfil: perfil2,
      },
      {
        nombre: "Perfil 3",
        plano: plano,
        imagenPerfil: perfil3,
      },
      {
        nombre: "Perfil 4",
        plano: plano,
        imagenPerfil: perfil4,
      },
      {
        nombre: "Perfil 5",
        plano: plano,
        imagenPerfil: perfil5,
      },
      {
        nombre: "Perfil 6",
        plano: plano,
        imagenPerfil: perfil6,
      },
      {
        nombre: "Perfil 7",
        plano: plano,
        imagenPerfil: perfil7,
      },
      {
        nombre: "Perfil 8",
        plano: plano,
        imagenPerfil: perfil8,
      },
      {
        nombre: "Perfil 9",
        plano: plano,
        imagenPerfil: perfil9,
      },
      {
        nombre: "Perfil 10",
        plano: plano,
        imagenPerfil: perfil10,
      },
      {
        nombre: "Perfil 11",
        plano: plano,
        imagenPerfil: perfil11,
      },
      {
        nombre: "Perfil 12",
        plano: plano,
        imagenPerfil: perfil12,
      },
      {
        nombre: "Perfil 13",
        plano: plano,
        imagenPerfil: perfil13,
      },
      {
        nombre: "Perfil 14",
        plano: plano,
        imagenPerfil: perfil14,
      },
      {
        nombre: "Perfil 15",
        plano: plano,
        imagenPerfil: perfil15,
      },
    ],
    "Sellos de vástago": [
      {
        nombre: "Perfil 1",
        plano: plano,
        imagenPerfil: perfil1,
      },
      {
        nombre: "Perfil 2",
        plano: plano,
        imagenPerfil: perfil2,
      },
      {
        nombre: "Perfil 3",
        plano: plano,
        imagenPerfil: perfil3,
      },
      {
        nombre: "Perfil 4",
        plano: plano,
        imagenPerfil: perfil4,
      },
      {
        nombre: "Perfil 5",
        plano: plano,
        imagenPerfil: perfil5,
      },
      {
        nombre: "Perfil 6",
        plano: plano,
        imagenPerfil: perfil6,
      },
      {
        nombre: "Perfil 7",
        plano: plano,
        imagenPerfil: perfil7,
      },
      {
        nombre: "Perfil 8",
        plano: plano,
        imagenPerfil: perfil8,
      },
      {
        nombre: "Perfil 9",
        plano: plano,
        imagenPerfil: perfil9,
      },
      {
        nombre: "Perfil 10",
        plano: plano,
        imagenPerfil: perfil10,
      },
      {
        nombre: "Perfil 11",
        plano: plano,
        imagenPerfil: perfil11,
      },
      {
        nombre: "Perfil 12",
        plano: plano,
        imagenPerfil: perfil12,
      },
      {
        nombre: "Perfil 13",
        plano: plano,
        imagenPerfil: perfil13,
      },
      {
        nombre: "Perfil 14",
        plano: plano,
        imagenPerfil: perfil14,
      },
      {
        nombre: "Perfil 15",
        plano: plano,
        imagenPerfil: perfil15,
      },
    ],
    "Sellos de pistón": [
      {
        nombre: "Perfil 1",
        plano: plano,
        imagenPerfil: perfil1,
      },
      {
        nombre: "Perfil 2",
        plano: plano,
        imagenPerfil: perfil2,
      },
      {
        nombre: "Perfil 3",
        plano: plano,
        imagenPerfil: perfil3,
      },
      {
        nombre: "Perfil 4",
        plano: plano,
        imagenPerfil: perfil4,
      },
      {
        nombre: "Perfil 5",
        plano: plano,
        imagenPerfil: perfil5,
      },
      {
        nombre: "Perfil 6",
        plano: plano,
        imagenPerfil: perfil6,
      },
      {
        nombre: "Perfil 7",
        plano: plano,
        imagenPerfil: perfil7,
      },
      {
        nombre: "Perfil 8",
        plano: plano,
        imagenPerfil: perfil8,
      },
      {
        nombre: "Perfil 9",
        plano: plano,
        imagenPerfil: perfil9,
      },
      {
        nombre: "Perfil 10",
        plano: plano,
        imagenPerfil: perfil10,
      },
      {
        nombre: "Perfil 11",
        plano: plano,
        imagenPerfil: perfil11,
      },
      {
        nombre: "Perfil 12",
        plano: plano,
        imagenPerfil: perfil12,
      },
      {
        nombre: "Perfil 13",
        plano: plano,
        imagenPerfil: perfil13,
      },
      {
        nombre: "Perfil 14",
        plano: plano,
        imagenPerfil: perfil14,
      },
      {
        nombre: "Perfil 15",
        plano: plano,
        imagenPerfil: perfil15,
      },
    ],
    "Sellos rotativos": [
      {
        nombre: "Perfil 1",
        plano: plano,
        imagenPerfil: perfil1,
      },
      {
        nombre: "Perfil 2",
        plano: plano,
        imagenPerfil: perfil2,
      },
      {
        nombre: "Perfil 3",
        plano: plano,
        imagenPerfil: perfil3,
      },
      {
        nombre: "Perfil 4",
        plano: plano,
        imagenPerfil: perfil4,
      },
      {
        nombre: "Perfil 5",
        plano: plano,
        imagenPerfil: perfil5,
      },
      {
        nombre: "Perfil 6",
        plano: plano,
        imagenPerfil: perfil6,
      },
      {
        nombre: "Perfil 7",
        plano: plano,
        imagenPerfil: perfil7,
      },
      {
        nombre: "Perfil 8",
        plano: plano,
        imagenPerfil: perfil8,
      },
      {
        nombre: "Perfil 9",
        plano: plano,
        imagenPerfil: perfil9,
      },
      {
        nombre: "Perfil 10",
        plano: plano,
        imagenPerfil: perfil10,
      },
      {
        nombre: "Perfil 11",
        plano: plano,
        imagenPerfil: perfil11,
      },
      {
        nombre: "Perfil 12",
        plano: plano,
        imagenPerfil: perfil12,
      },
      {
        nombre: "Perfil 13",
        plano: plano,
        imagenPerfil: perfil13,
      },
      {
        nombre: "Perfil 14",
        plano: plano,
        imagenPerfil: perfil14,
      },
      {
        nombre: "Perfil 15",
        plano: plano,
        imagenPerfil: perfil15,
      },
    ],
    "Junta plana": [
      {
        nombre: "Perfil 1",
        plano: plano,
        imagenPerfil: perfil1,
      },
      {
        nombre: "Perfil 2",
        plano: plano,
        imagenPerfil: perfil2,
      },
      {
        nombre: "Perfil 3",
        plano: plano,
        imagenPerfil: perfil3,
      },
      {
        nombre: "Perfil 4",
        plano: plano,
        imagenPerfil: perfil4,
      },
      {
        nombre: "Perfil 5",
        plano: plano,
        imagenPerfil: perfil5,
      },
      {
        nombre: "Perfil 6",
        plano: plano,
        imagenPerfil: perfil6,
      },
      {
        nombre: "Perfil 7",
        plano: plano,
        imagenPerfil: perfil7,
      },
      {
        nombre: "Perfil 8",
        plano: plano,
        imagenPerfil: perfil8,
      },
      {
        nombre: "Perfil 9",
        plano: plano,
        imagenPerfil: perfil9,
      },
      {
        nombre: "Perfil 10",
        plano: plano,
        imagenPerfil: perfil10,
      },
      {
        nombre: "Perfil 11",
        plano: plano,
        imagenPerfil: perfil11,
      },
      {
        nombre: "Perfil 12",
        plano: plano,
        imagenPerfil: perfil12,
      },
      {
        nombre: "Perfil 13",
        plano: plano,
        imagenPerfil: perfil13,
      },
      {
        nombre: "Perfil 14",
        plano: plano,
        imagenPerfil: perfil14,
      },
      {
        nombre: "Perfil 15",
        plano: plano,
        imagenPerfil: perfil15,
      },
    ],
    "Anillos guía": [
      {
        nombre: "Perfil 1",
        plano: plano,
        imagenPerfil: perfil1,
      },
      {
        nombre: "Perfil 2",
        plano: plano,
        imagenPerfil: perfil2,
      },
      {
        nombre: "Perfil 3",
        plano: plano,
        imagenPerfil: perfil3,
      },
      {
        nombre: "Perfil 4",
        plano: plano,
        imagenPerfil: perfil4,
      },
      {
        nombre: "Perfil 5",
        plano: plano,
        imagenPerfil: perfil5,
      },
      {
        nombre: "Perfil 6",
        plano: plano,
        imagenPerfil: perfil6,
      },
      {
        nombre: "Perfil 7",
        plano: plano,
        imagenPerfil: perfil7,
      },
      {
        nombre: "Perfil 8",
        plano: plano,
        imagenPerfil: perfil8,
      },
      {
        nombre: "Perfil 9",
        plano: plano,
        imagenPerfil: perfil9,
      },
      {
        nombre: "Perfil 10",
        plano: plano,
        imagenPerfil: perfil10,
      },
      {
        nombre: "Perfil 11",
        plano: plano,
        imagenPerfil: perfil11,
      },
      {
        nombre: "Perfil 12",
        plano: plano,
        imagenPerfil: perfil12,
      },
      {
        nombre: "Perfil 13",
        plano: plano,
        imagenPerfil: perfil13,
      },
      {
        nombre: "Perfil 14",
        plano: plano,
        imagenPerfil: perfil14,
      },
      {
        nombre: "Perfil 15",
        plano: plano,
        imagenPerfil: perfil15,
      },
    ],
    "Anillos de apoyo": [
      {
        nombre: "Perfil 1",
        plano: plano,
        imagenPerfil: perfil1,
      },
      {
        nombre: "Perfil 2",
        plano: plano,
        imagenPerfil: perfil2,
      },
      {
        nombre: "Perfil 3",
        plano: plano,
        imagenPerfil: perfil3,
      },
      {
        nombre: "Perfil 4",
        plano: plano,
        imagenPerfil: perfil4,
      },
      {
        nombre: "Perfil 5",
        plano: plano,
        imagenPerfil: perfil5,
      },
      {
        nombre: "Perfil 6",
        plano: plano,
        imagenPerfil: perfil6,
      },
      {
        nombre: "Perfil 7",
        plano: plano,
        imagenPerfil: perfil7,
      },
      {
        nombre: "Perfil 8",
        plano: plano,
        imagenPerfil: perfil8,
      },
      {
        nombre: "Perfil 9",
        plano: plano,
        imagenPerfil: perfil9,
      },
      {
        nombre: "Perfil 10",
        plano: plano,
        imagenPerfil: perfil10,
      },
      {
        nombre: "Perfil 11",
        plano: plano,
        imagenPerfil: perfil11,
      },
      {
        nombre: "Perfil 12",
        plano: plano,
        imagenPerfil: perfil12,
      },
      {
        nombre: "Perfil 13",
        plano: plano,
        imagenPerfil: perfil13,
      },
      {
        nombre: "Perfil 14",
        plano: plano,
        imagenPerfil: perfil14,
      },
      {
        nombre: "Perfil 15",
        plano: plano,
        imagenPerfil: perfil15,
      },
    ],
  };
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [perfilSeleccionado, setPerfilSeleccionado] = useState(null);
  const [formularioVisible, setFormularioVisible] = useState(false);

  useEffect(() => {
    if (alerta) {
      const timeout = setTimeout(() => {
        setAlerta(false);
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [alerta]);

  const handleAddMedida = () => {
    setMedidas([...medidas, `medida ${medidas.length + 1}`]);
  };

  const handleRemoveMedida = () => {
    if (medidas.length > 0) {
      const updatedMedidas = medidas.slice(0, -1);
      setMedidas(updatedMedidas);
    }
  };

  const handleClickCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
    setPerfilSeleccionado(null);
    setFormularioVisible(false);
  };

  const handleClickPerfil = (perfil) => {
    setPerfilSeleccionado(perfil);
    setFormularioVisible(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Mostrar el loader
    const form = event.target;
    const formDataToSend = new FormData(form);
    formDataToSend.append("categoria", categoriaSeleccionada);
    formDataToSend.append("perfil", perfilSeleccionado.nombre);
    const imageResponse = await fetch(perfilSeleccionado.plano);
    const imageBlob = await imageResponse.blob();
    formDataToSend.append("plano", imageBlob, "plano.jpeg");

    try {
      const response = await axios.post(form.action, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setAlerta(true);
        setFormData("");
      } else {
        console.error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error al enviar el formulario", error);
    } finally {
      setLoading(false); // Ocultar el loader después del envío
    }
  };

  return (
    <div className="homeContainer">
      <div className="categorias">
        <p className="titulo">Apicación de sellos</p>
        <div className="categoria-row">
          {categorias &&
            categorias.map((categoria) => (
              <div
                key={categoria.nombre}
                className={`categoria ${
                  categoriaSeleccionada === categoria.nombre
                    ? "seleccionada"
                    : ""
                }`}
                onClick={() => handleClickCategoria(categoria.nombre)}
              >
                {/* {categoria.nombre} */}
                <img src={categoria.imagen} alt={categoria.nombre} />
              </div>
            ))}
        </div>
      </div>
      {categoriaSeleccionada && (
        <>
          <p className="titulo">
            Categoría seleccionada: {categoriaSeleccionada}
          </p>
          <p className="titulo">Tipo de perfil</p>
          <div className="perfil-grid">
            {perfilesPorCategoria[categoriaSeleccionada].map((perfil) => (
              <div
                key={perfil.nombre}
                className="perfil"
                onClick={() => handleClickPerfil(perfil)}
              >
                {/* {perfil.nombre} */}
                <img src={perfil.imagenPerfil} alt={perfil.nombre} />
              </div>
            ))}
          </div>
        </>
      )}
      {perfilSeleccionado && (
        <>
          <p className="titulo">Medidas para {perfilSeleccionado.nombre}</p>
          <div className="plano-form">
            <div className="imagen-plano">
              <img
                src={perfilSeleccionado.plano}
                alt={perfilSeleccionado.nombre}
              />
            </div>
            <div className="formulario">
              <div className="textForm">
                <p className="titulo">
                  Escribe las medidas en orden descendiente
                </p>
                <p className="descr">
                  Cada campo de medida se relaciona directamente con una
                  dimensión específica en el perfil, comenzando desde la medida
                  que está más arriba y avanzando hacia abajo.
                </p>
                <form
                  id="form"
                  action="https://formsubmit.co/lautiquiroga10@gmail.com"
                  method="POST"
                  name="medidas-camsa"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="_subject" value="Medidas CAMSA" />
                  <input type="hidden" name="_captcha" value="false" />
                  {/* Agregar campos ocultos para la categoría y el perfil */}
                  <input
                    type="hidden"
                    name="categoria"
                    value={categoriaSeleccionada}
                  />
                  <input
                    type="hidden"
                    name="perfil"
                    value={perfilSeleccionado.nombre}
                  />

                  <div className="botones-medida">
                    <button type="button" onClick={handleRemoveMedida}>
                      -
                    </button>
                    <div className="cantMedidas">Cantidad de medidas</div>

                    <button type="button" onClick={handleAddMedida}>
                      +
                    </button>
                  </div>

                  {medidas.map((medida, index) => (
                    <input
                      key={index}
                      type="number"
                      name={`medida-${index + 1}`}
                      placeholder={`${medida} (en milímetros)`}
                      value={formData[`medida-${index + 1}`] || ""}
                      onChange={handleInputChange}
                      required
                    />
                  ))}

                  <button type="submit" className="submit">
                    Enviar
                  </button>
                  {alerta && (
                    <div className="alertaContainer">
                      <p>Enviado con éxito</p>
                    </div>
                  )}
                </form>
              </div>
              {loading && (
                <div className="loader-container">
                  <ClipLoader size={50} color={"#123abc"} loading={loading} />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

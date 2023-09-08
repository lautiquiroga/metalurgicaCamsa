import React, { useState, useEffect } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

// Imágenes de las categorías
import categ1 from "../multimedia/rascadores/categ1.jpeg";
import categ2 from "../multimedia/sellos de vastago/categ2.jpeg";
import categ3 from "../multimedia/sellos de piston/categ3.jpeg";
import categ4 from "../multimedia/sellos rotativos/categ4.jpeg";
import categ5 from "../multimedia/junta plana/categ5.jpeg";
import categ6 from "../multimedia/anillos guia/categ6.jpeg";
import categ7 from "../multimedia/anillos de apoyo/categ7.jpeg";

// Imágenes de los planos
import plano1 from "../multimedia/planos/plano1.jpeg";
import plano2 from "../multimedia/planos/plano2.png";
import plano3 from "../multimedia/planos/plano3.png";
import plano4 from "../multimedia/planos/plano4.png";
import plano5 from "../multimedia/planos/plano5.png";
import plano6 from "../multimedia/planos/plano6.png";
import plano7 from "../multimedia/planos/plano7.png";
import plano8 from "../multimedia/planos/plano8.png";
import plano9 from "../multimedia/planos/plano9.png";
import plano10 from "../multimedia/planos/plano10.png";
import plano11 from "../multimedia/planos/plano11.png";
import plano12 from "../multimedia/planos/plano12.png";
import plano13 from "../multimedia/planos/plano13.png";

// Imágenes de los perfiles
// Rascadores
import DA101 from "../multimedia/rascadores/DA101.jpeg";
import DA101A from "../multimedia/rascadores/DA101A.jpeg";
import DA102 from "../multimedia/rascadores/DA102.jpeg";
import DA102A from "../multimedia/rascadores/DA102A.jpeg";
import DA103 from "../multimedia/rascadores/DA103.jpeg";
import DA104 from "../multimedia/rascadores/DA104.jpeg";
import DA105 from "../multimedia/rascadores/DA105.jpeg";
import DA106 from "../multimedia/rascadores/DA106.jpeg";
import DA107 from "../multimedia/rascadores/DA107.jpeg";
import DA108 from "../multimedia/rascadores/DA108.jpeg";
import DA109 from "../multimedia/rascadores/DA109.jpeg";
import DA109B from "../multimedia/rascadores/DA109B.jpeg";
import DA109C from "../multimedia/rascadores/DA109C.jpeg";
import DA211 from "../multimedia/rascadores/DA211.jpeg";
import DA212 from "../multimedia/rascadores/DA212.jpeg";
import DA113 from "../multimedia/rascadores/da113.jpg";
import DA213 from "../multimedia/rascadores/da213.jpg";
import DA114 from "../multimedia/rascadores/da114.jpg";
import DA115 from "../multimedia/rascadores/da115.jpg";
import DA116 from "../multimedia/rascadores/da116.jpg";
import DA117 from "../multimedia/rascadores/da117.jpg";
import DA118 from "../multimedia/rascadores/da118.jpg";
import DA119 from "../multimedia/rascadores/da119.jpg";

// Anillos guía
import df101 from "../multimedia/anillos guia/df101.jpg";
import df102 from "../multimedia/anillos guia/df102.jpg";
import df103 from "../multimedia/anillos guia/df103.jpg";
import df104 from "../multimedia/anillos guia/df104.jpg";
import df105 from "../multimedia/anillos guia/df105.jpg";
import df106 from "../multimedia/anillos guia/df106.jpg";
import df107 from "../multimedia/anillos guia/df107.jpg";
import df108 from "../multimedia/anillos guia/df108.jpg";
import dfb102 from "../multimedia/anillos guia/dfb102.jpg";

// Anillos de apoyo
import dst108 from "../multimedia/anillos de apoyo/dst108.jpg";
import dst109 from "../multimedia/anillos de apoyo/dst109.jpg";
import dst110 from "../multimedia/anillos de apoyo/dst110.jpg";
import dst111 from "../multimedia/anillos de apoyo/dst111.jpg";
import dst112 from "../multimedia/anillos de apoyo/dst112.jpg";
import dst113 from "../multimedia/anillos de apoyo/dst113.jpg";
import dst114 from "../multimedia/anillos de apoyo/dst114.jpg";

export default function Home() {
  const [alerta, setAlerta] = useState(false);
  const [formData, setFormData] = useState("");
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
        nombre: "DA101",
        plano: plano1,
        planoNombre: "plano1",
        imagenPerfil: DA101,
      },
      {
        nombre: "DA101A",
        plano: plano1,
        planoNombre: "plano1",
        imagenPerfil: DA101A,
      },
      {
        nombre: "DA102",
        plano: plano2,
        planoNombre: "plano2",
        imagenPerfil: DA102,
      },
      {
        nombre: "DA102A",
        plano: plano2,
        planoNombre: "plano2",
        imagenPerfil: DA102A,
      },
      {
        nombre: "DA103",
        plano: plano3,
        planoNombre: "plano3",
        imagenPerfil: DA103,
      },
      {
        nombre: "DA104",
        plano: plano1,
        planoNombre: "plano1",
        imagenPerfil: DA104,
      },
      {
        nombre: "DA105",
        plano: plano2,
        planoNombre: "plano2",
        imagenPerfil: DA105,
      },
      {
        nombre: "DA106",
        plano: plano3,
        planoNombre: "plano3",
        imagenPerfil: DA106,
      },
      {
        nombre: "DA107",
        plano: plano4,
        planoNombre: "plano4",
        imagenPerfil: DA107,
      },
      {
        nombre: "DA108",
        plano: plano5,
        planoNombre: "plano5",
        imagenPerfil: DA108,
      },
      {
        nombre: "DA109",
        imagenPerfil: DA109,
      },
      {
        nombre: "DA109B",
        imagenPerfil: DA109B,
      },
      {
        nombre: "DA109C",
        imagenPerfil: DA109C,
      },
      {
        nombre: "DA211",
        plano: plano6,
        planoNombre: "plano6",
        imagenPerfil: DA211,
      },
      {
        nombre: "DA212",
        imagenPerfil: DA212,
      },
      {
        nombre: "DA113",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DA113,
      },
      {
        nombre: "DA213",
        imagenPerfil: DA213,
      },
      {
        nombre: "DA114",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DA114,
      },
      {
        nombre: "DA115",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DA115,
      },
      {
        nombre: "DA116",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DA116,
      },
      {
        nombre: "DA117",
        imagenPerfil: DA117,
      },
      {
        nombre: "DA118",
        imagenPerfil: DA118,
      },
      {
        nombre: "DA119",
        imagenPerfil: DA119,
      },
    ],
    /* "Sellos de vástago": [
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
        nombre: "DA103",
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
        nombre: "DA103",
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
        nombre: "DA103",
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
    ],*/
    "Anillos guía": [
      {
        nombre: "DF101",
        plano: plano11,
        planoNombre: "plano11",
        imagenPerfil: df101,
      },
      {
        nombre: "DF102",
        plano: plano11,
        planoNombre: "plano11",
        imagenPerfil: df102,
      },
      {
        nombre: "DF103",
        imagenPerfil: df103,
      },
      {
        nombre: "DF104",
        imagenPerfil: df104,
      },
      {
        nombre: "DF105",
        imagenPerfil: df105,
      },
      {
        nombre: "DF106",
        imagenPerfil: df106,
      },
      {
        nombre: "DF107",
        imagenPerfil: df107,
      },
      {
        nombre: "DF108",
        imagenPerfil: df108,
      },
      {
        nombre: "DFB102",
        imagenPerfil: dfb102,
      },
    ],
    "Anillos de apoyo": [
      {
        nombre: "DST108",
        plano: plano12,
        planoNombre: "plano12",
        imagenPerfil: dst108,
      },
      {
        nombre: "DST109",
        plano: plano12,
        planoNombre: "plano12",
        imagenPerfil: dst109,
      },
      {
        nombre: "DST110",
        plano: plano12,
        planoNombre: "plano12",
        imagenPerfil: dst110,
      },
      {
        nombre: "DST111",
        plano: plano12,
        planoNombre: "plano12",
        imagenPerfil: dst111,
      },
      {
        nombre: "DST112",
        plano: plano12,
        planoNombre: "plano12",
        imagenPerfil: dst112,
      },
      {
        nombre: "DST113",
        plano: plano12,
        planoNombre: "plano12",
        imagenPerfil: dst113,
      },
      {
        nombre: "DST114",
        imagenPerfil: dst114,
      },
    ],
  };
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [perfilSeleccionado, setPerfilSeleccionado] = useState(null);

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

  const handleClickCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
    setPerfilSeleccionado(null);
  };

  const handleClickPerfil = (perfil) => {
    setPerfilSeleccionado(perfil);
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
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
          {perfilSeleccionado.plano ? (
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
                  {alerta && (
                    <div className="alertaContainer">
                      <p>Enviado con éxito</p>
                    </div>
                  )}
                  <div className="textForm">
                    <p className="titulo">
                      Escribe las medidas en orden descendiente
                    </p>
                    <p className="descr">
                      Cada campo de medida se relaciona directamente con una
                      dimensión específica en el perfil, comenzando desde la
                      medida que está más arriba y avanzando hacia abajo.
                    </p>
                    <form
                      id="form"
                      action="https://formsubmit.co/lautiquiroga10@gmail.com"
                      method="POST"
                      name="medidas-camsa"
                      onSubmit={handleSubmit}
                    >
                      <input
                        type="hidden"
                        name="_subject"
                        value="Medidas CAMSA"
                      />
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

                      {perfilSeleccionado.planoNombre === "plano3" ||
                      perfilSeleccionado.planoNombre === "plano7" ||
                      perfilSeleccionado.planoNombre === "plano8" ||
                      perfilSeleccionado.planoNombre === "plano9" ||
                      perfilSeleccionado.planoNombre === "plano11" ||
                      perfilSeleccionado.planoNombre === "plano12" ? (
                        <>
                          {Array.from({ length: 3 }, (_, index) => (
                            <input
                              key={index}
                              type="number"
                              name={`medida-${index + 1}`}
                              placeholder={`Medida ${
                                index + 1
                              } (en milímetros)`}
                              value={formData[`medida-${index + 1}`] || ""}
                              onChange={handleInputChange}
                              required
                            />
                          ))}
                        </>
                      ) : perfilSeleccionado.planoNombre === "plano1" ||
                        perfilSeleccionado.planoNombre === "plano2" ||
                        perfilSeleccionado.planoNombre === "plano4" ||
                        perfilSeleccionado.planoNombre === "plano5" ? (
                        <>
                          {Array.from({ length: 4 }, (_, index) => (
                            <input
                              key={index}
                              type="number"
                              name={`medida-${index + 1}`}
                              placeholder={`Medida ${
                                index + 1
                              } (en milímetros)`}
                              value={formData[`medida-${index + 1}`] || ""}
                              onChange={handleInputChange}
                              required
                            />
                          ))}
                        </>
                      ) : perfilSeleccionado.planoNombre === "plano6" ? (
                        <>
                          {Array.from({ length: 5 }, (_, index) => (
                            <input
                              key={index}
                              type="number"
                              name={`medida-${index + 1}`}
                              placeholder={`Medida ${
                                index + 1
                              } (en milímetros)`}
                              value={formData[`medida-${index + 1}`] || ""}
                              onChange={handleInputChange}
                              required
                            />
                          ))}
                        </>
                      ) : (
                        <>
                          {Array.from({ length: 2 }, (_, index) => (
                            <input
                              key={index}
                              type="number"
                              name={`medida-${index + 1}`}
                              placeholder={`Medida ${
                                index + 1
                              } (en milímetros)`}
                              value={formData[`medida-${index + 1}`] || ""}
                              onChange={handleInputChange}
                              required
                            />
                          ))}
                        </>
                      )}

                      <button type="submit" className="submit">
                        Enviar
                      </button>
                    </form>
                  </div>
                  {loading && (
                    <div className="loader-container">
                      <ClipLoader
                        size={50}
                        color={"#123abc"}
                        loading={loading}
                      />
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="titulo">
              Contactáte con nosotros para recibir más información sobre el
              perfil "{perfilSeleccionado.nombre}" en menos de 24hs.
            </div>
          )}
        </>
      )}
    </div>
  );
}

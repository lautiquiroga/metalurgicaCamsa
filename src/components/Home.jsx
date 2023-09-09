import React, { useState, useEffect } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

// Imágenes de las categorías
import categ1 from "../multimedia/rascadores/categ1.png";
import categ2 from "../multimedia/sellos de vastago/categ2.png";
import categ3 from "../multimedia/sellos de piston/categ3.png";
import categ4 from "../multimedia/sellos rotativos/categ4.png";
import categ5 from "../multimedia/junta plana/categ5.png";
import categ6 from "../multimedia/anillos guia/categ6.png";
import categ7 from "../multimedia/anillos de apoyo/categ7.png";

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
import DA101 from "../multimedia/rascadores/da101.jpg";
import DA101A from "../multimedia/rascadores/da101a.jpg";
import DA102 from "../multimedia/rascadores/da102.jpg";
import DA102A from "../multimedia/rascadores/da102a.jpg";
import DA103 from "../multimedia/rascadores/da103.jpg";
import DA104 from "../multimedia/rascadores/da104.jpg";
import DA105 from "../multimedia/rascadores/da105.jpg";
import DA106 from "../multimedia/rascadores/da106.jpg";
import DA107 from "../multimedia/rascadores/da107.jpg";
import DA108 from "../multimedia/rascadores/da108.jpg";
import DA109 from "../multimedia/rascadores/da109.jpg";
import DA109B from "../multimedia/rascadores/da109b.jpg";
import DA109C from "../multimedia/rascadores/da109c.jpg";
import DA211 from "../multimedia/rascadores/da211.jpg";
import DA212 from "../multimedia/rascadores/da212.jpg";
import DA113 from "../multimedia/rascadores/da113.jpg";
import DA213 from "../multimedia/rascadores/da213.jpg";
import DA114 from "../multimedia/rascadores/da114.jpg";
import DA115 from "../multimedia/rascadores/da115.jpg";
import DA116 from "../multimedia/rascadores/da116.jpg";
import DA117 from "../multimedia/rascadores/da117.jpg";
import DA118 from "../multimedia/rascadores/da118.jpg";
import DA119 from "../multimedia/rascadores/da119.jpg";

// Sellos de vástago
import DS101 from "../multimedia/sellos de vastago/ds101.jpg";
import DS102 from "../multimedia/sellos de vastago/ds102.jpg";
import DS102R from "../multimedia/sellos de vastago/ds102r.jpg";
import DS103 from "../multimedia/sellos de vastago/ds103.jpg";
import DS104 from "../multimedia/sellos de vastago/ds104.jpg";
import DS104R from "../multimedia/sellos de vastago/ds104r.jpg";
import DS105 from "../multimedia/sellos de vastago/ds105.jpg";
import DS205 from "../multimedia/sellos de vastago/ds205.jpg";
import DS106 from "../multimedia/sellos de vastago/ds106.jpg";
import DS107 from "../multimedia/sellos de vastago/ds107.jpg";
import DS108 from "../multimedia/sellos de vastago/ds108.jpg";
import DS109 from "../multimedia/sellos de vastago/ds109.jpg";
import ds110ds11ds112ds111 from "../multimedia/sellos de vastago/ds110ds11ds112ds111.jpg";
import DS116 from "../multimedia/sellos de vastago/ds116.jpg";
import DS216 from "../multimedia/sellos de vastago/ds216.jpg";
import DS117 from "../multimedia/sellos de vastago/ds117.jpg";
import DS117R from "../multimedia/sellos de vastago/ds117r.jpg";
import DS118 from "../multimedia/sellos de vastago/ds118.jpg";
import DS119 from "../multimedia/sellos de vastago/ds119.jpg";
import DS119B from "../multimedia/sellos de vastago/ds119b.jpg";
import DS120 from "../multimedia/sellos de vastago/ds120.jpg";
import DS121 from "../multimedia/sellos de vastago/ds121.jpg";
import DS124 from "../multimedia/sellos de vastago/ds124.jpg";
import DS125 from "../multimedia/sellos de vastago/ds125.jpg";
import DS125R from "../multimedia/sellos de vastago/ds125r.jpg";
import DS127 from "../multimedia/sellos de vastago/ds127.jpg";
import DS129 from "../multimedia/sellos de vastago/ds129.jpg";
import DS129B from "../multimedia/sellos de vastago/ds129b.jpg";
import DS130 from "../multimedia/sellos de vastago/ds130.jpg";
import DS131 from "../multimedia/sellos de vastago/ds131.jpg";
import DS138 from "../multimedia/sellos de vastago/ds138.jpg";
import DS238 from "../multimedia/sellos de vastago/ds238.jpg";
import DS139 from "../multimedia/sellos de vastago/ds139.jpg";
import DS141 from "../multimedia/sellos de vastago/ds141.jpg";
import DS142 from "../multimedia/sellos de vastago/ds142.jpg";
import DS151 from "../multimedia/sellos de vastago/ds151.jpg";
import DS251 from "../multimedia/sellos de vastago/ds251.jpg";
import DS154 from "../multimedia/sellos de vastago/ds154.jpg";
import DS199 from "../multimedia/sellos de vastago/ds199.jpg";

// Sellos de pistón
import DK101 from "../multimedia/sellos de piston/dk101.jpg";
import DK102 from "../multimedia/sellos de piston/dk102.jpg";
import DK102R from "../multimedia/sellos de piston/dk102r.jpg";
import DK103 from "../multimedia/sellos de piston/dk103.jpg";
import DK104 from "../multimedia/sellos de piston/dk104.jpg";
import DK104R from "../multimedia/sellos de piston/dk104r.jpg";
import DK105 from "../multimedia/sellos de piston/dk105.jpg";
import DK205 from "../multimedia/sellos de piston/dk205.jpg";
import DK106 from "../multimedia/sellos de piston/dk106.jpg";
import DK107 from "../multimedia/sellos de piston/dk107.jpg";
import DK108 from "../multimedia/sellos de piston/dk108.jpg";
import DK109 from "../multimedia/sellos de piston/dk109.jpg";
import DK109H from "../multimedia/sellos de piston/dk109h.jpg";
import DK109N from "../multimedia/sellos de piston/dk109n.jpg";
import DK111 from "../multimedia/sellos de piston/dk111.jpg";
import DK116 from "../multimedia/sellos de piston/dk116.jpg";
import DK216 from "../multimedia/sellos de piston/dk216.jpg";
import DK117 from "../multimedia/sellos de piston/dk117.jpg";
import DK118 from "../multimedia/sellos de piston/dk118.jpg";
import DK218 from "../multimedia/sellos de piston/dk218.jpg";
import DK119 from "../multimedia/sellos de piston/dk119.jpg";
import DK120 from "../multimedia/sellos de piston/dk120.jpg";
import DK122 from "../multimedia/sellos de piston/dk122.jpg";
import DK222 from "../multimedia/sellos de piston/dk222.jpg";
import DK123 from "../multimedia/sellos de piston/dk123.jpg";
import DK123D from "../multimedia/sellos de piston/dk123d.jpg";
import DK123H from "../multimedia/sellos de piston/dk123h.jpg";
import DK123N from "../multimedia/sellos de piston/dk123n.jpg";
import DK124 from "../multimedia/sellos de piston/dk124.jpg";
import DK125 from "../multimedia/sellos de piston/dk125.jpg";
import DK126 from "../multimedia/sellos de piston/dk126.jpg";
import DK127 from "../multimedia/sellos de piston/dk127.jpg";
import DK128 from "../multimedia/sellos de piston/dk128.jpg";
import DK129 from "../multimedia/sellos de piston/dk129.jpg";
import DK138 from "../multimedia/sellos de piston/dk138.jpg";
import DK238 from "../multimedia/sellos de piston/dk238.jpg";
import DK139 from "../multimedia/sellos de piston/dk139.jpg";
import DK140 from "../multimedia/sellos de piston/dk140.jpg";
import DK141 from "../multimedia/sellos de piston/dk141.jpg";
import DK142 from "../multimedia/sellos de piston/dk142.jpg";
import DK143 from "../multimedia/sellos de piston/dk143.jpg";
import DK144 from "../multimedia/sellos de piston/dk144.jpg";
import DK144B from "../multimedia/sellos de piston/dk144b.jpg";
import DK145 from "../multimedia/sellos de piston/dk145.jpg";
import DK150 from "../multimedia/sellos de piston/dk150.jpg";
import DK150B from "../multimedia/sellos de piston/dk150b.jpg";
import DK151 from "../multimedia/sellos de piston/dk151.jpg";
import DK250 from "../multimedia/sellos de piston/dk250.jpg";
import DK251 from "../multimedia/sellos de piston/dk251.jpg";
import DK153 from "../multimedia/sellos de piston/dk153.jpg";
import DK154 from "../multimedia/sellos de piston/dk154.jpg";
import DK199 from "../multimedia/sellos de piston/dk199.jpg";

// sellos rotativos
import DR101 from "../multimedia/sellos rotativos/dr101.jpg";
import DR102 from "../multimedia/sellos rotativos/dr102.jpg";
import DR103 from "../multimedia/sellos rotativos/dr103.jpg";
import DR104 from "../multimedia/sellos rotativos/dr104.jpg";
import DR105 from "../multimedia/sellos rotativos/dr105.jpg";
import DR106 from "../multimedia/sellos rotativos/dr106.jpg";
import DR107 from "../multimedia/sellos rotativos/dr107.jpg";
import DR108 from "../multimedia/sellos rotativos/dr108.jpg";
import DR109 from "../multimedia/sellos rotativos/dr109.jpg";
import DR110 from "../multimedia/sellos rotativos/dr110.jpg";
import DR111 from "../multimedia/sellos rotativos/dr111.jpg";
import DR112 from "../multimedia/sellos rotativos/dr112.jpg";
import DR113 from "../multimedia/sellos rotativos/dr113.jpg";
import DR115 from "../multimedia/sellos rotativos/dr115.jpg";
import DR116 from "../multimedia/sellos rotativos/dr116.jpg";
import DR117 from "../multimedia/sellos rotativos/dr117.jpg";
import DR118 from "../multimedia/sellos rotativos/dr118.jpg";
import DR119 from "../multimedia/sellos rotativos/dr119.jpg";
import DR121 from "../multimedia/sellos rotativos/dr121.jpg";
import DR201 from "../multimedia/sellos rotativos/dr201.jpg";
import DR202 from "../multimedia/sellos rotativos/dr202.jpg";
import DR203 from "../multimedia/sellos rotativos/dr203.jpg";
import DR204 from "../multimedia/sellos rotativos/dr204.jpg";
import DR205 from "../multimedia/sellos rotativos/dr205.jpg";
import DR206 from "../multimedia/sellos rotativos/dr206.jpg";
import DR207 from "../multimedia/sellos rotativos/dr207.jpg";
import DR101F from "../multimedia/sellos rotativos/dr101f.jpg";

// junta plana
import DFL101 from "../multimedia/junta plana/dfl101.jpg";
import DFL102 from "../multimedia/junta plana/dfl102.jpg";
import DFL103 from "../multimedia/junta plana/dfl103.jpg";
import DFL104 from "../multimedia/junta plana/dfl104.jpg";
import DFL105 from "../multimedia/junta plana/dfl105.jpg";
import DFL106 from "../multimedia/junta plana/dfl106.jpg";
import DFL107 from "../multimedia/junta plana/dfl107.jpg";
import DFL108 from "../multimedia/junta plana/dfl108.jpg";
import DFL109 from "../multimedia/junta plana/dfl109.jpg";
import DFL110 from "../multimedia/junta plana/dfl110.jpg";
import DFL111 from "../multimedia/junta plana/dfl111.jpg";
import DFL112 from "../multimedia/junta plana/dfl112.jpg";

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
    "Sellos de vástago": [
      {
        nombre: "DS101",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS101,
      },
      {
        nombre: "DS102",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS102,
      },
      {
        nombre: "DS102R",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS102R,
      },
      {
        nombre: "DS103",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS103,
      },
      {
        nombre: "DS104",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS104,
      },
      {
        nombre: "DS104R",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS104R,
      },
      {
        nombre: "DS105",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS105,
      },
      {
        nombre: "DS205",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS205,
      },
      {
        nombre: "DS106",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS106,
      },
      {
        nombre: "DS107",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS107,
      },
      {
        nombre: "DS108",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS108,
      },
      {
        nombre: "DS109",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS109,
      },
      {
        nombre: "DS110DS11DS112DS111",
        imagenPerfil: ds110ds11ds112ds111,
      },
      {
        nombre: "DS116",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS116,
      },
      {
        nombre: "DS216",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS216,
      },
      {
        nombre: "DS117",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS117,
      },
      {
        nombre: "DS117R",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS117R,
      },
      {
        nombre: "DS118",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS118,
      },
      {
        nombre: "DS119",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS119,
      },
      {
        nombre: "DS119B",
        imagenPerfil: DS119B,
      },
      {
        nombre: "DS120",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS120,
      },
      {
        nombre: "DS121",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS121,
      },
      {
        nombre: "DS124",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS124,
      },
      {
        nombre: "DS125",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS125,
      },
      {
        nombre: "DS125R",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS125R,
      },
      {
        nombre: "DS127",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS127,
      },
      {
        nombre: "DS129",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS129,
      },
      {
        nombre: "DS129B",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS129B,
      },
      {
        nombre: "DS130",
        plano: plano13,
        planoNombre: "plano13",
        imagenPerfil: DS130,
      },
      {
        nombre: "DS131",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS131,
      },
      {
        nombre: "DS138",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS138,
      },
      {
        nombre: "DS238",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS238,
      },
      {
        nombre: "DS139",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS139,
      },
      {
        nombre: "DS141",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS141,
      },
      {
        nombre: "DS142",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS142,
      },
      {
        nombre: "DS151",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS151,
      },
      {
        nombre: "DS251",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS251,
      },
      {
        nombre: "DS154",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS154,
      },
      {
        nombre: "DS199",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DS199,
      },
    ],
    "Sellos de pistón": [
      {
        nombre: "DK101",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK101,
      },
      {
        nombre: "DK102",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK102,
      },
      {
        nombre: "DK102R",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK102R,
      },
      {
        nombre: "DK103",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK103,
      },
      {
        nombre: "DK104",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK104,
      },
      {
        nombre: "DK104R",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK104R,
      },
      {
        nombre: "DK105",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK105,
      },
      {
        nombre: "DK205",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK205,
      },
      {
        nombre: "DK106",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK106,
      },
      {
        nombre: "DK107",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK107,
      },
      {
        nombre: "DK108",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK108,
      },
      {
        nombre: "DK109",
        imagenPerfil: DK109,
      },
      {
        nombre: "DK109H",
        imagenPerfil: DK109H,
      },
      {
        nombre: "DK109N",
        imagenPerfil: DK109N,
      },
      {
        nombre: "DK111",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK111,
      },
      {
        nombre: "DK116",
        imagenPerfil: DK116,
      },
      {
        nombre: "DK216",
        imagenPerfil: DK216,
      },
      {
        nombre: "DK117",
        imagenPerfil: DK117,
      },
      {
        nombre: "DK118",
        imagenPerfil: DK118,
      },
      {
        nombre: "DK218",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK218,
      },
      {
        nombre: "DK119",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK119,
      },
      {
        nombre: "DK120",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK120,
      },
      {
        nombre: "DK122",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK122,
      },
      {
        nombre: "DK222",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK222,
      },
      {
        nombre: "DK123",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK123,
      },
      {
        nombre: "DK123D",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK123D,
      },
      {
        nombre: "DK123H",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK123H,
      },
      {
        nombre: "DK123N",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK123N,
      },
      {
        nombre: "DK124",
        imagenPerfil: DK124,
      },
      {
        nombre: "DK125",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK125,
      },
      {
        nombre: "DK126",
        plano: plano13,
        planoNombre: "plano13",
        imagenPerfil: DK126,
      },
      {
        nombre: "DK127",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK127,
      },
      {
        nombre: "DK128",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK128,
      },
      {
        nombre: "DK129",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK129,
      },
      {
        nombre: "DK138",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK138,
      },
      {
        nombre: "DK238",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK238,
      },
      {
        nombre: "DK139",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK139,
      },
      {
        nombre: "DK140",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK140,
      },
      {
        nombre: "DK141",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK141,
      },
      {
        nombre: "DK142",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK142,
      },
      {
        nombre: "DK143",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK143,
      },
      {
        nombre: "DK144",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK144,
      },
      {
        nombre: "DK144B",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK144B,
      },
      {
        nombre: "DK145",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK145,
      },
      {
        nombre: "DK150",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK150,
      },
      {
        nombre: "DK150B",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK150B,
      },
      {
        nombre: "DK151",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK151,
      },
      {
        nombre: "DK250",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK250,
      },
      {
        nombre: "DK251",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK251,
      },
      {
        nombre: "DK153",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK153,
      },
      {
        nombre: "DK154",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK154,
      },
      {
        nombre: "DK199",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DK199,
      },
    ],
    "Sellos rotativos": [
      {
        nombre: "DR101",
        plano: plano9,
        planoNombre: "plano9",
        imagenPerfil: DR101,
      },
      {
        nombre: "DR102",
        plano: plano9,
        planoNombre: "plano9",
        imagenPerfil: DR102,
      },
      {
        nombre: "DR103",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DR103,
      },
      {
        nombre: "DR104",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DR104,
      },
      {
        nombre: "DR105",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DR105,
      },
      {
        nombre: "DR106",
        imagenPerfil: DR106,
      },
      {
        nombre: "DR107",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DR107,
      },
      {
        nombre: "DR108",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DR108,
      },
      {
        nombre: "DR109",
        plano: plano10,
        planoNombre: "plano10",
        imagenPerfil: DR109,
      },
      {
        nombre: "DR110",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DR110,
      },
      {
        nombre: "DR111",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DR111,
      },
      {
        nombre: "DR112",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DR112,
      },
      {
        nombre: "DR113",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DR113,
      },
      {
        nombre: "DR115",
        plano: plano7,
        planoNombre: "plano7",
        imagenPerfil: DR115,
      },
      {
        nombre: "DR116",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DR116,
      },
      {
        nombre: "DR117",
        imagenPerfil: DR117,
      },
      {
        nombre: "DR118",
        imagenPerfil: DR118,
      },
      {
        nombre: "DR119",
        imagenPerfil: DR119,
      },
      {
        nombre: "DR121",
        imagenPerfil: DR121,
      },
      {
        nombre: "DR201",
        plano: plano9,
        planoNombre: "plano9",
        imagenPerfil: DR201,
      },
      {
        nombre: "DR202",
        plano: plano9,
        planoNombre: "plano9",
        imagenPerfil: DR202,
      },
      {
        nombre: "DR203",
        plano: plano9,
        planoNombre: "plano9",
        imagenPerfil: DR203,
      },
      {
        nombre: "DR204",
        plano: plano9,
        planoNombre: "plano9",
        imagenPerfil: DR204,
      },
      {
        nombre: "DR205",
        plano: plano9,
        planoNombre: "plano9",
        imagenPerfil: DR205,
      },
      {
        nombre: "DR206",
        plano: plano9,
        planoNombre: "plano9",
        imagenPerfil: DR206,
      },
      {
        nombre: "DR207",
        plano: plano9,
        planoNombre: "plano9",
        imagenPerfil: DR207,
      },
      {
        nombre: "DR101F",
        plano: plano9,
        planoNombre: "plano9",
        imagenPerfil: DR101F,
      },
    ],
    "Junta plana": [
      {
        nombre: "DFL101",
        plano: plano11,
        planoNombre: "plano11",
        imagenPerfil: DFL101,
      },
      {
        nombre: "DFL102",
        plano: plano12,
        planoNombre: "plano12",
        imagenPerfil: DFL102,
      },
      {
        nombre: "DFL103",
        imagenPerfil: DFL103,
      },
      {
        nombre: "DFL104",
        imagenPerfil: DFL104,
      },
      {
        nombre: "DFL105",
        plano: plano12,
        planoNombre: "plano12",
        imagenPerfil: DFL105,
      },
      {
        nombre: "DFL106",
        plano: plano10,
        planoNombre: "plano10",
        imagenPerfil: DFL106,
      },
      {
        nombre: "DFL107",
        imagenPerfil: DFL107,
      },
      {
        nombre: "DFL108",
        plano: plano8,
        planoNombre: "plano8",
        imagenPerfil: DFL108,
      },
      {
        nombre: "DFL109",
        plano: plano12,
        planoNombre: "plano12",
        imagenPerfil: DFL109,
      },
      {
        nombre: "DFL110",
        imagenPerfil: DFL110,
      },
      {
        nombre: "DFL111",
        plano: plano13,
        planoNombre: "plano13",
        imagenPerfil: DFL111,
      },
      {
        nombre: "DFL112",
        plano: plano11,
        planoNombre: "plano11",
        imagenPerfil: DFL112,
      },
    ],
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
                    {/* <p className="subtitulo">
                      Cada campo de medida se relaciona directamente con una
                      dimensión específica en el perfil, comenzando desde la
                      medida que está más arriba y avanzando hacia abajo.
                    </p> */}

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
                      <div className="columnas">
                        <div className="datosCliente">
                          <p className="titulo">Escribe tus datos</p>
                          <label htmlFor="nombre">Nombre y Apellido:</label>
                          <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Escribe tu nombre y apellido"
                            value={formData[`nombre`] || ""}
                            onChange={handleInputChange}
                            required
                          />

                          <label htmlFor="email">Email:</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Escribe tu email"
                            value={formData[`email`] || ""}
                            onChange={handleInputChange}
                            required
                          />

                          <label htmlFor="telefono">Teléfono:</label>
                          <input
                            type="number"
                            id="telefono"
                            name="telefono"
                            placeholder="Escribe tu teléfono"
                            value={formData[`telefono`] || ""}
                            onChange={handleInputChange}
                            required
                          />

                          <label htmlFor="empresa">Nombre de tu empresa:</label>
                          <input
                            type="text"
                            id="empresa"
                            name="empresa"
                            placeholder="Nombre de tu empresa"
                            value={formData[`empresa`] || ""}
                            onChange={handleInputChange}
                            required
                          />

                          <label htmlFor="CUIL_CUIT">CUIL/CUIT:</label>
                          <input
                            type="number"
                            id="CUIL_CUIT"
                            name="CUIL_CUIT"
                            placeholder="CUIL/CUIT"
                            value={formData[`CUIL/CUIT`] || ""}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="medidas">
                          <p className="titulo">Escribe las medidas</p>
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
                                <div key={index}>
                                  <label
                                    htmlFor={`Medida-${String.fromCharCode(
                                      65 + index
                                    )}`}
                                  >
                                    {`Medida ${String.fromCharCode(
                                      65 + index
                                    )}`}
                                  </label>
                                  <input
                                    type="number"
                                    name={`Medida-${String.fromCharCode(
                                      65 + index
                                    )}`}
                                    placeholder={`Medida ${String.fromCharCode(
                                      65 + index
                                    )} (en milímetros)`}
                                    value={
                                      formData[
                                        `Medida-${String.fromCharCode(
                                          65 + index
                                        )}`
                                      ] || ""
                                    }
                                    onChange={handleInputChange}
                                    required
                                  />
                                </div>
                              ))}
                            </>
                          ) : perfilSeleccionado.planoNombre === "plano1" ||
                            perfilSeleccionado.planoNombre === "plano2" ||
                            perfilSeleccionado.planoNombre === "plano4" ||
                            perfilSeleccionado.planoNombre === "plano5" ? (
                            <>
                              {Array.from({ length: 4 }, (_, index) => (
                                <div key={index}>
                                  <label
                                    htmlFor={`Medida-${String.fromCharCode(
                                      65 + index
                                    )}`}
                                  >
                                    {`Medida ${String.fromCharCode(
                                      65 + index
                                    )}`}
                                  </label>
                                  <input
                                    type="number"
                                    name={`Medida-${String.fromCharCode(
                                      65 + index
                                    )}`}
                                    placeholder={`Medida ${String.fromCharCode(
                                      65 + index
                                    )} (en milímetros)`}
                                    value={
                                      formData[
                                        `Medida-${String.fromCharCode(
                                          65 + index
                                        )}`
                                      ] || ""
                                    }
                                    onChange={handleInputChange}
                                    required
                                  />
                                </div>
                              ))}
                            </>
                          ) : perfilSeleccionado.planoNombre === "plano6" ? (
                            <>
                              {Array.from({ length: 5 }, (_, index) => (
                                <div key={index}>
                                  <label
                                    htmlFor={`Medida-${String.fromCharCode(
                                      65 + index
                                    )}`}
                                  >
                                    {`Medida ${String.fromCharCode(
                                      65 + index
                                    )}`}
                                  </label>
                                  <input
                                    type="number"
                                    name={`Medida-${String.fromCharCode(
                                      65 + index
                                    )}`}
                                    placeholder={`Medida ${String.fromCharCode(
                                      65 + index
                                    )} (en milímetros)`}
                                    value={
                                      formData[
                                        `Medida-${String.fromCharCode(
                                          65 + index
                                        )}`
                                      ] || ""
                                    }
                                    onChange={handleInputChange}
                                    required
                                  />
                                </div>
                              ))}
                            </>
                          ) : (
                            <>
                              {Array.from({ length: 2 }, (_, index) => (
                                <div key={index}>
                                  <label
                                    htmlFor={`Medida-${String.fromCharCode(
                                      65 + index
                                    )}`}
                                  >
                                    {`Medida ${String.fromCharCode(
                                      65 + index
                                    )}`}
                                  </label>
                                  <input
                                    type="number"
                                    name={`Medida-${String.fromCharCode(
                                      65 + index
                                    )}`}
                                    placeholder={`Medida ${String.fromCharCode(
                                      65 + index
                                    )} (en milímetros)`}
                                    value={
                                      formData[
                                        `Medida-${String.fromCharCode(
                                          65 + index
                                        )}`
                                      ] || ""
                                    }
                                    onChange={handleInputChange}
                                    required
                                  />
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                      </div>

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

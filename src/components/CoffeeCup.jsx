import "./CoffeeCup.css";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { toCamelCase, getFlag } from "../lib/utils";

function generateCupContent (props) {
  const order = props.order.slice(0).reverse();
  return order.map((x, i) => {
    const heightPercent = props[x];
    let heightPixels = heightPercent * props.height;
    if (x === "crema" || x === "simple-syrup") {
      heightPixels = 20;
    }
    if (isNaN(heightPixels)) {
      console.error(`Invalid height for ${x} in ${props.name}`);
    }
    const fontSize = 17;
    const fontColor = (function () {
      switch (x) {
        case "milk":
        case "foam":
        case "coffee-milk":
        case "condensed-milk":
        case "cream":
        case "water":
        case "half-and-half":
          return "black";
        default:
          return "white";
      }
    })();
    let borderRadius = 0;
    if (i === order.length - 1) {
      borderRadius = props.radius;
    }
    const measure = (function () {
      switch (x) {
        case "foam":
        case "crema":
        case "simple-syrup":
          return "";
        default:
          return `${props[toCamelCase(x) + "Oz"]} `;
      }
    })();
    return (
      <div key={i.toString()} className={`${x}-quantity`} style={{ 
        height: heightPixels,
        lineHeight: `${heightPixels - 3}px`,
        fontSize: fontSize,
        fontWeight: "bold",
        verticalAlign: "middle",
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
      }}>
        <span style={{
          zIndex: 10,
          position: "relative",
          color: fontColor,
        }}>
          {measure}{x.replaceAll("-", " ")}
        </span>
      </div>
    )
  });
}

export default function CoffeeCup (props) {  

    const [showModal, setShowModal] = useState(false);
    
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
      <div>
        <div 
          className="cup-container"
          onClick={handleShowModal}
          style={{
            width: props.width,
          }}
        >
          <div className="cup" style={{
            width: props.width,
            height: props.height,
            borderBottomLeftRadius: props.radius,
            borderBottomRightRadius: props.radius,
          }}>
            <div className="cup-content" style={{
              width: props.width,
            }}>
              
              { props.ice && 
                <div className="ice">
                  <img alt="ice" src={`${process.env.PUBLIC_URL}/ice.png`} />
                </div>
              }

              { props.sugar && 
                <div className="sugar">
                  <img alt="sugar" src={`${process.env.PUBLIC_URL}/sugar.png`} />
                </div>
              }
              
              { generateCupContent(props) }
            </div>
          </div>
        </div>
        <Modal size="lg" backdrop={true} show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title style={{ fontWeight: "bold" }}>{getFlag(props.country)}{ props.name }</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <ul>{ props.steps?.map((x, i) => (<li key={i.toString()}>{x}</li>)) }</ul>
            <iframe
              className="modal-video"
              width="853"
              height="400"
              src={`https://www.youtube.com/embed/${props.video}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
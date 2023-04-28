import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { useEffect, useState } from "react";
import { Row, Col, Image } from "antd";
import "./state_machine/DeliveryMap.css";
import DeliveryMapStateMachineController from "./state_machine/DeliveryMapStateMachineController";
import DeliveryInfoSelectionController from "./state_machine/DeliveryInfoSelectionController";
import { showSuccess, showInfo } from "../../../utils/dialog_utils"
import { DISPATCH_STATE, DISPATCHER_START_LOCATION_KEY, DISPATCHER_START_LOCATION, DISPATCHER_TYPE } from "../../../utils/delivery_plan_utils";

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const DeliveryMap = ({authed}) => {
  
  const [dispatcher, setDispatcher] = useState(DISPATCHER_TYPE.ROBOT);
  const [deliveryState, setDeliveryState] = useState(DISPATCH_STATE.IDLE);
  const [deliveryStartLocationKey, setDeliveryStartLocationKey] = useState(DISPATCHER_START_LOCATION_KEY.LOCATION_A);
  
  useEffect(() => {
    if (authed) {
      setDeliveryState(DISPATCH_STATE.PICKUP_PREPARATION);
    }
  }, [authed]);

  useEffect(() => {

    console.log("Package Delivery State: " + deliveryState);
    if (deliveryState === DISPATCH_STATE.DELIVER_FINISHED) {
      showSuccess("Confirmation", "The package is delivered successfully!");
      //setDeliveryState(DISPATCH_STATE.PICKUP_PREPARATION);
    } else if (deliveryState === DISPATCH_STATE.DELIVER_PREPARATION) {
      showInfo("Information", "The dispatcher has arrived the pick-up location, please complete package information before handing over your package to dispatcher");

    }
  }, [deliveryState]);

  return (
    <Row>
      <Col span={12} class="parent">
        <div class="parent">
          <MapContainer class="leaflet-container" center={DISPATCHER_START_LOCATION[deliveryStartLocationKey]} zoom={13} scrollWheelZoom={false}>
            <ChangeView center={DISPATCHER_START_LOCATION[deliveryStartLocationKey]} zoom={13} /> 
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
              <DeliveryMapStateMachineController dispatcher={dispatcher} deliveryStartLocationKey={deliveryStartLocationKey} deliveryState={deliveryState} setDeliveryState={setDeliveryState}></DeliveryMapStateMachineController>
          </MapContainer>

          {deliveryState === DISPATCH_STATE.PICKUP_PROCESSING || 
           deliveryState === DISPATCH_STATE.DELIVER_PROCESSING || 
           deliveryState === DISPATCH_STATE.DELIVER_FINISHED ? 
            <Image className="stack-top" preview={false} src={"./blur_layer.png"}/> : <></>
          }
        </div>
      </Col>
      <Col span={12}>
          <DeliveryInfoSelectionController dispatcher={dispatcher} setDispatcher={setDispatcher} deliveryState={deliveryState} setDeliveryState={setDeliveryState} setDeliveryStartLocationKey={setDeliveryStartLocationKey}></DeliveryInfoSelectionController>
      </Col>
    </Row>
  );
}

export default DeliveryMap;

import { Button, Image } from 'antd';
import { DISPATCH_STATE, DISPATCHER_START_LOCATION_KEY, DISPATCHER_TYPE } from '../../../../utils/delivery_plan_utils';
import "./InfoSelection.css";

const PackagePickupStep = ({dispatcher, deliveryState, setDispatcher, setDeliveryState, setDeliveryStartLocationKey}) => {

    if (deliveryState === DISPATCH_STATE.PICKUP_PROCESSING) {

        return (<div class="parent">
                    <p class="text">THE DISPATCHER IS MOVING TOWARD YOUR PICK-UP LOCATION...</p>
                    <Image className="image" width={200} src={dispatcher === DISPATCHER_TYPE.ROBOT ? "./robot.png" : "./drone.png"}/>
                </div>
                    
          );
    } else if (deliveryState === DISPATCH_STATE.PICKUP_PREPARATION) {
        return (
            <>
                <Button onClick={() => {setDeliveryState(DISPATCH_STATE.RESET_ROUTE)}}>Reset</Button>
                <Button onClick={() => {setDispatcher(DISPATCHER_TYPE.ROBOT)}}>Select Robot</Button>
                <Button onClick={() => {setDispatcher(DISPATCHER_TYPE.AIR_DRONE)}}>Select AirDrone</Button>
                <Button onClick={() => {setDeliveryStartLocationKey(DISPATCHER_START_LOCATION_KEY.LOCATION_A)}}>Select Start Location A</Button>
                <Button onClick={() => {setDeliveryStartLocationKey(DISPATCHER_START_LOCATION_KEY.LOCATION_B)}}>Select Start Location B</Button>
                <Button onClick={() => {setDeliveryStartLocationKey(DISPATCHER_START_LOCATION_KEY.LOCATION_C)}}>Select Start Location C</Button>
                <Button type="primary" onClick={() => {setDeliveryState(DISPATCH_STATE.PICKUP_INITIALIZATION)}}>Pick-up Review</Button>
            </>
        );
    } else if (deliveryState === DISPATCH_STATE.PICKUP_INITIALIZATION) {
        return (
            <>
                <Button onClick={() => {setDeliveryState(DISPATCH_STATE.RESET_ROUTE)}}>Reset</Button>,
                <Button type="primary" onClick={() => {setDeliveryState(DISPATCH_STATE.PICKUP_PROCESSING)}}>Start Pick-up</Button>,
            </>
        );
    }
    return null;
};

export default PackagePickupStep;
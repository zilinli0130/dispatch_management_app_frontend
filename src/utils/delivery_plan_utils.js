/**
 * Copyright (c) 2023
 *
 * @summary Common definitions for delivery plan
 * @author Zilin Li
 * @date 2023-04-28  
 *  
 */

export const DELIVERY_STATE = {

    PICKUP_PREPARATION : 'PICKUP_PREPARATION',
    PICKUP_INITIALIZATION : 'PICKUP_INITIALIZATION',
    PICKUP_PROCESSING : 'PICKUP_PROCESSING',
    RESET_ROUTE : 'RESET_ROUTE',

    DELIVER_PREPARATION : 'DELIVER_PREPARATION',
    DELIVER_INITIALIZATION : 'DELIVER_INITIALIZATION',
    DELIVER_PROCESSING : 'DELIVER_PROCESSING',
    DELIVER_FINISHED : 'DELIVER_FINISHED',

    IDLE : 'IDLE',
};

export const DISPATCHER_START_LOCATION_KEY = {
    LOCATION_A: 'LOCATION_A',
    LOCATION_B: 'LOCATION_B',
    LOCATION_C: 'LOCATION_C',
};

export const DISPATCHER_START_LOCATION = {
    LOCATION_A: [40.71278, -74.0060],
    LOCATION_B: [40.72278, -74.0060],
    LOCATION_C: [40.73278, -74.0060],
};

export const DISPATCHER_TYPE = {
    ROBOT : 'ROBOT',
    AIR_DRONE : 'AIR_DRONE',
};

export const DISPATCH_ROUTE_TYPE = {
    PICK_UP : 'PICK_UP',
    DELIVERY : 'DELIVERY',
}

export const DISPATCH_SPEED_TYPE = {
    PRIORITY : 'PRIORITY',
    FIRST_CLASS : 'FIRST_CLASS',
    NORMAL : 'NORMAL',
}

export const BACKEND_COURIER_ID = {
    ROBOT : '1',
    AIR_DRONE : '2',
}

export const BACKEND_WAREHOUSE_ID = {
    LOCATION_A: '1',
    LOCATION_B: '2',
    LOCATION_C: '3',
}

export const FRONTEND_COURIER_NAME = {
    '1': 'ROBOT',
    '2': 'AIR_DRONE',
}

export const FRONTEND_WAREHOUSE_NAME = {
    '1': 'LOCATION_A',
    '2': 'LOCATION_B',
    '3': 'LOCATION_C',
}
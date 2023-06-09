/**
 * Copyright (c) 2023
 *
 * @summary Common ui dialog definitions
 * @author Zilin Li
 * @date 2023-04-28  
 *  
 */

// Antd imports
import { Modal } from "antd";

export const showError = (titleInput, contentInput) => {
    Modal.error({
        title: titleInput,
        content: contentInput,
    });
};

export const showSuccess = (titleInput, contentInput) => {
    Modal.success({
        title: titleInput,
        content: contentInput,
    });
}

export const showWarning = (titleInput, contentInput) => {
    Modal.warning({
        title: titleInput,
        content: contentInput,
    });
}

export const showInfo = (titleInput, contentInput) => {
    Modal.info({
        title: titleInput,
        content: contentInput,
    });
}
/**
 * Copyright (c) 2023
 *
 * @summary Implementation of UserPortalPage.js
 * @author Zilin Li
 * @date 2023-05-10  
 *  
 */

// Project imports
import LoginForm from "./user_authentication/LoginForm";
import OrderTrackingHistory from "./user_order_history/OrderTrackingHistory";

// Antd imports
import { Result, Button, Space, Image, Row, Col, Typography, Modal } from 'antd';
import { UserSwitchOutlined, ShoppingOutlined, CodeSandboxOutlined, PlayCircleOutlined } from '@ant-design/icons';

// React imports
import { useState } from "react";
import { Player } from 'video-react';
import "video-react/dist/video-react.css";  

const { Text } = Typography;
const UserPortalPage = ({authed, setAuthed, setNavigationKey}) => {

    const [player, setPlayer] = useState();
    const [showVideo, setShowVideo] = useState(false);
    const [viewOrderTrackingHistory, setViewOrderTrackingHistory] = useState(false);

    const renderContent = () => {

        if (!authed) {
            return <LoginForm setAuthed={setAuthed}/>;
        } else if (!viewOrderTrackingHistory) {

            return (
                    <div>
                        <Modal
                            title="Delivery Plan Workflow Tutorial Demo"
                            visible={showVideo}
                            footer={null}
                            onCancel={() => setShowVideo(false)}
                            afterClose={() => player.pause()}
                            bodyStyle={{ padding: 0 }}
                            >
                                <Player autoPlay ref={ref => setPlayer(ref)}>
                                    <source src="./demo.mp4" />
                                </Player>
                        </Modal>
                        <Row span={12} style={{backgroundColor: '#364d79'}}>
                            <Result
                                icon={<Image preview={false} width={350} src={"./user.png"}/>}
                                title={<Text style={{ fontSize: 50, color: "white" }}>
                                            Welcome, we are here to provide advanced delivery solution for you ! 
                                        </Text>}
                                subTitle={<Text style={{ fontSize: 20, color: "white" }}>
                                            First time here? We provide a tutorial demo on our delivery plan workflow . 
                                        </Text>}
                                style={{marginLeft: 250}}
                                extra={<Button icon={<PlayCircleOutlined />} type="primary" onClick={() => setShowVideo(true)}>
                                            Play Demo
                                        </Button>}
                            />
                        </Row>
                        <Row span={12}>
                            <Col span={10}>
                                <Space direction="vertical" align="center">
                                    <Image preview={false} width={150} src={"./check-out.png"}/>
                                    <Button icon={<UserSwitchOutlined />} type="primary" onClick={() => setAuthed(false)}>Logout</Button>
                                    <Text style={{ color: "grey" }}>
                                        See you next time, we will miss you ......
                                    </Text>
                                </Space>
                            </Col>
                            <Col span={10}>
                                <Space direction="vertical" align="center">
                                    <Image preview={false} width={150} src={"./delivered.png"}/>
                                    <Button icon={<CodeSandboxOutlined />} type="primary" onClick={() => setNavigationKey("2")}>Start Delivery Plan</Button>
                                    <Text style={{ color: "grey" }}>
                                        Give it a try on our smart and autonomous delivery plan service !
                                    </Text>
                                </Space>
                            </Col>
                            <Col span={4}>
                                <Space direction="vertical" align="center">
                                    <Image preview={false} width={150} src={"./tracking.png"}/>
                                    <Button icon={<ShoppingOutlined />} type="primary" onClick={() => setViewOrderTrackingHistory(true)}>Order Tracking History</Button>
                                    <Text style={{ color: "grey" }}>
                                        Want to keep track of your order history ? 
                                    </Text>
                                </Space>
                            </Col>
                        </Row>
                    </div>);
        } else {
            return <OrderTrackingHistory setViewOrderTrackingHistory={setViewOrderTrackingHistory}/>
        }
    }

    return (renderContent());
};

export default UserPortalPage;
"use client";

import { MailOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";


export const FormSignInEmail = () => {
    return (
        <Card className="w-100" title="Sign In" variant="outlined">
            <Form layout="vertical">
                <Form.Item label="Email:" name="email">
                    <Input placeholder="email@email.com" prefix={<MailOutlined />} />
                </Form.Item>
                <Form.Item>
                    <Button className="w-full" htmlType="submit" type="primary">
                        Sign In
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

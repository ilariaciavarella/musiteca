import {
  Button,
  Col,
  ConfigProvider,
  Form,
  Input,
  Modal,
  Row,
  Upload,
} from "antd";

import PropTypes from "prop-types";

import { UploadSimple } from "@phosphor-icons/react";

function PostForm(props) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#E2EE00",
          colorText: "#F9FAED",
          colorBgBase: "#4930AA",
        },
        components: {
          Button: {
            primaryColor: "#120C2A",
          },
        },
      }}
    >
      <Modal
        title="Lend your instrument"
        open={props.isFormOpen}
        closeIcon={false}
        okText="Post"
        onCancel={props.handlePostFormCancel}
        onOk={props.handlePostFormConfirm}
      >
        <Form layout="vertical" requiredMark={false}>
          <Row gutter={12}>
            <Col xs={24} lg={12}>
              <Form.Item
                label="Type of instrument"
                name="instrument"
                rules={[
                  {
                    required: true,
                    message: "Please, insert the type of instrument",
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder="Drums" />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item
                label="Brand"
                name="brand"
                rules={[
                  {
                    required: true,
                    message: "Please, insert the brand of the instrument",
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder="Pearl" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col xs={24} md={12}>
              <Form.Item
                label="Age in years"
                name="age"
                rules={[
                  {
                    required: true,
                    message: "Please, insert the age of the instrument",
                  },
                ]}
              >
                <Input type="number" min={0} max={99} placeholder="5" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Share a picture"
                name="picture"
                rules={[
                  {
                    required: true,
                    message: "Please, share a picture of your instrument",
                  },
                ]}
              >
                <Upload listType="picture">
                  <Button block icon={<UploadSimple size={28} />}>
                    Select file
                  </Button>
                </Upload>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label="Add a caption"
            name="caption"
            rules={[
              {
                required: true,
                message: "Please, add something you want to say",
                whitespace: true,
              },
            ]}
          >
            <Input.TextArea
              autoSize={{ minRows: 2, maxRows: 5 }}
              className="input"
            />
          </Form.Item>
        </Form>
      </Modal>
    </ConfigProvider>
  );
}

PostForm.propTypes = {
  isFormOpen: PropTypes.bool,
  handlePostFormCancel: PropTypes.func,
  handlePostFormConfirm: PropTypes.func,
};

export default PostForm;

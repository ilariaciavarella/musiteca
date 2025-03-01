import { useState } from "react";
import axios from "axios";
import {
  Button,
  Col,
  ConfigProvider,
  Form,
  Input,
  Modal,
  Row,
  Upload,
  Spin,
} from "antd";
import PropTypes from "prop-types";
import { storage } from "../../assets/utils/firebase.js";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { UploadSimple } from "@phosphor-icons/react";
import "./post-form.scss";

function PostForm(props) {
  const token = localStorage.getItem("authToken");
  const [postForm] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPosting, setIsPosting] = useState(false);

  // Upload image on firebase
  async function uploadImage(file) {
    const imageStorageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(imageStorageRef, file);
    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          console.error(`Upload failed: ${error.message}`);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            resolve(url);
          });
        },
      );
    });
  }

  // Handle image before upload
  function handleBeforeUpload(file) {
    setSelectedImage(file);
    setFileList([
      {
        uid: file.uid,
        name: file.name,
        status: "done",
        url: URL.createObjectURL(file),
      },
    ]);

    if (file) {
      postForm.setFieldsValue({ picture: file });
    }
  }

  // Reset field when image is removed
  function removeImage() {
    setSelectedImage(null);
    setFileList([]);
    postForm.setFieldsValue({ picture: undefined });
    postForm.resetFields("picture");
  }

  // Handle submit post
  async function handlePost({ instrument, brand, age, caption }) {
    setIsPosting(true);
    let imageUrl = "";
    try {
      imageUrl = await uploadImage(selectedImage);
    } catch (error) {
      console.error(error.message);
    }

    axios
      .post(
        `${import.meta.env.VITE_API_URL}/api/posts/create`,
        {
          instrument: instrument,
          brand: brand,
          age: age,
          image: imageUrl,
          body: caption,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsPosting(false);
        setSelectedImage(null);
        setFileList([]);
        postForm.resetFields();
        props.handleClose();
        location.reload();
      });
  }

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
          Upload: {
            colorBorder: "#E2EE00",
            actionsColor: "#E2EE00",
          },
          Modal: {
            colorIcon: "#F9FAED",
          },
          Input: {
            colorTextDescription: "#E2EE00",
          },
        },
      }}
    >
      <Modal
        title="Lend your instrument"
        maskClosable={false}
        closable={!isPosting}
        open={props.isFormOpen}
        footer={false}
        onCancel={props.handleClose}
        destroyOnClose
      >
        <Spin spinning={isPosting} size="large">
          <Form
            layout="vertical"
            requiredMark={false}
            onFinish={handlePost}
            preserve={false}
            form={postForm}
          >
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
                  <Upload
                    listType="picture"
                    onRemove={removeImage}
                    beforeUpload={handleBeforeUpload}
                    fileList={fileList}
                    maxCount={1}
                    accept=".jpg,.jpeg,.png,.webp"
                    className="upload-preview"
                  >
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
                maxLength={250}
                showCount
              />
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Post
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </Modal>
    </ConfigProvider>
  );
}

PostForm.propTypes = {
  isFormOpen: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default PostForm;

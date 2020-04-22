import React, { useMemo, useState, useCallback } from "react";
import styles from "./online-request.module.css";
import Header from "../../header";
import { Title } from "../about-us/about-us";
import { useDropzone } from "react-dropzone";
import API from "../../../API";
import dragImage from '../../../images/dragNdropImage.png';

const OnlineRequest = () => {
  const [total, setTotal] = useState(0);
  const [passport, setPassport] = useState({});
  const [credit, setCredit] = useState("");
  //
  //    DROPZONE CONFIGURATION
  //
  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#150433",
    borderStyle: "dashed",
    backgroundColor: "inhetir",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  const activeStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      setPassport(file);

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  function StyledDropzone(props) {
    const {
      getRootProps,
      getInputProps,
      isDragActive,
      isDragAccept,
      isDragReject,
      acceptedFiles,
      open,
    } = useDropzone({
      noClick: true,
      noKeyboard: true,
      onDrop,
    });

    const style = useMemo(
      () => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {}),
      }),
      [isDragActive, isDragReject]
    );

    const files = acceptedFiles.map((file) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));

    return (
      <div className="container">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <img src={dragImage} alt='dragNdrop' />
          <p className={styles.dragTitle}>
            Перетащите файл и отпустите{" "}
            <br />
            <button
              type="button"
              className={styles.choose}
              onClick={open}
              onChange={(event) => setPassport(event.target.files)}
            >
             Или нажмите сюда для загрузки файла
            </button>
          </p>
        </div>
        {/* <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside> */}
      </div>
    );
  }

  //
  //      END OF DROPZONE CONFIGURATION
  //

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { total, passport, credit, user: 2 };
    console.log(data);
    // API.postOnlineRequestInfo(data);
    // props.history.push('/');
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <Title text={"Онлайн заявка на кредит"} />
      <div className={styles.content_wrapper}>
        <div className={styles.white_box}></div>
        <div className={styles.pink_image}>
          <div className={styles.pink_image_color}></div>
        </div>
        <div className={styles.content}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.left}>
              <p className={styles.form_title}>Введите ваши данные</p>
              <div className={styles.form_element}>
                <label htmlFor="credit">Вид кредита</label>
                <select onChange={(e) => setCredit(e.target.value)}>
                  <option value="Кредиты">Кредиты</option>
                  <option value="Потребительский">Потребительский</option>
                  <option value="Авто-кредит">Авто-кредит</option>
                  <option value="Агрокредит">Агрокредит</option>
                  <option value="Кредит на развитие бизнеса">
                    На развитие бизнеса
                  </option>
                  <option value="Ипотека">Ипотека</option>
                </select>
              </div>
              <div className={styles.form_element}>
                <label htmlFor="total">Сумма</label>
                <input
                  name="total"
                  type="number"
                  reqiured
                  placeholder="до 100 тыс. сомов"
                  onChange={(e) => setTotal(+e.target.value)}
                />
              </div>
              <div className={styles.form_element}>
                <label htmlFor="document">Документ</label>
                <input
                  name="file"
                  type="text"
                  reqiured
                  placeholder="документ"
                  value={passport.name}
                />
              </div>
            </div>
            <div className={styles.right}>
              <StyledDropzone />
              <button type="submit" className={styles.submit}>Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnlineRequest;

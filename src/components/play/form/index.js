import React, { useState, useCallback } from "react";
import styles from "./form.module.scss";
import ReactMarkdown from "react-markdown";
import CustomCheckbox from "../../createElement/customCheckbox";

import { api } from "../../../api/index";

import ReCAPTCHA from "react-google-recaptcha";

const sendInfo = (inValue, setsendedForm) => {
  api
    .createNewComment(inValue)
    .then((response) => {
      setsendedForm(true);
    })
    .catch((error) => {
      console.log(error);
    });
};

export function CommentForm({ showID }) {
  const [inValue, setInValue] = useState({
    name: "",
    title: "",
    text: "",
    play: showID,
  });
  const { name, title, text } = inValue;
  const [error, setError] = useState(false);
  const [sendedForm, setsendedForm] = useState(false);

  const updateInput = (e) => {
    const { name, value } = e.target;
    setInValue((inValue) => ({ ...inValue, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && title && text) {
      sendInfo(inValue, setsendedForm);
      setError(false);

      // For clear inputs after submit
      setInValue({ name: "", title: "", text: "" });
    } else {
      setError(true);
    }
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <section id="commentForm">
      <div className={styles.wrapper}>
        <div className={styles.formContent}>
          <h2>Оставьте отзыв</h2>
          {sendedForm && (
            <p className={styles.sendesForm}>Спасибо за ваш отзыв</p>
          )}
          <form noValidate onSubmit={handleSubmit}>
            <div className={styles.formFlex}>
              <div className={styles.inputBlock}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Ваше имя"
                    required
                    onChange={updateInput}
                  />
                  {error && !name && (
                    <span className={styles.warningMes}>Заполните поле</span>
                  )}
                </div>
                <div className={styles.formGroup}>
                  <input type="email" name="email" placeholder="Ваш e-mail" />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    placeholder="Тема сообщения"
                    required
                    onChange={updateInput}
                  />
                  {error && !title && (
                    <span className={styles.warningMes}>Заполните поле</span>
                  )}
                </div>
                <div>
                  <ReCAPTCHA
                    sitekey="6LeC1WQjAAAAAP8Wmgn5hs06R7hwOfsmlj8OCKfb"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className={styles.textareaBlock}>
                <textarea
                  placeholder="Сообщение"
                  rows="15"
                  name="text"
                  value={text}
                  required
                  onChange={updateInput}
                ></textarea>
                {error && !text && (
                  <span className={styles.warningMes}>Заполните поле</span>
                )}
                <div className={styles.checkboxBlock}>
                  <CustomCheckbox
                    id="storage"
                    name="storage"
                    label="Согласен на хранение и обработку данных"
                    checked={true}
                    className={styles.checkboxInput}
                  />
                  <div>
                    <a href="http://www.lunatheatre.ru/pages/polzovatelskoe-soglashenie">
                      Пользовательское соглашение
                    </a>
                  </div>
                </div>
                <div className={styles.buttonSubmit}>
                  <button type="submit">отправить</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

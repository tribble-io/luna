import React from "react";
import styles from "./form.module.scss";
import ReactMarkdown from "react-markdown";
import CustomCheckbox from "../../createElement/customCheckbox";

export function CommentForm() {
  return (
    <section id="commentForm">
      <div className={styles.wrapper}>
        <div className={styles.formContent}>
          <h2>Оставьте отзыв</h2>
          <form>
            <div className={styles.formFlex}>
              <div className={styles.inputBlock}>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="Ваше имя" required />
                </div>
                <div className={styles.formGroup}>
                  <input type="email" placeholder="Ваш e-mail" required />
                </div>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="Тема сообщения" required />
                </div>
              </div>
              <div className={styles.textareaBlock}>
                <textarea placeholder="Сообщение" rows="15" required></textarea>
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
                  <button>отправить</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

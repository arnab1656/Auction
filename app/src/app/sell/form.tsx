import { Button, Img, Input, SelectBox, Text, TextArea } from "ui";

import styles from "./styles.module.css";

const Form = () => {
  const categories = [
    "Wine and Whisky",
    "Antiquities",
    "Asian Art",
    "Spirits",
    "Modern Art",
    "Jewelry",
    "Rare Books",
    "Vintage Cars",
    "Contemporary Sculpture",
    "Fine Watches",
    // Add more categories as needed
  ];
  return (
    <section className={styles.topSection}>
      <section className={styles.formFaqLayoutForm}>
        <div className={styles.formBlock}>
          <form className={styles.formWrapper} action="POST">
            <div className={styles.inputWrapper}>
              <div className={styles.wrapper}>
                <label className={styles.labelClass}>
                  <span className={styles.spanClass}>Item Name</span>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="e.g. Antique Jar"
                    className={styles.inputClass}
                    maxLength="100"
                    id="id_first_name"
                  />
                  <span className={styles.spanClass2}></span>
                </label>
              </div>
              <div className={styles.wrapper}>
                <label className={styles.labelClass}>
                  <span className={styles.spanClass}>Sell Price</span>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="$ 100"
                    className={styles.inputClass}
                    maxLength="100"
                    id="id_first_name"
                  />
                  <span className={styles.spanClass2}></span>
                </label>
              </div>
              {/* <div className={styles.wrapper}>
                <label className={styles.labelClass}>
                  <span className={styles.spanClass}>First Name</span>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="e.g. James"
                    className={styles.inputClass}
                    maxLength="100"
                    id="id_first_name"
                  />
                  <span className={styles.spanClass2}></span>
                </label>
              </div> */}
              {/* <div className={styles.wrapper}>
                <label className={styles.labelClass}>
                  <span className={styles.spanClass}>Country</span>
                  <select
                    name="country"
                    className={styles.selectorClass}
                    id="id_country"
                    aria-invalid="false"
                  >
                    <option value="AFG">Afghanistan (‫افغانستان‬‎)</option>

                    <option value="ALA">Åland Islands</option>

                    <option value="ALB">Albania (Shqipëri)</option>

                    <option value="DZA">Algeria (‫الجزائر‬‎)</option>

                    <option value="ASM">American Samoa</option>

                    <option value="ZWE">Zimbabwe</option>
                  </select>
                  <span className="form-input__secondary-label"></span>
                </label>
              </div> */}
            </div>
            <div className={styles.categoryInputWrapper}>
              <h2 className={styles.categoryInputHeading}>
                Select a category<span aria-hidden="true"> *</span>
              </h2>
              <div className={styles.categoryInputGrouping}>
                <ul className={styles.categoryInputList}>
                  {categories.map((category, index) => (
                    <li key={index} className={styles.categoryInputListItem}>
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        className={styles.categoryInputRadio}
                        id={`id_category_${index}`}
                      />
                      <label
                        className={styles.categoryInputListLabel}
                        htmlFor={`id_category_${index}`}
                      >
                        <span className={styles.categoryInputListSpan}>
                          {category}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <span className="category-input__secondary-label"></span>
            </div>

            {/* jkhkaskh */}
            <div className={styles.formInput}>
              <label
                htmlFor="id_item_description"
                className={styles.formInputWrapperLabel}
              >
                <span className={styles.formInputPrimaryLabel}>
                  Item description
                </span>
                <span className={styles.formInputHelperWrapper}>
                  <textarea
                    name="item_description"
                    cols="40"
                    rows="5"
                    class={styles.formInputInput}
                    maxlength="2000"
                    id="id_item_description"
                  ></textarea>
                  <span className={styles.formInputHelperWrapperContent}>
                    E.g. Designer, material, colour, condition, size, supporting
                    documentation
                  </span>
                </span>
                <span className="form-input__secondary-label"></span>
              </label>
            </div>
            {/* jkhkas */}
            <div className={styles.uploadLayout}>
              <p className={styles.uploadLayoutCopy}>
                You can take a snapshot of the item with your mobile phone or
                upload existing photos. Please provide images of the front and
                back or top and bottom, and don't forget to include any
                signatures and certificates of authenticity.
              </p>
              <div id="drop-area">
                <button
                  type="button"
                  className={styles.uppyDragDropContainer}
                  // style="width: 100%; height: 100%;"
                >
                  <input
                    className={styles.uppyDragDropInput}
                    type="file"
                    hidden=""
                    name="files[]"
                    multiple=""
                    accept=".jpeg,.jpg,.gif,.bmp,.png,.webp,.heif,.heic,.pdf"
                  />
                  <div className={styles.uppyDragDropInner}>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className={styles.uppyDragDropArrow}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      {/* Camera icon */}
                      <circle
                        cx="8"
                        cy="8"
                        r="6"
                        fill="none"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                      <rect x="6" y="5" width="4" height="3" fill="black" />
                      <circle cx="8" cy="8" r="2" fill="black" />
                    </svg>
                    <div className={styles.uppyDragDropLabel}>
                      Upload photos (required)
                    </div>
                    <span className={styles.uppyDragDropNote}>
                      Maximum total upload file size: 20MB
                    </span>
                  </div>
                </button>
              </div>

              <div id="error-message">
                <span className="drop-area__error"></span>
              </div>
              <div id="upload-progression">
                <div
                  className={styles.uppyProgressBar}
                  aria-hidden="true"
                  // style="position: initial;"
                >
                  <div
                    className={styles.uppyProgressBarInner}

                    // style="width: 0%;"
                  ></div>
                  <div className={styles.uppyProgressBarPercentage}>50</div>
                </div>
              </div>
            </div>
            {/* ksank */}
            <button type="submit" className={styles.primaryButtonFullWidth}>
              Submit my item for Auction
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Form;

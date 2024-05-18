import styles from "./styles.module.css";

export const SellBox = () => {
  return (
    <section className={styles.sellArea}>
      <div className={styles.sellAreaWrapper}>
        <h2 className={styles.sellAreaHeading}>Why sell with Bonhams?</h2>
        <p className={styles.sellAreaSubheading}>
          With Bonhams specialists based in towns and cities worldwide, we are
          your local auction house.
        </p>
        <div className={styles.sellAreaGrouping}>
          <div className={styles.sellAreaItemDark}>
            <div className={styles.sellAreaItemWrapper}>
              <img
                src="https://sell.bonhams.com/static/assets/sellItem-1.f4dc5113414e.jpg"
                className={styles.sellAreaImg}
                alt=""
              />
              <p className={styles.sellAreaItemContent}>
                Local expertise. Global reach.
              </p>
            </div>
          </div>
          <div className={styles.sellAreaItemDark}>
            <div className={styles.sellAreaItemWrapper}>
              <img
                src="https://sell.bonhams.com/static/assets/sellItem-2.5b1203205e21.jpg"
                className={styles.sellAreaImg}
                alt=""
              />
              <p
                className={`${styles.sellAreaItemContent} ${styles.whiteText}`}
              >
                Virtual and in-person valuation service
              </p>
            </div>
          </div>
          <div className={styles.sellAreaItemDark}>
            <div className={styles.sellAreaItemWrapper}>
              <img
                src="https://sell.bonhams.com/static/assets/sellItem-3.ccc4f8e70b79.jpg"
                className={styles.sellAreaImg}
                alt=""
              />
              <p
                className={`${styles.sellAreaItemContent} ${styles.whiteText}`}
              >
                Specialists in over 60 collecting categories
              </p>
            </div>
          </div>

          <div className={styles.sellAreaItemDark}>
            <div className={styles.sellAreaItemWrapper}>
              <img
                src="https://sell.bonhams.com/static/assets/sellItem-4.426f2bcc12f1.jpg"
                className={styles.sellAreaImg}
                alt=""
              />
              <p
                className={`${styles.sellAreaItemContent} ${styles.whiteText}`}
              >
                A global network of clients and collectors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { openLinkInNewTab } from "@/utils/common";
import styles from "./style.module.scss";
import { SAINT_INSTAGRAM_URL, SOURAV_LINKEDIN_URL } from "@/constants/common";

export default function index() {
  return (
    <div className={styles.footer}>
      <a
        className="cursor-pointer"
        onClick={() => openLinkInNewTab(SAINT_INSTAGRAM_URL)}
      >
        Instagram
      </a>
      <a
        className="cursor-pointer"
        onClick={() => openLinkInNewTab(SOURAV_LINKEDIN_URL)}
      >
        LinkedIn
      </a>
    </div>
  );
}

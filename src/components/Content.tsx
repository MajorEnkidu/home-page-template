/** @format */
import styles from '@/styles/Content.module.css';

interface IContentProps { }

export default function Content(props: React.PropsWithChildren<IContentProps>) {
  return <div className={styles.content}>{props.children}</div>;
}

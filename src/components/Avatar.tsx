import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  src: string;
}

export function Avatar({
  hasBorder = true,
  src,
  ...rest
}: Readonly<AvatarProps>) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      {...rest}
    />
  );
}

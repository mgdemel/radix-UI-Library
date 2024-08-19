import { Link } from "@radix-ui/themes";

type Props = {
  text: string;
  onClick?: () => void;
  customStyles?: string;
};

export const TextButton = ({ text, onClick, customStyles }: Props) => {
  const baseStyles = "py-2 px-4 focus:outline-none ";
  const primary = " ";
  return (
    <Link
      weight="regular"
      className={`${baseStyles + (customStyles ?? primary)}`}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

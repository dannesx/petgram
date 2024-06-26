interface Props {
  path: string;
  text: string;
  textAlign?: 'start' | 'center' | 'end';
}

function Link({ path, text, textAlign = 'start' }: Props) {
  return (
    <a href={path} className={`text-primary font-medium w-full flex justify-${textAlign}`}>
      <span>{text}</span>
    </a>
  );
}
export default Link;

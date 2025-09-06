interface Props {
  title: string;
}

export const MyTitle = ({ title }: Props) => {
  console.log('MyTitle re-rendered');
  return <h1 className="text-3xl">{title}</h1>;
};

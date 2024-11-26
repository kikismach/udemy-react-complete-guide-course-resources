export interface ICoreConcept {
  title: string;
  description: string;
  imgUrl: string;
  imgAlt: string;
}

interface IProp {
  concept: ICoreConcept;
}

export default function CoreConceptItem({ concept }: IProp) {
  const { title, description, imgUrl, imgAlt } = concept;

  return (
    <li>
      <img src={imgUrl} alt={imgAlt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

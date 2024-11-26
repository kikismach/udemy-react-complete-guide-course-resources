import { CORE_CONCEPTS } from "../../data/concepts";
import CoreConceptItem, { ICoreConcept } from "./CoreConceptItem";

export default function CoreConcept() {
  return (
    <ul key={"coreConcept"}>
      {CORE_CONCEPTS.map((item) => {
        const { title, description, image } = item;
        var conceptItem: ICoreConcept = {
          title,
          description,
          imgUrl: image,
          imgAlt: item.title + "Image",
        };
        return (
          <CoreConceptItem
            key={title.toLocaleLowerCase()}
            concept={conceptItem}
          />
        );
      })}
    </ul>
  );
}

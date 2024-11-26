export interface IExample {
  title: string;
  description: string;
  code: string;
}

interface IProps {
  item: IExample | null;
}

export default function TabContent({ item }: IProps) {
  if (!item) {
    return (
      <section id="tab-content">
        <p>Please select a topic</p>
      </section>
    );
  }

  return (
    <section id="tab-content">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <pre>
        <code>{item.code}</code>
      </pre>
    </section>
  );
}

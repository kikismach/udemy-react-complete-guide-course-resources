import TabButton from "./TabButton";
import { useState } from "react";
import TabContent, { IExample } from "./TabContent";
import { EXAMPLES } from "../../data/examples";

export default function TabExample() {
  const [selectedExample, setSelectedExample] = useState<IExample | null>(null);

  function handleSelect(example: IExample) {
    setSelectedExample(example);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          key={EXAMPLES.components.title.toLocaleLowerCase()}
          onSelect={() => handleSelect(EXAMPLES.components)}
          isSelected={selectedExample === EXAMPLES.components}
        >
          Components
        </TabButton>
        <TabButton
          key={EXAMPLES.jsx.title.toLocaleLowerCase()}
          onSelect={() => handleSelect(EXAMPLES.jsx)}
          isSelected={selectedExample === EXAMPLES.jsx}
        >
          JSX
        </TabButton>
        <TabButton
          key={EXAMPLES.props.title.toLocaleLowerCase()}
          onSelect={() => handleSelect(EXAMPLES.props)}
          isSelected={selectedExample === EXAMPLES.props}
        >
          Props
        </TabButton>
        <TabButton
          key={EXAMPLES.state.title.toLocaleLowerCase()}
          onSelect={() => handleSelect(EXAMPLES.state)}
          isSelected={selectedExample === EXAMPLES.state}
        >
          State
        </TabButton>
      </menu>
      <TabContent item={selectedExample} />
    </section>
  );
}

import React from "react";
import Workflow from "./workflow";

type Props = {};

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        <Workflow description="ha" id="a38u" name="hi" publish={false} />
      </section>
    </div>
  );
};

export default Workflows;

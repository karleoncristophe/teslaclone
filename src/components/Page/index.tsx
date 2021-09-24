import React from "react";
import DefaultOverlayContent from "../DefaultOverlayContent";
import { ModelSection, ModelsWrapper } from "../Model";
import UniqueOverlay from "../UniqueOverlay";

import { Container, Spacer } from "./styles";

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            "Model S",
            "Model Y",
            "Model 3",
            "Model X",
            "Model Lowest Cost Solar Panels in America",
            "Solar for New Roofs",
            "Accessories",
          ].map((modelName) => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="
              Order Online for Touchless Delivery"
                />
              }
            />
          ))}
        </div>
        <Spacer />
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;

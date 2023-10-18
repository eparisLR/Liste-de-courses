import { IStep, Step } from "@/modules/recipes/recipes.types";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { StepsListProps } from "./steps-list.type";

const StepsList = ({ handleStepsChanges }: StepsListProps) => {
  const [steps, setSteps] = useState([] as IStep[]);
  const [stepTitle, setStepTitle] = useState("");
  const [stepDescription, setStepDesription] = useState("");

  function handleOnAddIngredient(ingredient: IStep) {}
  return (
    <div className="flex gap-2">
      {steps &&
        steps.map((step) => (
          <div key={step.name.toLowerCase().replace(" ", "_")}>
            <h2>{step.name}</h2>
            <p>{step.instructions}</p>
          </div>
        ))}
      <Textarea
        label="Instructions"
        labelPlacement="outside"
        placeholder="Entrez les instructions pour cette étape"
        className="max-w-xs"
        onChange={(event) => setStepDesription(event.currentTarget.value)}
      />
      <Input
        name="stepTitle"
        type="text"
        label="Titre de l'étape"
        onChange={(event) => setStepTitle(event.currentTarget.value)}
      />
      <Button
        onClick={() => {
          const updatedSteps = [
            ...steps,
            { name: stepTitle, instructions: stepDescription } as Step,
          ];
          setSteps(updatedSteps);
          handleStepsChanges(updatedSteps);
        }}
      >
        Ajouter l&apos;&eacute;tape
      </Button>
    </div>
  );
};

export default StepsList;

import { IStep, Step } from "../../modules/recipes/recipes.types";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { StepsListProps } from "./steps-list.type";

const StepsList = ({ handleStepsChanges, recipeSteps }: StepsListProps) => {
  const [steps, setSteps] = useState(recipeSteps ? recipeSteps : []);
  const [stepTitle, setStepTitle] = useState("");
  const [stepDescription, setStepDesription] = useState("");

  return (
    <div className="flex flex-col gap-2 w-2/4 bg-zinc-100 p-2 rounded">
      <div className="flex flex-col w-full">
        <Input
          name="stepTitle"
          type="text"
          label="Titre de l'étape"
          onChange={(event) => setStepTitle(event.currentTarget.value)}
        />
        <Textarea
          label="Instructions"
          labelPlacement="outside"
          name="stepInstrucions"
          placeholder="Entrez les instructions pour cette étape"
          onChange={(event) => setStepDesription(event.currentTarget.value)}
        />
        <Button
          onClick={() => {
            const updatedSteps = [
              ...steps,
              { name: stepTitle, instructions: stepDescription } as Step,
            ];
            setSteps(updatedSteps);
            handleStepsChanges(updatedSteps);
            (
              document.querySelector(
                "input[name='stepTitle']"
              ) as HTMLInputElement
            ).value = "";
            (
              document.querySelector(
                "textarea[name='stepInstrucions']"
              ) as HTMLTextAreaElement
            ).value = "";
          }}
        >
          Ajouter l&apos;&eacute;tape
        </Button>
      </div>
      {steps &&
        steps.map((step) => (
          <div key={step.name.toLowerCase().replace(" ", "_")}>
            <h2>{step.name}</h2>
            <p>{step.instructions}</p>
          </div>
        ))}
    </div>
  );
};

export default StepsList;

import { Step } from "../../../modules/recipes/recipes.types";
import { StepsListProps } from "./steps-list.type";

const StepsList = ({ handleStepsChanges, recipeSteps }: StepsListProps) => {
  let steps = recipeSteps ? recipeSteps : [];
  let stepTitle = "";
  let stepDescription = "";

  return (
    <div className="flex flex-col gap-2 w-2/4 bg-zinc-100 p-2 rounded">
      <div className="flex flex-col w-full">
        <input
          name="stepTitle"
          type="text"
          onChange={(event) => (stepTitle = event.currentTarget.value)}
        />
        <textarea
          name="stepInstrucions"
          placeholder="Entrez les instructions pour cette étape"
          onChange={(event) => (stepDescription = event.currentTarget.value)}
        />
        <button
          onClick={() => {
            const updatedSteps = [
              ...steps,
              { name: stepTitle, instructions: stepDescription } as Step,
            ];
            steps = updatedSteps;
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
        </button>
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

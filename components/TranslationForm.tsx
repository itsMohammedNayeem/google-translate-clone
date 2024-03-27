"use client";

import translate from "@/actions/translate";
import { TranslationLanguages } from "@/app/translate/page";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useFormState } from "react-dom";

const initialState = {
  inputLanguage: "auto",
  outputLanguage: "es",
  input: "",
  output: "",
};

export type State = typeof initialState;

const TranslationForm = ({
  languages,
}: {
  languages: TranslationLanguages;
}) => {
  const [state, formAction] = useFormState(translate, initialState);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div>
      <form action={formAction}>
        <div>
          <Select name="inputLanguage" defaultValue="auto">
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>Want us to figure it out?</SelectLabel>

                <SelectItem value="auto" key="auto">
                  Auto-Detection
                </SelectItem>
              </SelectGroup>

              <SelectGroup>
                <SelectLabel>Language</SelectLabel>

                {Object.entries(languages.translation).map(([key, value]) => (
                  <SelectItem value={key} key={key}>
                    {value.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Textarea
            placeholder="Enter text to translate"
            className="min-h-32 text-xl"
            name="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div>
          <Select name="outputLanguage" defaultValue="es">
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>Want us to figure it out?</SelectLabel>

                <SelectItem value="auto" key="auto">
                  Auto-Detection
                </SelectItem>
              </SelectGroup>

              <SelectGroup>
                <SelectLabel>Language</SelectLabel>

                {Object.entries(languages.translation).map(([key, value]) => (
                  <SelectItem value={key} key={key}>
                    {value.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Textarea
            placeholder="Enter text to translate"
            className="min-h-32 text-xl"
            name="output"
            value={output}
            onChange={(e) => setOutput(e.target.value)}
          />
        </div>

        <div>
          <button type="submit" className="">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TranslationForm;

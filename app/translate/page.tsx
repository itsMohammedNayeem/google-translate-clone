import TranslationForm from "@/components/TranslationForm";
import TranslationHistory from "@/components/TranslationHistory";
import { auth } from "@clerk/nextjs/server";
import React from "react";

export type TranslationLanguages = {
  translation: {
    [key: string]: {
      name: string;
      nativeName: string;
      dir: "ltr" | "rtl";
    };
  };
};

const TranslatePage = async () => {
  auth().protect();

  const { userId } = auth();
  if (!userId) throw new Error("User not logged in");

  const languagesEndpoint =
    "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0";

  const response = await fetch(languagesEndpoint, {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });

  const languages = (await response.json()) as TranslationLanguages;

  return (
    <div className="">
      {/* Translation Form */}
      <TranslationForm languages={languages} />

      {/* Translation History */}
      <TranslationHistory />
    </div>
  );
};

export default TranslatePage;

import React from "react";
import TypographyH1 from "../_components/typography/typography-h1";
import Image from "next/image";
import WordCloudGeneratorLogo from "../../public/assets/textcloud-generator/textcloud-generator-logo.svg";
import TypographyLead from "../_components/typography/typography-lead";
import TypographyH2 from "../_components/typography/typography-h2";

export default function page() {
  return (
    <div className="px-2 md:px-10 mx-auto flex justify-center items-center pt-4">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={WordCloudGeneratorLogo}
          width={200}
          height={200}
          alt="Word Cloud Generator Logo"
          className="mb-4"
        />
        <TypographyH1 className="text-center mb-4">
          Text Cloud Generator
        </TypographyH1>
        <TypographyLead className="text-2xl text-center w-1/2">
          A dynamic Text Cloud App Generator designed specifically for Microsoft
          Office, transforming your text data into visually word clouds.
        </TypographyLead>

        {/* FAQ */}
        <div className="mt-24">
          <TypographyH2 className="mb-8">FAQ</TypographyH2>

          <div className="mb-6">
            <p className="font-bold text-body text-white mb-2">
              What is the Text Cloud Generator App?
            </p>
            <p className="text-white opacity-80">
              The Text Cloud Generator App is a tool designed to create visually
              appealing word clouds from text data. It analyzes the frequency of
              words within a given text and represents them in varying sizes,
              colors, and fonts, turning textual information into a captivating
              visual representation.
            </p>
          </div>

          <div className="mb-6">
            <p className="font-bold text-body text-white mb-2">
              How do I use the Text Cloud Generator App?
            </p>

            <p className="text-white opacity-80">
              Start by pasting your text data into the designated area.
              Customize: Choose word length, including font (comming soon.) The
              visual representation of the word cloud will be displayed in real
              time. Click the "Insert Wordcloud" button to insert your word
              cloud into Word document. You can also download it in PNG format.
            </p>
          </div>

          <div className="mb-6">
            <p className="font-bold text-body text-white mb-2">
              Which platforms is the app compatible with?
            </p>
            <p className="text-white opacity-80">
              The Text Cloud Generator App is designed for Microsoft Word,
              ensuring smooth integration.
            </p>
          </div>

          <div className="mb-6">
            <p className="font-bold text-body text-white mb-2">
              Can I customize the appearance of my word cloud?
            </p>

            <p className="text-white opacity-80">
              That feature is comming soon.
            </p>
          </div>

          <div className="mb-6">
            <p className="font-bold text-body text-white mb-2">
              Is there a limit to the amount of text I can input?
            </p>
            <p className="text-white opacity-80">
              While there's no strict limit, extremely long texts may take
              longer to process. For optimal performance and clarity in your
              word cloud, we recommend concise and focused text inputs.
            </p>
          </div>

          <div className="mb-6">
            <p className="font-bold text-body text-white mb-2">
              Is my data safe?
            </p>

            <p className="text-white opacity-80">
              Yes, your privacy and data security are our top priorities. The
              text data you input is processed securely and is not stored or
              used beyond the generation of your word cloud.
            </p>
          </div>

          <div className="mb-6">
            <p className="font-bold text-body text-white mb-2">
              What should I do if I encounter issues with the app?
            </p>

            <p className="text-white opacity-80">
              If you experience any issues or have further questions, please
              contact our support team through the app's "Help" section. We are
              committed to providing timely and helpful assistance or{" "}
              <a className="underline" href="mailto:hello@florianbarbato.com">
                contact us here
              </a>
              .
            </p>
          </div>
        </div>
        <p className="text-white py-8 opacity-70 text-sm">
          Copyright 2024 - Text Cloud Generator made by Florian Barbato
        </p>
      </div>
    </div>
  );
}

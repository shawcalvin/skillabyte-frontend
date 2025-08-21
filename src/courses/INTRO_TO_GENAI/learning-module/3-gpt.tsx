"use client"

import { ModuleContainer } from "@/components/interactive/modules";
import { Tile } from "@/components/ui/tile";
import { Image } from "@/components/ui/media";
import { ListItem, Strong, Text, UnorderedList } from "@/components/ui/text";
import { LearningModulePageProps } from "@/lib/types/modules";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"What does GPT Mean?"} {...props}>
                <Text>
                    Generative pre-trained transformer (GPT) models, like ChatGPT, are a particular type of GenAI, widely discussed in the popular press. See the graphic below, which explains what each part of GPT means.
                </Text>
                <Image
                    src="https://skillabyte-public.s3.us-west-1.amazonaws.com/courses/intro-genai/gpt.png"
                    alt="AI Vocabulary Coaching Analogy"
                    size="32rem"
                    center
                    className="m-4 rounded-lg"
                />
                <Text>
                    This architecture allows GPT models to consider the context of each word, enabling them to generate coherent, relevant text (or other outputs). They excel in tasks like translation, summarization, question-answering, and content creation, making them versatile tools.
                </Text>
                <Text>
                    How do GPTs function behind the scenes? They process an enormous array of data, which can include text, images, and videos, often amounting to millions or even billions of data entries for text-based models. This information is used to create a vast numerical matrix that represents the relationships between different concepts. For instance, if the term “bark” is used, the model learns to differentiate between the sound a dog makes and the outer layer of a tree based on how these terms appear in various contexts. By analyzing these patterns, the model learns the nuances of language, allowing it to generate relevant and contextually accurate text. So, if a sentence starts with “The bark was loud,” the model understands it&apos;s referring to the sound a dog makes and not the tree&apos;s outer layer.
                </Text>
                <Text>
                    This model&apos;s performance can be enhanced through a process called “fine-tuning,” which involves refining a pre-trained model by training it on a smaller, more targeted dataset. This helps the model specialize in particular tasks or improve accuracy in specific areas. During fine-tuning, the numerical values in the model&apos;s matrix are adjusted, altering how it makes predictions. For instance, a company might license a model like ChatGPT-4, then fine-tune it with their proprietary data to make its responses more precise and relevant to their unique requirements.
                </Text>
                <Text>
                    Alternatively, instead of fine-tuning, companies might simply tweak the prompts they use. Prompts are the inputs or questions given to the model to elicit desired responses. Unlike fine-tuning, changing a prompt does not modify the internal numbers in the model&apos;s matrix but rather influences how the model interprets and responds to the input based on the existing configuration.
                </Text>
                <Text>
                    Before committing to fine-tuning, organizations should carefully weigh its potential advantages against the costs involved. Fine-tuning can be expensive and doesn&apos;t always yield significantly better results. Companies should assess whether their specific use case, the quality and scale of their data, and the anticipated performance enhancements justify the investment. In many cases, simply adjusting the prompts used with a pre-trained model can effectively meet their needs, making full-scale fine-tuning unnecessary.
                </Text>
                <Text>
                    In practice, people often talk about “training a model” and are often not clear what they mean. A technical definition of training a model is creating the original model or doing the fine tuning that adjusts the numbers that are part of the model weights. However, when people talk about training they often mean they will adjust the prompt get a different output. You should use care to use the language of training and editing a prompt appropriately.
                </Text>
                <Text>
                    Let&apos;s show how the LLM works using a classic joke, “Why don&apos;t scientists trust atoms?” When this prompt is input into an LLM, it processes the information through a complex network of numerical representations that capture relationships between words and concepts. The model then generates a series of potential responses by predicting the most probable next words in sequence.
                </Text>
                <Text>
                    Depending on the model&apos;s configuration, it might produce responses such as:
                </Text>
                <UnorderedList>
                    <ListItem><Text><Strong>&quot;Because they make everything up.&quot;</Strong> or</Text></ListItem>
                    <ListItem><Text><Strong>&quot;Because they&apos;re always in an unstable state.&quot;</Strong></Text></ListItem>
                </UnorderedList>
                <Text>
                    These outputs demonstrate the model&apos;s capacity to generate contextually appropriate and witty responses based on the input. The model recognizes that this is a joke and gives a response. However, the model in some instances may not recognize this as a joke and respond with something like:
                </Text>
                <Tile center>
                    <Text>
                        <Strong>
                            &quot;Scientists <span className="italic">do</span> trust atoms because they are well-understood in the context of modern physics and chemistry. Atoms are the fundamental units of matter, composed of protons, neutrons, and electrons, and their behavior is predictable based on established theories such as quantum mechanics and atomic theory. These models have been extensively tested through experiments and observations, confirming that atoms are reliable building blocks for understanding the physical world.&quot;
                        </Strong>
                    </Text>
                </Tile>
                <Text>
                    In this situation, the model interpreted the prompt as a literal questions and responded accordingly. How a model interprets a prompt is part random and part based on what else is included in the prompt of the conversation before the prompt is given.
                </Text>
                <Text>
                    It is again worth emphasizing that the model doesn&apos;t always produce identical responses due to inherent variability in its generation process. This variability is influenced by a parameter known as “temperature,” which can be adjusted to control the balance between predictability and creativity in the model&apos;s outputs.
                </Text>
                <Text>
                    A lower temperature setting encourages the model to choose the most probable next word, resulting in more consistent but potentially less creative responses. Conversely, a higher temperature allows for more diverse word choices, leading to varied and sometimes unexpected outputs.
                </Text>
                <Text>
                    For example, given the same prompt about distrustful scientists and atoms, the model might generate an alternative response: <Strong>&quot;Because they&apos;re too small to keep an ion.&quot;</Strong>
                </Text>
                <Text>
                    Notice how the model can interpret the prompt differently based on its probabilistic generation process or additional contextual information. While this variability enables engaging and dynamic interactions, it also means that the model may not consistently produce the same answer for repeated queries. This characteristic can be advantageous for creative applications but may pose challenges in scenarios where output consistency is crucial, like many accounting applications.
                </Text>
                <Text>
                    In essence, the interplay between the model&apos;s vast knowledge base and its controlled randomness allows for a range of responses that can be informative, humorous, or thought-provoking, depending on the specific prompt and parameter settings.
                </Text>
            </ModuleContainer >
        </>
    );
}
---
sidebar_position: 3
---

import RainbowText from '@site/src/components/RainbowText';

# Generative AI Projects

## Software applications

### Using generative AI in software applications

Supervised learning for restaurant reputation monitoring

Using supervised learning, collecting a large amount of data, labeling it, the AI team trains AI models based on this data, and deploys them to cloud servers.

![Alt text](img/Generative-AI-Projects-image.png)

Prompt-based development

![Alt text](img/Generative-AI-Projects-image-1.png)

### Trying generative AI code yourself

[activity](https://learn.deeplearning.ai/genai4e/lesson/1/activity1)

![Alt text](img/Generative-AI-Projects-image-2.png)

### Lifecycle of a generative AI project

![Alt text](img/Generative-AI-Projects-image-3.png)

Cost intuition

![Alt text](img/Generative-AI-Projects-image-4.png)

What is a token?

- <RainbowText texts={[{content: 'hello world'}]} /> 1 token
- <RainbowText texts={[{content: 'tran'}, {content: 'slate'}]} /> 2 tokens
- <RainbowText texts={[{content: 'ton'}, {content: 'k'}, {content: 'ots'}, {content: 'u'}]} /> 4 tokens

Roughly, 1 token = 3/4 words

## Advanced technologies: Beyond prompting

### Retrieval Augmented Generation (RAG)

Significantly expanding capabilities by providing data beyond the internet or other open sources.

![Alt text](img/Generative-AI-Projects-image-5.png)

![Alt text](img/Generative-AI-Projects-image-6.png)

LLM as reasoning engine

### Fine-tuning

![Alt text](img/Generative-AI-Projects-image-7.png)

- Summarize in certain style or structure
- Minicking a writing or speaking style

Fine-tune: to help LLM gain specific knowledge

![Alt text](img/Generative-AI-Projects-image-8.png)

![Alt text](img/Generative-AI-Projects-image-9.png)

### Pretraining an LLM

Very expensive, but effective.

### Choosing a model

Model size:
| size | description | case |
| --- | --- | --- |
| 1B parameters | Pattern matching and basic knowledge of the world. | Restaurant review sentiment|
| 10B parameters | Greater world knowledge. Can follow basic instructions. | Food order chatbot|
| 100B+ | Rich world knowledge. Complex reasoning. | Brainstorming partner|

Closed or open source:

| Closed-source models (Cloud programming interface)                                                           | Open-source models                                                                                             |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| Easy to use in applications; More large/powerful models; Relatively inexpensive; Some risk of vendor lock-in | Full control over model; Can run on your own device (on-prem, PC, etc.); Full control over data privacy/access |

### How LLMs follow instructions

![Alt text](img/Generative-AI-Projects-image-10.png)

Tool use and agents

Tool use for food order taking

![Alt text](img/Generative-AI-Projects-image-11.png)

![Alt text](img/Generative-AI-Projects-image-12.png)

Tools for reasoning

![Alt text](img/Generative-AI-Projects-image-13.png)

![Alt text](img/Generative-AI-Projects-image-14.png)

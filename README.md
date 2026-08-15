# Mariam's AI Career Assistant

A rule-based interactive assistant that helps visitors explore Mariam Mohammed Abdelgawad's academic background, projects, internship experience, technical skills, and career interests.

The assistant is designed for recruiters, employers, students, and other visitors who want to learn about Mariam's profile through a simple question-and-answer interface instead of only reading a traditional CV.

## Demo

**Live Assistant:**
https://mariam-abdelgawad.github.io/ai-portfolio/mariam_career_assistant.html

**Demo Video:**
https://youtu.be/8EEu2nKD1YY

The demo video shows a live end-to-end run of the assistant, including normal profile questions and a guardrail example where the assistant refuses to invent information that is not included in the profile.

---

## What the Agent Does

The AI Career Assistant answers questions about information included in Mariam's confirmed profile.

It can provide information about:

* Education
* GPA and expected graduation
* FlyRank AI internship
* Academic and technical projects
* Technical skills
* AI tools and AI Fluency work
* Career interests
* Contact information
* Volunteer experience

The assistant is intentionally limited to information that has been confirmed for the profile.

If a user asks about information that is not included, the assistant uses a fallback response instead of making up an answer.

For example, if a user asks about experience with a technology that is not included in the profile, the assistant can respond that the information is not currently included in Mariam's profile.

---

## Who It Is For

The main users are:

* Recruiters
* Internship reviewers
* Potential employers
* Students or peers
* Anyone interested in Mariam's academic and technical background

The goal is to make the portfolio easier to explore and give visitors a simple way to ask questions about the information already presented in the portfolio.

---

## Main Design Decision

I chose to build the first version as a **rule-based Q&A assistant** rather than a fully generative AI system.

The reason is accuracy.

The assistant represents my real academic and professional background, so I wanted every answer to come from confirmed profile information.

A generative model could make the interaction more flexible, but it could also introduce information that I did not provide.

With the rule-based approach, the available information is controlled and the assistant can fall back to a safe response when a question is outside the profile.

---

## How It Works

The assistant receives a user's question through the chat interface.

The question is then matched against predefined topics and keywords.

When a matching topic is found, the assistant returns the corresponding information from the profile data.

If no relevant topic is detected, the assistant returns a fallback response indicating that the information is not currently included in the profile.

### Simple Data Flow

```text
User
  |
  v
Types a question
  |
  v
Question matching
  |
  +----------------------+
  |                      |
  | Match found          | No relevant match
  v                      v
Profile information      Fallback response
  |                      |
  +----------+-----------+
             |
             v
        Assistant response
```

The important part of this design is that the assistant does not generate new profile facts. It retrieves responses from the information defined for the assistant.

---

## Architecture

The project consists of a standalone HTML page containing the assistant interface and the logic required to process questions.

### Main components

```text
mariam_career_assistant.html
│
├── User Interface
│   ├── Assistant introduction
│   ├── Suggested questions
│   ├── Chat messages
│   └── User input
│
├── Profile Data
│   ├── Education
│   ├── Experience
│   ├── Projects
│   ├── Skills
│   └── Career information
│
└── Question Handling
    ├── Keyword/topic matching
    ├── Response selection
    └── Fallback / guardrail response
```

The assistant is hosted as part of my GitHub Pages portfolio.

---

## Setup

The assistant does not require a database, API key, or external AI model to run.

### Requirements

* A web browser
* The project files
* Internet connection for the live GitHub Pages version

### Running Locally

1. Download or clone the portfolio repository.
2. Make sure `mariam_career_assistant.html` is in the same project directory as the other portfolio HTML files.
3. Open `mariam_career_assistant.html` in a web browser.

The assistant can also be accessed directly from the live portfolio:

https://mariam-abdelgawad.github.io/ai-portfolio/mariam_career_assistant.html

No separate backend setup is required for the current version.

---

## Usage

A visitor can either click one of the suggested questions or type a question into the input field.

### Example Questions

```text
Who is Mariam?

What is her education background?

Tell me about the FlyRank internship.

What projects has she worked on?

What are her technical skills?

What is Mariam's career direction?
```

The assistant responds based on the corresponding information in the profile.

### Guardrail Example

A user can also ask about something that is not included in the profile.

For example:

```text
What is Mariam's experience with TensorFlow?
```

If TensorFlow experience is not included in the profile, the assistant does not create an answer claiming that Mariam has TensorFlow experience.

Instead, it uses the fallback response.

This is an intentional part of the design.

---

## Evaluation / V2 Testing

For the second version, I tested the assistant using both normal profile questions and questions outside the confirmed profile.

### Test 1 — General Profile Question

**Question:**

```text
Who is Mariam?
```

**Expected behavior:**

Return a concise overview of Mariam's academic background, projects, internship experience, and career direction.

**Result:**

Pass — the assistant returned profile information.

---

### Test 2 — Education

**Question:**

```text
What is her education background?
```

**Expected behavior:**

Return the confirmed university, major, current year, expected graduation year, and GPA.

**Result:**

Pass — the assistant returned the available education information.

---

### Test 3 — Internship

**Question:**

```text
Tell me about the FlyRank internship.
```

**Expected behavior:**

Explain the FlyRank AI Fluency experience without presenting it as professional AI engineering employment.

**Result:**

Pass — the assistant returned the relevant internship information.

---

### Test 4 — Projects

**Question:**

```text
What projects has she worked on?
```

**Expected behavior:**

Return projects included in the profile.

**Result:**

Pass — the assistant returned the available project information.

---

### Test 5 — Technical Skills

**Question:**

```text
What are her technical skills?
```

**Expected behavior:**

Return the confirmed technical skills included in the profile.

**Result:**

Pass — the assistant returned the available skills.

---

### Test 6 — Out-of-Profile Question / Guardrail

**Question:**

```text
What is Mariam's experience with TensorFlow?
```

**Expected behavior:**

Do not invent TensorFlow experience.

**Result:**

Pass — the assistant uses its fallback behavior when the requested information is not included in the profile.

---

## Limitations

The current version has several limitations.

### 1. Keyword-Based Matching

The assistant uses predefined keywords and topics to identify what the user is asking.

Because of this, differently worded questions may not always match the intended topic.

For example, a question that uses completely different wording from the predefined patterns may receive the fallback response even when related information exists.

### 2. Not a Fully Generative AI Model

The current version does not make a live call to an LLM such as Claude or ChatGPT.

It uses predefined profile information and response logic.

This makes the assistant more controlled, but less flexible than a generative AI assistant.

### 3. Fixed Profile Information

The assistant only knows the information that was included in its profile data.

If new projects, skills, certifications, or experiences are added later, the profile data and responses need to be updated.

### 4. No Conversation Memory

The current version is designed around individual questions and predefined responses rather than maintaining a long conversation history.

---

## Why the Guardrail Matters

The most important guardrail is preventing the assistant from inventing information about my background.

A career assistant represents a real person's experience, so an incorrect answer could make the portfolio misleading.

The fallback behavior makes the boundary of the assistant clear:

> If the information is not included in the profile, the assistant should not pretend that it knows the answer.

---

## What I Learned

This project helped me understand that building an assistant is not only about making it answer questions.

I also had to think about:

* What information the assistant is allowed to use
* How questions are mapped to information
* How to handle questions outside the available data
* How to prevent unsupported claims
* How to make the assistant useful while keeping its behavior predictable

The project also showed me the trade-off between flexibility and control.

A generative AI system could understand more variations of the same question, but the rule-based version gives me tighter control over the information that can be returned.

---

## Future Improvements

Possible future improvements include:

* More flexible natural-language question matching
* A larger set of supported questions
* Better handling of differently worded questions
* More conversational interactions
* Connecting the assistant to a controlled knowledge source
* Adding an LLM while keeping the profile-data guardrail

These are future possibilities and are not part of the current implementation.

---

## Project Status

**Status:** Completed

**Type:** Interactive portfolio feature

**Deployment:** GitHub Pages

**Architecture:** Rule-based Q&A

**External AI API:** Not required for the current version

**Live Assistant:**
https://mariam-abdelgawad.github.io/ai-portfolio/mariam_career_assistant.html

**Demo Video:**
https://youtu.be/8EEu2nKD1YY

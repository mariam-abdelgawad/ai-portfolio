# Mariam's AI Career Assistant

A rule-based interactive career assistant that answers questions about Mariam's education, internship, projects, technical skills, certifications, career interests, and contact information.

The assistant is designed to provide information based only on Mariam's confirmed profile data.

---

## What the Assistant Does

The assistant allows a user to ask questions about Mariam's profile through a chat-style interface.

It can provide information about:

* Education
* GPA and expected graduation
* FlyRank AI internship
* IoT Solar Panel Performance Monitoring System
* Image Interpolation in MATLAB
* Audio Amplifier using LM386 IC
* Certifications
* Technical skills
* Career interests
* Volunteer experience
* Contact information

The assistant also provides suggested questions that users can click instead of typing their own question.

---

## Who It Is For

The assistant is intended for people who want to learn about Mariam's academic and technical background.

Users can ask questions about her:

* Education
* Internship
* Projects
* Skills
* Career interests
* Contact information

---

## How It Works

The assistant uses a **rule-based, keyword-based question matching system**.

When a user enters a question:

1. The question is converted to lowercase.
2. The assistant checks the question against predefined topics and keywords.
3. It selects the topic with the matching keyword.
4. It returns the corresponding information from the profile.
5. If no relevant topic is detected, it returns a fallback response.

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

---

## Architecture

The assistant is implemented in a single HTML file:

```text
mariam_career_assistant.html
|
├── User Interface
│   ├── Assistant introduction
│   ├── Suggested questions
│   ├── Chat messages
│   └── User input
│
├── Profile Data
│   ├── Education
│   ├── Internship
│   ├── Projects
│   ├── Certifications
│   ├── Skills
│   ├── Career information
│   └── Contact information
│
└── Question Handling
    ├── Keyword matching
    ├── Intent selection
    ├── Response selection
    └── Fallback response
```

The profile information is stored in the `PROFILE` and `ANSWERS` objects inside the HTML file.

The question topics are defined in the `INTENTS` array.

---

## Setup

The assistant does not require a database, API key, or external AI model.

### Requirements

* A web browser
* The `mariam_career_assistant.html` file

### Running Locally

1. Save the project file as:

```text
mariam_career_assistant.html
```

2. Open the file in a web browser.
3. Use the suggested questions or type a question into the input field.

---

## Usage

A user can either click one of the suggested questions or type a custom question.

### Example Questions

```text
Who is Mariam?

What is her education background?

Tell me about the FlyRank internship

What projects has she worked on?

What are her technical skills?

What is she looking for in a career?

How can I contact her?
```

The assistant then returns the corresponding profile information.

---

## Guardrail

One important part of the assistant is that it should not invent information that is not included in the profile.

If the question does not match one of the predefined topics, the assistant returns:

```text
That information is not currently included in Mariam's profile.
```

For example, asking about a technology that is not included in the profile results in the fallback response instead of an invented experience claim.

This keeps the assistant's answers limited to the information defined in the profile.

---

## Main Design Decision

I chose a **rule-based approach** instead of connecting the assistant to a generative AI model.

The main reason is control over the information returned by the assistant.

The assistant represents a real person's profile, so the responses need to stay within the information that has been defined and confirmed.

Using predefined topics, keywords, and responses makes the assistant's behavior predictable and prevents it from generating unsupported profile information.

---

## Technical Implementation

The assistant uses:

* HTML for the page structure
* CSS for the interface styling
* JavaScript for the assistant logic

The JavaScript handles:

* Profile data
* Predefined answers
* Keyword matching
* Question handling
* Chat message rendering
* Suggested questions
* Typing animation
* Fallback responses

The interface includes:

* Profile/avatar area
* Assistant title
* Online status indicator
* Chat message area
* Suggested-question buttons
* Text input
* Ask button

---

## Limitations

### 1. Keyword-Based Matching

The assistant relies on predefined keywords.

Because of this, differently worded questions may not always match the intended topic.

### 2. Not a Generative AI Model

The current version does not connect to an external AI model.

It uses predefined profile information and JavaScript response logic.

### 3. Fixed Profile Information

The assistant only knows the information stored in its profile data.

If the profile changes, the corresponding information and responses need to be updated in the code.

### 4. No Conversation Memory

The assistant handles individual questions and predefined responses.

It does not maintain a long conversation history.

---

## What I Learned

This project helped me understand how a personal assistant can be built around a controlled set of information.

I learned how to:

* Organize profile information into structured data
* Match user questions to predefined topics
* Return different responses based on the detected topic
* Handle questions outside the available information
* Use a guardrail to avoid unsupported claims
* Build a simple interactive chat-style interface

The project also showed the trade-off between flexibility and control: a generative system could handle more variations of questions, while a rule-based system provides tighter control over the information returned.

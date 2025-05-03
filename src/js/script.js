
// Show/hide the "Other Industry" field based on selection
document.getElementById('industry').addEventListener('change', function () {
  const otherIndustryContainer = document.getElementById('otherIndustryContainer');
  const otherIndustryField = document.getElementById('otherIndustry');

  if (this.value === 'other') {
    otherIndustryContainer.classList.remove('hidden');
    otherIndustryContainer.classList.add('fade-in');
    otherIndustryField.required = true;
  } else {
    otherIndustryContainer.classList.add('hidden');
    otherIndustryField.required = false;
  }
});

// Function to show feedback message
function showFeedback(message, isSuccess) {
  const feedbackElement = document.getElementById('feedbackMessage');

  feedbackElement.textContent = message;
  feedbackElement.classList.remove('hidden', 'success', 'error');
  feedbackElement.classList.add(isSuccess ? 'success' : 'error', 'fade-in');
}

// Update this function in your JavaScript
function addMessage(text, isUser = false, isInitial = false) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', isUser ? 'user-message' : 'assistant-message');

  // Add initial-message class for the first messages when switching to chat
  if (isInitial) {
    messageElement.classList.add('initial-message');
  }

  // Use marked library to parse markdown
  messageElement.innerHTML = marked.parse(text);

  document.getElementById('chatMessages').appendChild(messageElement);
  document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
}

// Update your switchToChat function to include follow-up questions
function switchToChat(initialMessage) {
  document.getElementById('formContainer').classList.add('hidden');
  document.getElementById('chatContainer').classList.remove('hidden');

  // Add initial assistant messages
  addMessage(`Hello ${userName}! Here are your recommended modules:`, false, true);
  addMessage(initialMessage, false, true);
  addMessage("How can I help you with these recommendations?", false, true);

  // Example follow-up questions (replace this with your actual array)
  const followUpQuestions = [
      "[Q: How quickly can these modules be implemented?]",
      "[Q: Can I see a demo of the dashboards in action?]",
      "[Q: How does the system handle data security and access control?]"
  ];

  // Display the follow-up questions
  displayFollowUpQuestions(followUpQuestions);
}
// Chat input handler
document.getElementById('sendButton').addEventListener('click', function () {
  const userInput = document.getElementById('userInput');
  const message = userInput.value.trim();

  if (message) {
    addMessage(message, true);
    userInput.value = '';

    // Here you would typically send the message to your backend API
    // and then display the response
    // For now, we'll just simulate a response after a short delay

    document.getElementById('sendButton').disabled = true;

    setTimeout(() => {
      // This is where you'd handle the actual API response
      const responseText = "I'm happy to elaborate on any of these recommendations. " +
        "Would you like more details about a specific module, or would you prefer " +
        "information about how these modules work together?";

      addMessage(responseText, false);
      document.getElementById('sendButton').disabled = false;
    }, 1000);
  }
});
// Function to parse and display follow-up questions
function displayFollowUpQuestions(questionsArray) {
  const container = document.getElementById('followUpContainer');
  container.innerHTML = ''; // Clear any existing questions

  if (!questionsArray || questionsArray.length === 0) {
    container.style.display = 'none';
    return;
  }

  container.style.display = 'block';

  // Parse each question and create a button
  questionsArray.forEach(question => {
    // Extract the actual question text from the format [Q: actual question]
    const questionText = question.replace(/^\[Q:\s*(.*?)\]$/, '$1').trim();

    const button = document.createElement('button');
    button.classList.add('follow-up-button');
    button.textContent = questionText;

    // Add click handler
    button.addEventListener('click', () => {
      // Add the question as a user message
      addMessage(questionText, true);

      // Clear follow-up suggestions after choosing one
      container.innerHTML = '';

      // Disable the send button while processing
      document.getElementById('sendButton').disabled = true;

      // Here you would send the question to your backend API
      // For now, simulate a response
      setTimeout(() => {
        const responseText = "That's a great question about " +
          questionText.toLowerCase().substring(0, 20) + "... " +
          "Here's what you need to know...";

        addMessage(responseText, false);

        // Add new follow-up questions
        const newFollowUps = [
          "[Q: Tell me more about pricing options]",
          "[Q: How does this compare to other solutions?]",
          "[Q: What kind of support is included?]"
        ];
        displayFollowUpQuestions(newFollowUps);

        document.getElementById('sendButton').disabled = false;
      }, 1000);
    });

    container.appendChild(button);
  });
}
// Also allow sending message with Enter key
document.getElementById('userInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    document.getElementById('sendButton').click();
  }
});

// Form submission handler using async/await
document.getElementById('userInfoForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const submitButton = document.getElementById('submitButton');
  submitButton.disabled = true;
  submitButton.textContent = 'Submitting...';

  userName = document.getElementById('name').value;
  const company = document.getElementById('company').value;
  const role = document.getElementById('role').value;
  const industrySelect = document.getElementById('industry');
  const industry = industrySelect.value;

  let finalIndustry = industry;
  if (industry === 'other') {
    finalIndustry = document.getElementById('otherIndustry').value;
  }

  // Prepare data for sending
  const userData = {
    name: userName,
    company,
    role,
    industry: finalIndustry,
  };

  try {
    // Send data using fetch with await
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    // Extract the recommendations and follow-up questions
    const recommendations = data.reply || '';
    const followUpQuestions = data.followUpQuestions || [];

    // Show brief success message
    showFeedback(`Thank you, ${userName}! Preparing your personalized recommendations...`, true);

    // After a brief delay, switch to chat interface
    setTimeout(() => {
      switchToChat(recommendations);

      // Display the follow-up questions
      displayFollowUpQuestions(followUpQuestions);
    }, 1500);

  } catch (error) {
    // Handle error
    showFeedback(`Sorry, there was a problem submitting your information. Please try again or contact support. (${error.message})`, false);
    console.error('Error:', error);
    submitButton.disabled = false;
    submitButton.textContent = 'Get Started';
  }
});

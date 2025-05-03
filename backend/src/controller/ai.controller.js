import generateContent from "../services/ai.service.js"; // Import the function to interact with the API

const getResponse = async (req, res) => {
    try {
        // Extract the user prompt from the query parameters
        const userPrompt = req.query.userPrompt;

        // Log the user prompt for debugging purposes
        console.log(userPrompt);

        // If there's no prompt provided, return an error response
        if (!userPrompt) {
            return res.status(400).json({
                success: false,
                message: "No prompt provided. Please provide a valid prompt."
            });
        }

        // Call the generateContent function to get the response from the API
        const response = await generateContent(userPrompt);

        // Log the API response for debugging
        console.log(response);

        // If no response is received, return an error response
        if (!response) {
            return res.status(500).json({
                success: false,
                message: "Failed to get a response from the AI."
            });
        }

        // Return the response to the user
        return res.status(200).json({
            success: true,
            message: "Response generated successfully.",
            response: response
        });

    } catch (error) {
        // Catch any errors and log them
        console.error("Error generating content:", error);

        // Return an error response to the user
        return res.status(500).json({
            success: false,
            message: "An error occurred while generating content."
        });
    }
};

export { getResponse };

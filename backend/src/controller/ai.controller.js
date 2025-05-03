import generateContent from "../services/ai.service.js"; // Import the function to interact with the API

const codeReview = async (req, res) => {
    try {
        // Extract the user code from the query parameters
        const code = req.body.code;

        // Log the user code for debugging purposes
        console.log(code);

        // If there's no code provided, return an error response
        if (!code) {
            return res.status(400).json({
                success: false,
                message: "No code provided. Please provide a valid code."
            });
        }

        // Call the generateContent function to get the response from the API
        const codeReview = await generateContent(code);

        // Log the API response for debugging
        console.log(codeReview);

        // If no response is received, return an error response
        if (!codeReview) {
            return res.status(500).json({
                success: false,
                message: "Failed to get a response from the AI."
            });
        }

        // Return the response to the user
        return res.status(200).json({
            success: true,
            message: "Response generated successfully.",
            response: codeReview
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

export { codeReview };

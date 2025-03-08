exports.handler = async (event) => {
    console.log("Received SNS event:", JSON.stringify(event, null, 2));

    event.Records.forEach(record => {
        const message = record.Sns.Message;
        console.log("SNS Message:", message);
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "SNS message processed successfully" }),
    };
};
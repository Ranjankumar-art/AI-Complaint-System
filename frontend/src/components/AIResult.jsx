function AIResult({ result }) {
  if (!result) return null;

  return (
    <div className="ai-box">
      <h3>AI Analysis Result</h3>

      <p>
        <b>Priority:</b>{" "}
        {result.priority}
      </p>

      <p>
        <b>Department:</b>{" "}
        {result.department}
      </p>

      <p>
        <b>Summary:</b>{" "}
        {result.summary}
      </p>

      <p>
        <b>Auto Response:</b>{" "}
        {result.responseMessage}
      </p>
    </div>
  );
}

export default AIResult;
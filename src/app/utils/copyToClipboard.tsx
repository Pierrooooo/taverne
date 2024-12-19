import { useState } from "react";

type CopyToClipboardProps = {
  text: string;
};

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div style={{ position: "relative", display: "inline-block", cursor: "pointer" }} onClick={handleCopy}>
      <span>{text}</span>
      {copied && (
        <span
          style={{
            position: "absolute",
            bottom: -20,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: "3px 6px",
            borderRadius: "4px",
            fontSize: "12px",
          }}
        >
          Copied !
        </span>
      )}
    </div>
  );
};

export default CopyToClipboard;

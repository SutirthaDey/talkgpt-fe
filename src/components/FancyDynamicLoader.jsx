import { useEffect, useState } from "react";

export default function FancyDynamicLoader() {
  const messages = [
    "Thinking...",
    "Analyzing...",
    "Generating...",
    "Almost There...",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= messages.length - 1) return; // Stop cycling when last message is reached

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < messages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-4">
      <div
        className="loader h-12 w-12 border-4 rounded-full animate-spin"
        style={{
          borderColor: "#a16f75",
          borderTopColor: "transparent",
        }}
      ></div>

      <p
        className="text-lg font-medium transition-all duration-300 ease-in-out animate-fade"
        style={{ color: "#dc2626" }}
      >
        {messages[index]}
      </p>

      <style>{`
        @keyframes fade {
          0% { opacity: 0; transform: translateY(5px); }
          50% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-5px); }
        }
        .animate-fade {
          animation: fade 1.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}

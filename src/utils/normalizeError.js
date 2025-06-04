export function normalizeError(error) {
  let { message } = JSON.parse(error);

  if (Array.isArray(message)) {
    message = message.join("\n");
  }

  return message;
}

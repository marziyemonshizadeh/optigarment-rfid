type ToLocalTimeStringOption = {
  hour: "numeric" | "2-digit" | undefined;
  minute: "numeric" | "2-digit" | undefined;
  second: "numeric" | "2-digit" | undefined;
};
export function toLocalTimeString() {
  const options: ToLocalTimeStringOption = {
    //   hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return new Date().toLocaleTimeString("fa-IR", options);
}

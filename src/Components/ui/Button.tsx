const Button: React.FC<{
  variant: "outline" | "default";
  children: React.ReactNode;
}> = ({ variant, children }) => {
  let className;
  if (variant === "outline") {
    className =
      "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-black dark:text-white";
  } else {
    className =
      "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 text-white bg-black";
  }
  return <button className={className}>{children}</button>;
};

export default Button;

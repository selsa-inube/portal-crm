interface IAppearance {
  icon: React.ReactNode;
  appearance:
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "help"
    | "dark"
    | "gray"
    | "light";
  label: string;
}

export type { IAppearance };

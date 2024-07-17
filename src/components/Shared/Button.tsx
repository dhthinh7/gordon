/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { AppIcon } from "../AppIcons/AppIcons";

export enum ButtonTheme {
  Solid = "solid",
  Outline = "outline",
  Back = "back",
}

export interface IThemeClassNames {
  [key: string]: string;
}
export const ThemeClassNames: IThemeClassNames = {
  [ButtonTheme.Solid]:
    "text-white border bg-primary-text-button py-[15px] px-[30px] rounded-md lg:min-w-[75px]",
  [ButtonTheme.Outline]:
    "text-primary-text-button border border-primary-text-button py-[15px] px-[15px] rounded-md lg:min-w-[75px]",
  [ButtonTheme.Back]: "backClass",
};

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  labelText?: string;
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
  theme?: ButtonTheme;
  link?: string;
  disabled?: boolean;
  source?: string;
}

export const Button = ({
  isLoading,
  labelText,
  className,
  icon,
  children,
  theme = ButtonTheme.Solid,
  link,
  disabled,
  source,
  ...props
}: IButtonProps) => {
  const buttonClassnames = theme
    ? ThemeClassNames[theme]
    : "button w-full border";

  const renderButton = () => {
    return (
      <button
        id={source && !source.includes("undefined") ? source : undefined}
        disabled={isLoading || disabled}
        {...props}
        className={cn(buttonClassnames, className)}
        onClick={props.onClick}
      >
        <div
          className="flex gap-2 items-center justify-center"
          id={
            source && !source.includes("undefined")
              ? `${source}-child`
              : undefined
          }
        >
          <p
            className=""
            id={
              source && !source.includes("undefined")
                ? `${source}-child-two`
                : undefined
            }
          >
            {labelText}
          </p>
          <AppIcon name="arrowCircle" width={24} height={24} />
        </div>
        {children}
      </button>
    );
  };
  return (
    <>
      {!link ? (
        renderButton()
      ) : (
        <div className="flex">
          <a href={link}>{renderButton()}</a>
        </div>
      )}
    </>
  );
};

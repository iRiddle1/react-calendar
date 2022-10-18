export interface ICommonInputProps {
  value: string;
  placeholder: string;
  gap?: string;
  [key: string]: any;
}

export interface IInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ITextAreaProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

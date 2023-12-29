export interface SelectItem {
  value: string;
  name: string;
}

export interface SelectProps {
  items: SelectItem[];
  label: string;
  value: string;
  onChange: () => void;
}

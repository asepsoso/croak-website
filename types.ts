export interface ChatState {
  output: string;
  loading: boolean;
  error: string | null;
}

export interface FrogAvatarProps {
  isAnimating: boolean;
}

export interface ResponseCardProps {
  output: string;
  loading: boolean;
  onAsk: () => void;
}

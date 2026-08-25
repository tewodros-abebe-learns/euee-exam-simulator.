import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      let displayMessage = "Something went wrong. Please try again later.";
      let isFirestoreError = false;

      try {
        if (this.state.error?.message) {
          const parsed = JSON.parse(this.state.error.message);
          if (parsed && typeof parsed === 'object' && parsed.error && parsed.operationType) {
            isFirestoreError = true;
            if (parsed.error.includes("Missing or insufficient permissions")) {
              displayMessage = "You don't have permission to perform this action. Please make sure you are logged in correctly.";
            } else {
              displayMessage = `Database error: ${parsed.error}`;
            }
          }
        }
      } catch (e) {
        // Not a JSON error message, use default or the raw message
        if (this.state.error?.message) {
          displayMessage = this.state.error.message;
        }
      }

      return (
        <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="bg-red-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              {isFirestoreError ? "Database Connection Issue" : "Application Error"}
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
              {displayMessage}
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-[#8AB4F8] text-gray-900 py-4 rounded-2xl font-bold hover:bg-[#AECBFA] transition-all shadow-lg shadow-[#8AB4F8]/20 flex items-center justify-center gap-2"
              >
                <RefreshCcw className="w-4 h-4" />
                Reload Page
              </button>
              <button
                onClick={this.handleReset}
                className="w-full bg-white/5 text-[var(--text-primary)] py-4 rounded-2xl font-bold hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Go to Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

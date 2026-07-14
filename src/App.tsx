export interface AppProps {
  title?: string;
}

export function App({ title = 'orgdemo' }: AppProps) {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}
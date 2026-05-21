import { Code, DocPage } from "../_doc-page";

export default function Page() {
  return (
    <DocPage title="LoginPanel" intro="Auth surface with title, description, social, body form, and footer slots.">
      <Code>{`<LoginPanel
  title="Welcome back"
  description="Sign in to continue."
  social={<Action variant="outline">Continue with GitHub</Action>}
  footer={<>Don't have an account? <a>Sign up</a></>}
>
  <input ... />
  <input type="password" ... />
  <Action variant="glow">Sign in</Action>
</LoginPanel>`}</Code>
    </DocPage>
  );
}

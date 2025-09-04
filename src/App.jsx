// src/App.jsx
import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}>
          <h1>Welcome {user?.signInDetails?.loginId ?? user?.username}</h1>

          {/* 👇 This is the banner you asked to add for the CI/CD proof */}
          <p style={{ marginTop: 12 }}>Hello from Amplify Hosting!</p>

          <p style={{ marginTop: 12, color: "#aaa" }}>
            (This page is using Amplify Auth. Create an account, verify by email, then sign in.)
          </p>

          <button onClick={signOut} style={{ marginTop: 24 }}>
            Sign out
          </button>
        </main>
      )}
    </Authenticator>
  );
}

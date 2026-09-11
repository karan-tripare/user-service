# User Service

A small internal service that powers user lookups for our admin dashboard.

## Background

This service was written by one of our interns during onboarding and it is
currently running in production.

It works. The dashboard uses it every day.

## Running locally

```bash
npm install
npm start
```

The service starts on port `3002`.

### Endpoints

- `GET /users?search=<term>&sort=<column>` — search users by name
- `GET /user/:id` — fetch a single user by id

Example:

```bash
curl "http://localhost:3002/users?search=john"
curl "http://localhost:3002/user/42"
```

## Your task

Treat this exactly as you would a real piece of code that landed on your plate
at work. Read through it as if you are the engineer now responsible for it. That
includes the database it talks to — the schema and data model are yours to
review as much as the code itself.

- **If you would change anything about this code** — for any reason at all —
  open a Pull Request with your changes. Commit messages and a short PR
  description explaining your reasoning are welcome.
- **If you believe the code is fine as it is**, open a Pull Request that adds a
  markdown file (`REVIEW.md`) stating that you reviewed it and found nothing you
  would change, along with your reasoning.

**In both cases, your PR must include a `REVIEW.md` file.** In it, also write
down anything you know *should* be improved but did not implement — whether you
ran out of time, it was out of scope, or it needed a decision that was not yours
to make. Note why you left it out and how you would approach it. We care as much
about what you can identify as what you can implement, so this section is
mandatory even if you changed the code.

There is no single "correct" answer we are looking for — we are interested in
how you think.

Please do not push directly to `main`; open a PR from a branch or your fork.

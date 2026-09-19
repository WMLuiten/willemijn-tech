# willemijn.tech

Personal website for willemijn.tech.

This is a small, mostly static personal website. Optimize for simplicity,
maintainability, performance, and ease of understanding rather than for
generality or hypothetical future requirements.

The site is based on Astro Haze, but it should increasingly reflect the
needs and identity of willemijn.tech rather than preserve Haze features
for their own sake.

## Core principles

### Keep it lightweight

- Prefer static HTML and CSS.
- Prefer Astro components over client-side framework components.
- Do not add React, Vue, Svelte, or another client-side framework unless
  the task genuinely requires client-side application state that cannot
  reasonably be handled with small amounts of vanilla JavaScript.
- Prefer no JavaScript when HTML and CSS are sufficient.
- Prefer small amounts of vanilla JavaScript when interactivity is needed.
- Do not add a dependency when the same result can reasonably be achieved
  with Astro, browser APIs, CSS, or existing project dependencies.
- Do not introduce new services, databases, APIs, or infrastructure without
  a concrete requirement.
- Do not build abstractions for hypothetical future requirements.
- Remove unused code and dependencies when features are removed.

### Preserve static hosting

The main website should remain statically buildable and suitable for
static hosting on Cloudflare.

Do not introduce server-side rendering, middleware, server endpoints,
runtime databases, or server-side application state unless the issue
explicitly requires them and the architectural change has been discussed
first.

External services may be used for narrowly scoped functionality, such as
a contact form or CMS, without turning the main site into a dynamic
application.

### Design

- Preserve the established visual language unless the task explicitly
  concerns design changes.
- Use the project's existing color palette and design tokens.
- Reuse existing components and styles where appropriate.
- Avoid generic developer-portfolio aesthetics.
- Do not introduce gradients, glassmorphism, decorative blobs, technology
  badges, skill bars, or similar elements unless explicitly requested.
- Prefer typography, spacing, hierarchy, and composition over decorative UI.
- Avoid unnecessary cards and containers when normal document layout is
  sufficient.
- The site should feel like a personal website, not a SaaS landing page.
- Desktop and mobile layouts should both feel intentional.

### Scope discipline

Implement the issue that was requested.

Do not opportunistically:

- redesign unrelated pages;
- refactor unrelated code;
- add speculative features;
- introduce new architecture;
- add analytics, authentication, databases, or other infrastructure;
- implement future roadmap items.

If you notice something worth improving outside the issue scope, mention
it in the completion report instead of implementing it.

### Dependencies

Before adding a dependency:

1. Check whether the project or platform already provides the capability.
2. Check whether a small native implementation would be simpler.
3. Explain why the dependency is necessary.

Do not add dependencies solely for convenience when the functionality is
small.

When removing functionality, check whether its dependencies can also be
removed.

### Accessibility

Accessibility is part of completion, not a later enhancement.

- Use semantic HTML.
- Maintain a logical heading hierarchy.
- Ensure interactive elements are keyboard accessible.
- Provide appropriate labels for form controls.
- Provide meaningful alt text where images convey information.
- Respect reduced-motion preferences when adding motion.
- Maintain sufficient color contrast.
- Do not rely on color alone to communicate state.

### Performance

- Avoid unnecessary client-side JavaScript.
- Avoid unnecessarily large assets.
- Use responsive images where appropriate.
- Preserve Astro's static-first behavior.
- Do not optimize prematurely, but avoid introducing obvious performance
  regressions.

## Development

When starting the dev server, use background mode:

```sh
astro dev --background
```

Manage the background server with:

```sh
astro dev status
astro dev logs
astro dev stop
```

## Working on an issue

Before making changes:

1. Read this file.
2. Inspect the relevant existing code and components.
3. Understand the issue scope.
4. Check existing dependencies before introducing anything new.

During implementation:

- Make the smallest coherent change that satisfies the issue.
- Preserve working behavior outside the requested scope.
- Follow existing project conventions unless there is a concrete reason
  to change them.

Before declaring the task complete:

1. Run the project's relevant checks.
2. Run a production build.
3. Check the changed pages at relevant desktop and mobile widths.
4. Check for broken links and obvious console/build errors.
5. Review `git diff` for accidental or unrelated changes.
6. Do not commit, push, merge, or open a pull request unless explicitly
   requested.

Report:

- what changed;
- important implementation decisions;
- dependencies or services added or removed;
- checks performed and their results;
- anything noticed that belongs in a future issue.

## Documentation

Full Astro documentation:
[https://docs.astro.build](https://docs.astro.build)

Consult the relevant official Astro documentation before making changes
to unfamiliar Astro functionality, especially:

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Framework components](https://docs.astro.build/en/guides/framework-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling](https://docs.astro.build/en/guides/styling/)
- [Internationalization](https://docs.astro.build/en/guides/internationalization/)

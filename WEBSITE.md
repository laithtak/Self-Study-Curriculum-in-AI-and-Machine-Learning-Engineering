# Interactive learning website

This is the interactive companion to the [original 96-week curriculum](README.md). The original README remains the complete, authoritative syllabus. The website parses the four weekly-plan tables at build time so content changes are reflected without duplicating the curriculum.

## Develop locally

\`\`\`bash
npm install
npm run dev
\`\`\`

Open the local address printed by Vite.

## Validation

\`\`\`bash
npm test
npm run build
\`\`\`

## Features

- Responsive, dark-mode-first overview and semester navigation.
- All 96 weekly assignments extracted from the original curriculum.
- Browser-local checklists for the five weekly evidence criteria.
- Searchable weekly workspace and per-semester roadmap.
- Interactive gradient descent lab: experiment with learning rate, steps, convergence and divergence.

Progress is local to the browser, not synchronized to GitHub or across devices. Clearing site storage resets the saved checkboxes. Assessment checkboxes are self-reported, not independently graded.

## Deploy

Run \`GITHUB_PAGES=true npm run build\` for GitHub Pages under the repository subpath, or \`npm run build\` on a host that serves from the domain root. Deploy the resulting \`dist/\` directory to your static hosting provider. A GitHub Pages deployment is not automatically enabled by this branch.

## Curriculum integrity

The application uses \`src/curriculum.js\` to extract the weekly table content from \`README.md\`. Keep table columns in the order \`Week | Focus and reading | Required practical work | Evidence to commit\`. The accompanying tests assert 24 weeks in each semester.

## Potential extensions

Add evidence links and reviewer feedback, accessible graphical knowledge maps, unit-tested PCA/attention visualizations, progress export/import, and cross-device account synchronization if needed. Avoid implying that self-completed checklists establish accreditation or mastery.

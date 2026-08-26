# React.js: Zero to a Task Manager + Pomodoro App
A self-paced course that takes you from JS basics to shipping a complete task manager with a built-in Pomodoro timer.

**Format:** 9 modules. Module 0.5 is a JS refresher since it's been a while. Modules 1–6 build React skills through small projects that feed directly into your final app; Module 7 is the capstone build (task manager + Pomodoro timer); Module 8 is deployment/polish.

**Suggested pace:** 7–10 weeks at ~5-8 hrs/week.

---

## Prerequisites Check
You said you know a little JS but want to relearn it properly — that's exactly what Module 0.5 is for. By the end of it you should be comfortable with:
- Variables, functions, arrays/objects, `map`/`filter`/`reduce`
- ES6+: arrow functions, destructuring, spread/rest, template literals, `import`/`export`
- Basic HTML/CSS
- Using the browser dev tools console

Don't skip 0.5 even if some of it feels familiar — shaky fundamentals are the #1 reason React feels harder than it should.

---

## Module 0.5 — JavaScript Refresher (Days 1–4, before touching React)
Do this in plain JS files or a site like JSBench/CodeSandbox — no React yet. The goal is muscle memory, not just recognition.

**Concepts to redo from scratch**
- `let`/`const`, template literals, arrow functions vs regular functions (and `this` differences — briefly, you won't need it much in React)
- Arrays: `map`, `filter`, `reduce`, `find`, `some`/`every`, spread (`[...arr]`)
- Objects: destructuring, spread (`{...obj}`), shorthand properties, optional chaining (`?.`)
- Array/object immutability — why `arr.push()` is dangerous in React and `[...arr, newItem]` is the pattern you'll use constantly
- Modules: `import`/`export` (default vs named)
- Async JS: Promises, `async`/`await`, `fetch()`, try/catch for errors
- `Date` object basics (you'll need this for the Pomodoro timer's countdown logic and task due dates)
- `setTimeout`/`setInterval` and `clearInterval` — directly relevant to building the Pomodoro timer later

**Build (no React, just JS)**
- Given an array of task objects (`{id, title, done}`), write functions to: add a task immutably, toggle `done` immutably, remove a task immutably, filter completed vs active
- A plain JS countdown timer that logs remaining seconds to the console and stops at zero — this is the logic core of your future Pomodoro timer
- Fetch data from a public API using `async`/`await` and log the parsed JSON

**Checkpoint:** You can write an immutable array update and a working countdown timer without looking anything up.

---

## Module 0 — Setup (Day 1)
- Install Node.js (LTS version)
- Create your first app with **Vite**: `npm create vite@latest my-app -- --template react`
- Understand the folder structure: `src/`, `main.jsx`, `App.jsx`, `index.html`
- Install a code editor extension for React/JSX syntax highlighting (VS Code + ES7+ React snippets)
- **Checkpoint:** Get the default Vite counter app running locally with `npm run dev`

---

## Module 1 — Components & JSX (Days 2–5)
**Concepts**
- What a component is (a function that returns UI)
- JSX syntax rules (single root element, `className` not `class`, camelCase attributes)
- Embedding JS expressions in JSX with `{}`
- Props: passing data into components, `props.children`
- Rendering lists with `.map()` and why `key` matters
- Conditional rendering: `&&`, ternaries, early returns

**Build**
- A `ProfileCard` component that takes name, bio, and avatar as props
- A `List` component that renders an array of items passed as props
- Practice: build a small "recipe card" grid from a hardcoded array of recipe objects

**Checkpoint project:** A static **portfolio landing page** — Header, About, Projects (rendered from an array), Footer — all as separate components composed in `App.jsx`. No interactivity yet, just component composition.

---

## Module 2 — State & Events (Days 6–10)
**Concepts**
- `useState` — what state is, why you can't just mutate a variable
- Event handlers: `onClick`, `onChange`, `onSubmit`
- Controlled inputs (forms driven by state)
- Updating state based on previous state (`setCount(c => c + 1)`)
- Lifting state up when two components need to share data
- Rendering derived values vs. storing redundant state

**Build**
- A counter with increment/decrement/reset
- A to-do list: add item, toggle complete, delete item
- A controlled form (name, email, message) with basic validation and a "submitted" state

**Checkpoint project:** A **fully working To-Do App** — add, edit, delete, mark complete, filter by status (all/active/completed), item count. This is the classic React rite of passage, and it's also literally the first version of your final task manager, so build it with care — you'll extend this exact app later rather than starting over.

---

## Module 3 — Effects & Lifecycle (Days 11–15)
**Concepts**
- `useEffect` — running code in response to renders
- Dependency arrays: `[]` vs `[dep]` vs no array, and what each means
- Cleanup functions (timers, subscriptions, event listeners)
- Fetching data from an API inside `useEffect`
- Loading and error states
- Why you should avoid unnecessary effects (a common beginner trap)

**Build**
- A component that fetches and displays data from a public API (e.g. a joke API or a Pokémon API)
- A live search box that fetches results as you type (with debouncing)
- A `useEffect` that sets up and cleans up a `setInterval` clock — **this is the exact pattern the Pomodoro timer needs**, so treat it seriously: start/pause/reset a countdown, and make sure the interval is always cleared on unmount or pause (a very common bug is timers that keep running after the component using them disappears)

**Checkpoint project:** A **standalone Pomodoro timer component** (25-min work / 5-min break cycle, start/pause/reset, switches mode automatically at zero). Build this as its own small app first, separate from the task manager — you'll drop it into the capstone once it's solid. Also build the **weather dashboard** exercise (fetch a city's weather, loading/error states, remember last search in `localStorage`) for API-call practice.

---

## Module 4 — Routing & Multi-Page Apps (Days 16–19)
**Concepts**
- Single Page Applications vs traditional multi-page sites
- `react-router-dom`: `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`
- Dynamic routes and URL params (`/product/:id`)
- Nested routes and layouts
- Programmatic navigation (`useNavigate`)
- 404 / not-found handling

**Build**
- A 3-page site (Home, About, Contact) with a nav bar and active-link styling
- A product listing page that links to individual product detail pages using URL params

**Checkpoint project:** Add routing to your weather dashboard or to-do app from earlier — e.g. a "history" page showing past searches, or a detail view.

---

## Module 5 — Component Architecture & Hooks Deep Dive (Days 20–25)
**Concepts**
- Custom hooks: extracting reusable logic (e.g. `useFetch`, `useLocalStorage`)
- `useContext` + Context API: avoiding prop drilling (e.g. theme, auth, cart state)
- `useReducer`: managing complex state logic as an alternative to multiple `useState` calls
- `useRef`: accessing DOM nodes, storing mutable values without re-rendering
- Component composition patterns (children, render props basics)
- Performance basics: `React.memo`, `useMemo`, `useCallback` (know what they solve, don't over-apply them)

**Build**
- A `useLocalStorage` custom hook, reused across two different components
- A theme toggler (light/dark) using Context
- Refactor your to-do app's state management to use `useReducer`

**Checkpoint project:** A **shopping cart context** — a `CartProvider` wrapping your app, with `addToCart`, `removeFromCart`, and `cartTotal` available to any component via `useContext`, no prop drilling.

---

## Module 6 — Forms, Validation & Talking to a Backend (Days 26–30)
**Concepts**
- Handling more complex forms (multiple fields, nested data)
- Client-side validation patterns (manual, or a light library like `react-hook-form`)
- Making POST/PUT/DELETE requests, not just GET
- Handling async submission states (submitting, success, error)
- Basics of a mock backend: `json-server` or a free API like `jsonplaceholder` or `Supabase`
- Environment variables for API keys/URLs (`.env`, `import.meta.env`)

**Build**
- A signup/login form with validation and error messages
- A "create post" form that POSTs to a mock backend and updates the UI on success
- Full CRUD (Create, Read, Update, Delete) against `json-server` for a simple resource (e.g. "notes" or "tasks")

**Checkpoint project:** A **notes app with a real backend** — list, create, edit, delete notes, all persisted via API calls (using `json-server` locally is fine). This is your dress rehearsal for the capstone.

---

## Module 7 — CAPSTONE: Task Manager + Pomodoro Timer (Weeks 6–8)
This is where everything comes together into one app. You've already built the pieces separately (to-do CRUD in Module 2, Pomodoro timer in Module 3, auth/backend patterns in Module 6) — now they get merged and leveled up.

### Core concept
A task manager where each task can be "focused on" using an attached Pomodoro timer — e.g. clicking a task starts a 25-minute focus session for that specific task, and the app tracks how many pomodoros each task has accumulated.

### Required feature set
**Task management**
- Create, edit, delete, mark-complete tasks
- Each task has: title, optional description, optional due date, priority (low/med/high), status
- Filter/sort: by status, priority, due date
- Group or tag tasks into categories/projects (e.g. "Work", "Personal") — this is what makes it a "manager" and not just a list

**Pomodoro timer**
- Standard 25/5 work/break cycle (customizable durations in settings)
- Start/pause/reset controls
- Auto-switches between work and break, with a sound or browser notification on completion
- **Session linked to a task:** starting a timer while a task is selected logs a completed pomodoro against that task when the session finishes
- A small stats view: pomodoros completed today, total focus time per task

**App-wide requirements**
- **Routing:** at least a Dashboard/task list view, a Task detail view, and a Stats/history view
- **Auth:** sign up, log in, log out, protected routes (Supabase Auth or Firebase Auth — either is fine, Supabase pairs nicely with Postgres if you want SQL practice)
- **Backend/persistence:** tasks and pomodoro session logs saved to a real backend (Supabase/Firebase/your own API), not just `localStorage` — so a user's data survives across devices and refreshes
- **State management:** Context for the active timer state and the current user, so both are accessible app-wide without prop drilling
- **Forms:** task creation/edit form with validation (title required, sensible date handling)
- **Loading & error states:** visible for every fetch/save operation
- **Responsive design:** usable on mobile — a lot of people run Pomodoro timers from their phone

### Database schema
Two tables are enough for the core app. Use this as your starting point (Postgres/Supabase syntax shown, but the shape is the same for Firebase collections — just adapt types):

```sql
-- users table is handled automatically by Supabase/Firebase Auth, you don't create this yourself

create table tasks (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid references auth.users(id) not null,
  title       text not null,
  description text,
  priority    text check (priority in ('low', 'medium', 'high')) default 'medium',
  status      text check (status in ('todo', 'in_progress', 'done')) default 'todo',
  category    text,               -- e.g. "Work", "Personal" — simple string is fine to start
  due_date    date,
  created_at  timestamptz default now()
);

create table pomodoro_sessions (
  id          uuid primary key default gen_random_uuid(),
  task_id     uuid references tasks(id) on delete cascade not null,
  user_id     uuid references auth.users(id) not null,
  duration_minutes int not null,        -- 25 for a work session, 5 for a break
  session_type text check (session_type in ('work', 'break')) not null,
  completed   boolean default false,     -- true only if the timer ran to zero, not if abandoned
  started_at  timestamptz not null,
  ended_at    timestamptz
);
```

**Why it's split this way:**
- `pomodoro_sessions` is its own table (not just a counter column on `tasks`) because you need individual session records to build the stats page — "pomodoros today," "focus time this week," "focus time per task" are all just different aggregations (`GROUP BY`) over this table. A single counter can't answer any of those.
- `session_type` distinguishing work/break means your stats only need to sum `duration_minutes where session_type = 'work' and completed = true` — abandoned or break sessions won't inflate your focus-time numbers.
- `on delete cascade` on `pomodoro_sessions.task_id` means deleting a task cleans up its session history automatically, so you don't get orphaned rows.
- Keep `user_id` on both tables (not just `tasks`) so your backend can enforce row-level security directly on sessions too, without having to join through tasks every time.

If you're using Supabase, this is also where you'd turn on **Row Level Security** and add a policy like `user_id = auth.uid()` on both tables — worth doing as soon as the tables exist, not as an afterthought.

### Suggested build order
1. Wireframe 3 screens on paper: task list, task detail (with timer), stats page
2. Set up backend using the schema above (`tasks` + `pomodoro_sessions` tables)
3. Build auth first — tasks need to belong to a user
4. Build task CRUD against the real backend (this reuses your Module 2 + Module 6 work almost directly)
5. Drop in the Pomodoro timer component from Module 3, then wire it to a selected task via Context
6. On timer completion, write a session record to the backend and update the task's pomodoro count
7. Build the stats view: query sessions, aggregate by day/task
8. Polish: notifications on timer completion, empty states, responsive layout
9. Full run-through: create account → create a task → run a full pomodoro on it → check it shows up in stats → refresh the page and confirm everything persisted

**Checkpoint:** You can sign up, create a task, run a Pomodoro session against it, see the completed session reflected in both the task's pomodoro count and the stats page, and everything is still there after a page refresh or logging back in later.

### Optional stretch features (only after the core works)
- Drag-and-drop task reordering or a kanban-style board (To Do / In Progress / Done)
- Daily/weekly focus-time chart (e.g. with `recharts`)
- Keyboard shortcuts (spacebar to start/pause timer)
- Dark mode toggle using the Context pattern from Module 5

---

## Module 8 — Deployment & Final Polish (Week 8-9)
**Concepts**
- Production builds (`npm run build`) vs dev mode
- Deploying to Vercel or Netlify (connect GitHub repo, auto-deploy on push)
- Environment variables in production
- Basic SEO: page titles, meta tags
- Error boundaries for graceful failure
- A README that explains what the app does and how to run it

**Final tasks**
- Deploy your capstone live with a real URL
- Write a README with screenshots
- Push clean, commented code to GitHub
- (Optional but valuable) Record a 2-minute demo video walking through the app

**You're done when:** a stranger can visit your deployed URL, sign up, use the core feature, and it works without you explaining anything.

---

## Reference resources (use alongside, not instead of, building)
- Official docs: react.dev (the new docs are excellent and example-heavy)
- `react-router-dom` docs for routing specifics
- Supabase or Firebase docs for auth/backend if you choose that route
- MDN for any JS fundamentals gaps

## How to actually retain this
- Type every example yourself — never copy-paste from a tutorial
- After each module, close the tutorial and rebuild the checkpoint project from memory
- When stuck, try to debug for 20-30 minutes before looking up the answer — struggling is where the learning happens
- Keep every project in its own GitHub repo, even small ones — it becomes your portfolio

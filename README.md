
## Food Corner

A responsive, chef-themed website built using React.js, Tailwind CSS, Daisy UI, and AOS animation. The website showcases food items and provides a user-friendly system to manage recipes through "Want to Cook" and "Currently Cooking" tables.

### Live Demo & Source Code

- 🔗 [Live URL](https://present-jam.surge.sh/)

- 💻 [GitHub Repository](https://github.com/Sohelrana2815/food-corner)












## Features


1. Navbar & Banner
- A fully responsive navbar for smooth navigation.
- A visually appealing banner with animations for a welcoming experience.

2. Food Item Cards

Each card includes:
- Title and description of the recipe.
- Ingredients displayed as an unordered list.
- Time required and calories information.
- A Want to Cook button to add the recipe to the "Want to Cook"   table.

3. Want to Cook Table

Displays selected recipes with the following details:

- Name
- Time
- Calories
- Includes a Preparing button to move recipes to the "Currently Cooking" table.
- Tracks and shows the total number of recipes added.

4. Currently Cooking Table
 Lists recipes currently being prepared, including:
 - Name, Time, and Calories
 - Displays the total time and total calories across all recipes in this table.
## Tech Stack

**React.js:** Component-based architecture for building the UI.

**Tailwind CSS:** For styling with utility-first classes.

**Daisy UI:** Pre-designed components for faster development.

**AOS Animation:**  Smooth animations for an engaging user experience.



# How It Works
1. Adding Recipes:

- Click the Want to Cook button on a food item card to add it to the "Want to Cook" table.

2. Moving to Currently Cooking:

- Click the Preparing button in the "Want to Cook" table to move the recipe to the "Currently Cooking" table.

- The recipe is removed from the "Want to Cook" table, and the count decreases accordingly.

3. Tracking Progress:

- The "Currently Cooking" table dynamically updates the total time and total calories as recipes are added.


## Responsive Design

- Desktop Layout: Cards and tables are displayed side by side for better visual hierarchy.

- Mobile Layout: The "Currently Cooking" table is displayed above the cards to ensure a seamless experience.
## Running Tests

1. Clone the repository:

```bash
  git clone [repository-url]
  cd [repository-name]

```
2. Install dependencies:

```bash
 npm install

```
3. Run the development server:

```bash
 npm run dev
```



